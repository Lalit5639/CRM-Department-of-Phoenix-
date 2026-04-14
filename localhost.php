<?php
declare(strict_types=1);

$baseDir = __DIR__;
$crmFile = $baseDir . DIRECTORY_SEPARATOR . 'index.html';
$readmeFile = $baseDir . DIRECTORY_SEPARATOR . 'Readme.txt';
$schemaFile = $baseDir . DIRECTORY_SEPARATOR . 'database.sql';

function h(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function fileContentsOrMessage(string $path): string
{
    return is_file($path) ? (string) file_get_contents($path) : 'File not found.';
}

function renderLayout(string $title, string $body): void
{
    echo <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{$title}</title>
  <style>
    :root{
      --bg:#eef2f7;
      --panel:#ffffff;
      --panel-soft:#f8fafc;
      --text:#1f2937;
      --muted:#6b7280;
      --line:#d7e0ea;
      --brand:#185fa5;
      --brand-dark:#134b82;
      --radius:18px;
    }
    *{box-sizing:border-box}
    body{margin:0;font-family:"Segoe UI",Tahoma,Geneva,Verdana,sans-serif;background:var(--bg);color:var(--text)}
    a{text-decoration:none;color:inherit}
    .wrap{max-width:1200px;margin:0 auto;padding:28px 18px 40px}
    .topbar{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-bottom:24px}
    .brand{font-size:28px;font-weight:700}
    .sub{color:var(--muted);font-size:14px;margin-top:4px}
    .nav{display:flex;gap:10px;flex-wrap:wrap}
    .nav a{padding:10px 14px;border-radius:999px;background:var(--panel);border:1px solid var(--line);font-size:14px}
    .nav a:hover{border-color:var(--brand);color:var(--brand)}
    .hero,.panel{background:var(--panel);border:1px solid var(--line);border-radius:var(--radius);box-shadow:0 14px 40px rgba(15,23,42,.06)}
    .hero{padding:28px;margin-bottom:18px}
    .hero h1{margin:0 0 10px;font-size:34px}
    .hero p{margin:0;color:var(--muted);max-width:760px;line-height:1.6}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin-top:22px}
    .card{background:var(--panel-soft);border:1px solid var(--line);border-radius:16px;padding:18px}
    .card h3{margin:0 0 8px;font-size:18px}
    .card p{margin:0 0 14px;color:var(--muted);line-height:1.5;font-size:14px}
    .btn{display:inline-block;padding:10px 14px;border-radius:12px;background:var(--brand);color:#fff;font-size:14px}
    .btn:hover{background:var(--brand-dark)}
    .panel-head{padding:18px 22px;border-bottom:1px solid var(--line)}
    .panel-head h2{margin:0;font-size:24px}
    .panel-body{padding:0}
    .frame{width:100%;height:78vh;border:0;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius);background:#fff}
    pre{margin:0;padding:22px;white-space:pre-wrap;word-break:break-word;font:13px/1.6 Consolas,"Courier New",monospace;background:#fff;border-bottom-left-radius:var(--radius);border-bottom-right-radius:var(--radius)}
    .notice{margin-top:18px;padding:14px 16px;background:#fff8e8;border:1px solid #f4ddb0;border-radius:14px;color:#7a5b17}
    @media (max-width:768px){
      .hero h1{font-size:28px}
      .topbar{align-items:flex-start;flex-direction:column}
      .frame{height:70vh}
    }
  </style>
</head>
<body>
  <div class="wrap">
    {$body}
  </div>
</body>
</html>
HTML;
}

function jsonOut(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload, JSON_PRETTY_PRINT);
    exit;
}

$api = $_GET['api'] ?? '';
if ($api !== '') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
    if (($_SERVER['REQUEST_METHOD'] ?? 'GET') === 'OPTIONS') {
        http_response_code(204);
        exit;
    }
}
if ($api === 'dashboard') {
    header('Content-Type: application/json; charset=utf-8');

    $conn = @new mysqli('localhost', 'root', '', 'phoenix_crm');
    if ($conn->connect_error) {
        http_response_code(500);
        echo json_encode([
            'ok' => false,
            'message' => 'Database connection failed.',
            'error' => $conn->connect_error,
        ], JSON_PRETTY_PRINT);
        exit;
    }

    $result = $conn->query('SELECT * FROM recovery_aging_view');
    if (!$result) {
        http_response_code(500);
        echo json_encode([
            'ok' => false,
            'message' => 'Query failed.',
            'error' => $conn->error,
        ], JSON_PRETTY_PRINT);
        $conn->close();
        exit;
    }

    echo json_encode([
        'ok' => true,
        'rows' => $result->fetch_all(MYSQLI_ASSOC),
    ], JSON_PRETTY_PRINT);
    $conn->close();
    exit;
}

if ($api === 'save') {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        jsonOut(['ok' => false, 'message' => 'Method not allowed.'], 405);
    }

    $raw = file_get_contents('php://input') ?: '';
    $input = json_decode($raw, true);
    if (!is_array($input)) {
        jsonOut(['ok' => false, 'message' => 'Invalid JSON body.'], 400);
    }

    $type = (string)($input['type'] ?? '');
    $mode = (string)($input['mode'] ?? 'add');
    $payload = is_array($input['payload'] ?? null) ? $input['payload'] : [];

    $conn = @new mysqli('localhost', 'root', '', 'phoenix_crm');
    if ($conn->connect_error) {
        jsonOut(['ok' => false, 'message' => 'Database connection failed.', 'error' => $conn->connect_error], 500);
    }
    $conn->set_charset('utf8mb4');

    $findIdByName = static function (mysqli $db, string $table, string $idCol, string $nameCol, ?string $name): ?string {
        $name = trim((string)$name);
        if ($name === '') {
            return null;
        }
        $sql = "SELECT {$idCol} FROM {$table} WHERE {$nameCol} = ? LIMIT 1";
        $stmt = $db->prepare($sql);
        if (!$stmt) {
            return null;
        }
        $stmt->bind_param('s', $name);
        $stmt->execute();
        $result = $stmt->get_result();
        $row = $result ? $result->fetch_assoc() : null;
        $stmt->close();
        return $row[$idCol] ?? null;
    };

    try {
        switch ($type) {
            case 'orders': {
                $dealerName = (string)($payload['dealer'] ?? '');
                $rdmName = (string)($payload['rdm'] ?? '');
                $productName = (string)($payload['product'] ?? '');
                $dealerId = $findIdByName($conn, 'dealers', 'dealer_id', 'dealer_name', $dealerName);
                $rdmId = $findIdByName($conn, 'employees', 'emp_id', 'emp_name', $rdmName);
                $productId = $findIdByName($conn, 'products', 'product_id', 'product_name', $productName);

                if ($mode === 'delete' && isset($payload['id'])) {
                    $sql = "DELETE FROM orders WHERE order_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('i', $payload['id']);
                } elseif ($mode === 'edit' && isset($payload['id'])) {
                    $sql = "UPDATE orders SET order_date=?, dealer_id=?, dealer_name=?, rdm_id=?, rdm_name=?, product_id=?, product_name=?, quantity=?, rate=?, amount=?, payment_type=?, due_date=?, notes=?, pending_quantity=? WHERE order_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param(
                        'sssssssiddsssii',
                        $payload['date'],
                        $dealerId,
                        $dealerName,
                        $rdmId,
                        $rdmName,
                        $productId,
                        $productName,
                        $payload['qty'],
                        $payload['rate'],
                        $payload['amount'],
                        $payload['payType'],
                        $payload['dueDate'],
                        $payload['notes'],
                        $payload['pendingQty'],
                        $payload['id']
                    );
                } else {
                    $sql = "INSERT INTO orders (order_date,dealer_id,dealer_name,rdm_id,rdm_name,product_id,product_name,quantity,rate,amount,payment_type,due_date,payment_status,order_status,notes,received_amount,outstanding_amount,delivered_quantity,pending_quantity,created_by) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $createdBy = 'web_ui';
                    $stmt->bind_param(
                        'sssssssiddsssssddiis',
                        $payload['date'],
                        $dealerId,
                        $dealerName,
                        $rdmId,
                        $rdmName,
                        $productId,
                        $productName,
                        $payload['qty'],
                        $payload['rate'],
                        $payload['amount'],
                        $payload['payType'],
                        $payload['dueDate'],
                        $payload['payStatus'],
                        $payload['orderStatus'],
                        $payload['notes'],
                        $payload['received'],
                        $payload['outstanding'],
                        $payload['deliveredQty'],
                        $payload['pendingQty'],
                        $createdBy
                    );
                }
                break;
            }
            case 'dispatch': {
                $transporterName = (string)($payload['transporter'] ?? '');
                $transporterId = $findIdByName($conn, 'transporters', 'transporter_id', 'transporter_name', $transporterName);
                if ($mode === 'delete') {
                    $sql = "DELETE FROM dispatch WHERE invoice_no=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('s', $payload['invoice']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE dispatch SET order_id=?, dispatch_date=?, status=?, vehicle_no=?, quantity=?, transporter_id=?, transporter_name=?, driver_name=?, driver_phone=?, lr_number=?, eway_bill_no=?, remarks=? WHERE invoice_no=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('isssissssssss', $payload['orderId'], $payload['date'], $payload['status'], $payload['vehicle'], $payload['qty'], $transporterId, $transporterName, $payload['driver'], $payload['driverPhone'], $payload['lr'], $payload['eway'], $payload['remarks'], $payload['invoice']);
                } else {
                    $sql = "INSERT INTO dispatch (order_id,invoice_no,dispatch_date,status,vehicle_no,quantity,transporter_id,transporter_name,driver_name,driver_phone,lr_number,eway_bill_no,remarks,created_by) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $createdBy = 'web_ui';
                    $stmt->bind_param('issssissssssss', $payload['orderId'], $payload['invoice'], $payload['date'], $payload['status'], $payload['vehicle'], $payload['qty'], $transporterId, $transporterName, $payload['driver'], $payload['driverPhone'], $payload['lr'], $payload['eway'], $payload['remarks'], $createdBy);
                }
                break;
            }
            case 'payments': {
                $dealerName = (string)($payload['dealer'] ?? '');
                $rdmName = (string)($payload['rdm'] ?? '');
                $dealerId = $findIdByName($conn, 'dealers', 'dealer_id', 'dealer_name', $dealerName);
                $rdmId = $findIdByName($conn, 'employees', 'emp_id', 'emp_name', $rdmName);
                $zmIncentive = ((float)($payload['incentive'] ?? 0)) / 2;

                if ($mode === 'delete') {
                    $sql = "DELETE FROM payments WHERE payment_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('i', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE payments SET order_id=?, dealer_id=?, dealer_name=?, rdm_id=?, rdm_name=?, amount=?, payment_mode=?, payment_date=?, reference_no=?, rdm_incentive=?, zm_incentive=?, status=?, notes=? WHERE payment_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('issssdsssddssi', $payload['orderId'], $dealerId, $dealerName, $rdmId, $rdmName, $payload['amount'], $payload['mode'], $payload['date'], $payload['ref'], $payload['incentive'], $zmIncentive, $payload['status'], $payload['notes'], $payload['id']);
                } else {
                    $sql = "INSERT INTO payments (order_id,dealer_id,dealer_name,rdm_id,rdm_name,amount,payment_mode,payment_date,reference_no,rdm_incentive,zm_incentive,status,notes,created_by) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $createdBy = 'web_ui';
                    $stmt->bind_param('issssdsssddsss', $payload['orderId'], $dealerId, $dealerName, $rdmId, $rdmName, $payload['amount'], $payload['mode'], $payload['date'], $payload['ref'], $payload['incentive'], $zmIncentive, $payload['status'], $payload['notes'], $createdBy);
                }
                break;
            }
            case 'delivery': {
                $dealerName = (string)($payload['dealer'] ?? '');
                $dealerId = $findIdByName($conn, 'dealers', 'dealer_id', 'dealer_name', $dealerName);
                $dispatchId = null;
                $invoiceNo = (string)($payload['dispatchInvoice'] ?? '');
                if ($invoiceNo !== '') {
                    $dStmt = $conn->prepare("SELECT dispatch_id FROM dispatch WHERE invoice_no = ? LIMIT 1");
                    if ($dStmt) {
                        $dStmt->bind_param('s', $invoiceNo);
                        $dStmt->execute();
                        $dRes = $dStmt->get_result();
                        $dRow = $dRes ? $dRes->fetch_assoc() : null;
                        $dispatchId = $dRow['dispatch_id'] ?? null;
                        $dStmt->close();
                    }
                }

                if ($mode === 'delete') {
                    $sql = "DELETE FROM delivery_proof WHERE proof_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('i', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE delivery_proof SET order_id=?, dispatch_id=?, dealer_id=?, dealer_name=?, delivered_quantity=?, delivery_date=?, proof_image_url=?, receiver_name=?, verified_status=?, remarks=? WHERE proof_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('iississsssi', $payload['orderId'], $dispatchId, $dealerId, $dealerName, $payload['deliveredQty'], $payload['date'], $payload['proofUrl'], $payload['receiver'], $payload['status'], $payload['remarks'], $payload['id']);
                } else {
                    $sql = "INSERT INTO delivery_proof (order_id,dispatch_id,dealer_id,dealer_name,delivered_quantity,delivery_date,proof_image_url,receiver_name,verified_status,remarks,verified_by) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $verifiedBy = 'web_ui';
                    $stmt->bind_param('iississssss', $payload['orderId'], $dispatchId, $dealerId, $dealerName, $payload['deliveredQty'], $payload['date'], $payload['proofUrl'], $payload['receiver'], $payload['status'], $payload['remarks'], $verifiedBy);
                }
                break;
            }
            case 'dealers': {
                if ($mode === 'delete') {
                    $sql = "DELETE FROM dealers WHERE dealer_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('s', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE dealers SET dealer_name=?, phone=?, district=?, state=?, address=?, credit_limit=?, active_status=? WHERE dealer_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('sssssdss', $payload['name'], $payload['phone'], $payload['district'], $payload['state'], $payload['address'], $payload['credit'], $payload['active'], $payload['id']);
                } else {
                    $sql = "INSERT INTO dealers (dealer_id,dealer_name,phone,address,district,state,credit_limit,active_status,created_by) VALUES (?,?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $createdBy = 'web_ui';
                    $stmt->bind_param('ssssssdss', $payload['id'], $payload['name'], $payload['phone'], $payload['address'], $payload['district'], $payload['state'], $payload['credit'], $payload['active'], $createdBy);
                }
                break;
            }
            case 'employees': {
                if ($mode === 'delete') {
                    $sql = "DELETE FROM employees WHERE emp_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('s', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE employees SET emp_name=?, role=?, phone=?, region=?, active_status=? WHERE emp_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssssss', $payload['name'], $payload['role'], $payload['phone'], $payload['region'], $payload['active'], $payload['id']);
                } else {
                    $sql = "INSERT INTO employees (emp_id,emp_name,role,phone,region,active_status) VALUES (?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssssss', $payload['id'], $payload['name'], $payload['role'], $payload['phone'], $payload['region'], $payload['active']);
                }
                break;
            }
            case 'products': {
                if ($mode === 'delete') {
                    $sql = "DELETE FROM products WHERE product_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('s', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE products SET product_name=?, category=?, unit=?, mrp=?, rate=?, gst_percent=?, active_status=? WHERE product_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('sssddiss', $payload['name'], $payload['category'], $payload['unit'], $payload['mrp'], $payload['rate'], $payload['gst'], $payload['active'], $payload['id']);
                } else {
                    $sql = "INSERT INTO products (product_id,product_name,category,unit,mrp,rate,gst_percent,active_status) VALUES (?,?,?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssssddis', $payload['id'], $payload['name'], $payload['category'], $payload['unit'], $payload['mrp'], $payload['rate'], $payload['gst'], $payload['active']);
                }
                break;
            }
            case 'transporters': {
                if ($mode === 'delete') {
                    $sql = "DELETE FROM transporters WHERE transporter_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('s', $payload['id']);
                } elseif ($mode === 'edit') {
                    $sql = "UPDATE transporters SET transporter_name=?, phone=?, city=?, address=?, active_status=? WHERE transporter_id=?";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssssss', $payload['name'], $payload['phone'], $payload['city'], $payload['notes'], $payload['active'], $payload['id']);
                } else {
                    $sql = "INSERT INTO transporters (transporter_id,transporter_name,phone,city,address,active_status) VALUES (?,?,?,?,?,?)";
                    $stmt = $conn->prepare($sql);
                    $stmt->bind_param('ssssss', $payload['id'], $payload['name'], $payload['phone'], $payload['city'], $payload['notes'], $payload['active']);
                }
                break;
            }
            default:
                $conn->close();
                jsonOut(['ok' => false, 'message' => 'Unsupported save type: ' . $type], 400);
        }

        if (!isset($stmt) || !$stmt) {
            throw new RuntimeException('Unable to prepare query.');
        }
        $ok = $stmt->execute();
        if (!$ok) {
            $err = $stmt->error ?: $conn->error;
            $stmt->close();
            $conn->close();
            jsonOut(['ok' => false, 'message' => 'Database write failed.', 'error' => $err], 500);
        }
        $insertId = $conn->insert_id;
        $stmt->close();
        $conn->close();
        jsonOut(['ok' => true, 'type' => $type, 'mode' => $mode, 'insert_id' => $insertId]);
    } catch (Throwable $e) {
        $conn->close();
        jsonOut(['ok' => false, 'message' => 'Save exception.', 'error' => $e->getMessage()], 500);
    }
}

$page = $_GET['page'] ?? 'home';
$crmVersion = is_file($crmFile) ? (string)filemtime($crmFile) : (string)time();

if ($page === 'crm') {
    $body = '
    <div class="topbar">
      <div>
        <div class="brand">Phoenix CRM</div>
        <div class="sub">Local router view for the CRM screen</div>
      </div>
      <div class="nav">
        <a href="localhost.php">Home</a>
        <a href="localhost.php?page=readme">Readme</a>
        <a href="localhost.php?page=schema">Database SQL</a>
        <a href="localhost.php?api=dashboard" target="_blank">Dashboard API</a>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h2>CRM UI</h2></div>
      <div class="panel-body">
        <iframe class="frame" src="index.html?v=' . h($crmVersion) . '" title="Phoenix CRM"></iframe>
      </div>
    </div>';
    renderLayout('Phoenix CRM', $body);
    exit;
}

if ($page === 'readme') {
    $body = '
    <div class="topbar">
      <div>
        <div class="brand">Project Readme</div>
        <div class="sub">Linked from localhost.php</div>
      </div>
      <div class="nav">
        <a href="localhost.php">Home</a>
        <a href="localhost.php?page=crm">CRM UI</a>
        <a href="localhost.php?page=schema">Database SQL</a>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h2>Readme.txt</h2></div>
      <div class="panel-body"><pre>' . h(fileContentsOrMessage($readmeFile)) . '</pre></div>
    </div>';
    renderLayout('Readme', $body);
    exit;
}

if ($page === 'schema') {
    $body = '
    <div class="topbar">
      <div>
        <div class="brand">Database Schema</div>
        <div class="sub">Linked from localhost.php</div>
      </div>
      <div class="nav">
        <a href="localhost.php">Home</a>
        <a href="localhost.php?page=crm">CRM UI</a>
        <a href="localhost.php?page=readme">Readme</a>
      </div>
    </div>
    <div class="panel">
      <div class="panel-head"><h2>database.sql</h2></div>
      <div class="panel-body"><pre>' . h(fileContentsOrMessage($schemaFile)) . '</pre></div>
    </div>';
    renderLayout('Database SQL', $body);
    exit;
}

$deepSeekNote = '';
if (!is_file($baseDir . DIRECTORY_SEPARATOR . 'deepseek_php_20260405_fdd7af.php') || !is_file($baseDir . DIRECTORY_SEPARATOR . 'deepseek_text_20260405_e7cf93.txt')) {
    $deepSeekNote = '<div class="notice">DeepSeek files current workspace me nahi mile, isliye unhe link nahi kiya gaya. Agar aap unhe add kar denge to main unko bhi home page me wire kar dunga.</div>';
}

$body = '
<div class="topbar">
  <div>
    <div class="brand">Phoenix Plants CRM Local Hub</div>
    <div class="sub">Ab sab major files ek hi entry point se linked hain.</div>
  </div>
  <div class="nav">
    <a href="localhost.php?page=crm">Open CRM</a>
    <a href="localhost.php?page=readme">Readme</a>
    <a href="localhost.php?page=schema">Database SQL</a>
    <a href="localhost.php?api=dashboard" target="_blank">Dashboard API</a>
  </div>
</div>

<div class="hero">
  <h1>Single entry point ready</h1>
  <p>`localhost.php` ab project hub ki tarah kaam karta hai. Yahan se CRM UI, setup notes, database schema aur dashboard JSON API sab access kiye ja sakte hain.</p>
  <div class="grid">
    <div class="card">
      <h3>CRM Screen</h3>
      <p>`index.html` iframe ke through directly load hoti hai.</p>
      <a class="btn" href="localhost.php?page=crm">Open CRM</a>
    </div>
    <div class="card">
      <h3>Readme</h3>
      <p>`Readme.txt` browser-friendly format me visible hai.</p>
      <a class="btn" href="localhost.php?page=readme">Open Readme</a>
    </div>
    <div class="card">
      <h3>Database</h3>
      <p>`database.sql` schema ek dedicated route par available hai.</p>
      <a class="btn" href="localhost.php?page=schema">Open SQL</a>
    </div>
    <div class="card">
      <h3>API</h3>
      <p>`?api=dashboard` route recovery view ko JSON me return karta hai.</p>
      <a class="btn" href="localhost.php?api=dashboard" target="_blank">Open API</a>
    </div>
  </div>
  ' . $deepSeekNote . '
</div>';

renderLayout('Phoenix CRM Hub', $body);
