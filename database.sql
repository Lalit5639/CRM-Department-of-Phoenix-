-- =====================================================
-- PHOENIX PLANTS LIFESAVER PVT. LTD. - CRM DATABASE
-- Version: 1.0
-- =====================================================

-- 1. DEALERS MASTER TABLE
-- =====================================================
CREATE TABLE dealers (
    dealer_id VARCHAR(20) PRIMARY KEY,
    dealer_name VARCHAR(150) NOT NULL,
    phone VARCHAR(15),
    alt_phone VARCHAR(15),
    email VARCHAR(100),
    address TEXT,
    city VARCHAR(50),
    district VARCHAR(50),
    state VARCHAR(50),
    pincode VARCHAR(10),
    gst_no VARCHAR(20),
    credit_limit DECIMAL(15,2) DEFAULT 0,
    opening_balance DECIMAL(15,2) DEFAULT 0,
    current_balance DECIMAL(15,2) DEFAULT 0,
    active_status ENUM('Y','N') DEFAULT 'Y',
    created_by VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_dealer_phone (phone),
    INDEX idx_dealer_district (district),
    INDEX idx_dealer_active (active_status)
);

-- Sample Data
INSERT INTO dealers VALUES
('Jha001', 'Nahar Pacs Ltd.', '8813914232', NULL, NULL, 'Nahar Rewari', 'Nahar', 'Rewari', 'HARYANA', '123001', '06AAACN1111D1Z', 20000000, 0, 0, 'Y', 'admin', NOW(), NOW()),
('Pal001', 'Palwal Pacs Ltd.', '9729307700', NULL, NULL, 'Palwal Haryana', 'Palwal', 'Palwal', 'HARYANA', '121001', '06AAACP2222E2Z', 20000000, 0, 1096000, 'Y', 'admin', NOW(), NOW()),
('Pal002', 'S P MAJRI AT PACS', '9991114417', NULL, NULL, 'S P MAJRI GURUGRAM', 'Gurugram', 'GURUGRAM', 'HARYANA', '122001', '06AAACS3333F3Z', 20000000, 0, 0, 'Y', 'admin', NOW(), NOW()),
('Pal003', 'THE JATAULI PACS', '9991829411', NULL, NULL, 'HAILY MANDI GURUGRAM', 'Gurugram', 'GURUGRAM', 'HARYANA', '122001', '06AAACT4444G4Z', 20000000, 0, 0, 'Y', 'admin', NOW(), NOW()),
('Jha002', 'The Motla Kalan Pacs', '9416904755', NULL, NULL, 'Motla Kalan Jhajjar Hr', 'Jhajjar', 'Jhajjar', 'HARYANA', '124001', '06AAACM5555H5Z', 20000000, 0, 0, 'Y', 'admin', NOW(), NOW());


-- 2. EMPLOYEES MASTER TABLE
-- =====================================================
CREATE TABLE employees (
    emp_id VARCHAR(20) PRIMARY KEY,
    emp_name VARCHAR(100) NOT NULL,
    role ENUM('RDM', 'ZM', 'Sales', 'Admin', 'Finance', 'Logistics') DEFAULT 'RDM',
    phone VARCHAR(15),
    email VARCHAR(100),
    region VARCHAR(100),
    reporting_to VARCHAR(20),
    joining_date DATE,
    salary DECIMAL(12,2),
    active_status ENUM('Y','N') DEFAULT 'Y',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (reporting_to) REFERENCES employees(emp_id) ON DELETE SET NULL,
    INDEX idx_emp_role (role),
    INDEX idx_emp_region (region)
);

-- Sample Data
INSERT INTO employees VALUES
('Emp001', 'Mr. Varun Singh Tomar', 'RDM', '8858365791', 'varun@phoenix.com', 'Palwal/Faridabad/Gurugram', 'Emp003', '2024-01-15', 75000, 'Y', NOW(), NOW()),
('Emp002', 'Mr. Jagmohan Solanki', 'RDM', '9084216380', 'jagmohan@phoenix.com', 'Jhajjar/Rewari', 'Emp003', '2024-02-01', 72000, 'Y', NOW(), NOW()),
('Emp003', 'Mr. Vikrant Choudhary', 'ZM', '8430004525', 'vikrant@phoenix.com', 'Kurkshetra, Yamuna Nagar, Ambala', 'Emp008', '2024-01-10', 95000, 'Y', NOW(), NOW()),
('Emp004', 'Mr. Ashok Kumar Ji', 'RDM', '9813022250', 'ashok@phoenix.com', 'Jind, Hissar', 'Emp007', '2024-01-20', 71000, 'Y', NOW(), NOW()),
('Emp005', 'Mr. Amit Ahlawat', 'RDM', '9760966920', 'amit@phoenix.com', 'Ambala, Yamuna Nagar', 'Emp003', '2024-03-10', 69000, 'Y', NOW(), NOW()),
('Emp006', 'Mr. Vipin Mourya', 'RDM', '7518893672', 'vipin@phoenix.com', 'Mahendragarh, Rewari', 'Emp009', '2024-02-15', 73000, 'Y', NOW(), NOW()),
('Emp007', 'Mr. Subham Rana', 'ZM', '9876543210', 'subham@phoenix.com', 'Jind, Hisar, Rohtak', 'Emp008', '2024-01-05', 90000, 'Y', NOW(), NOW()),
('Emp008', 'Mr. Vatan Baliyan', 'ZM', '9876543211', 'vatan@phoenix.com', 'North Haryana', NULL, '2024-01-01', 100000, 'Y', NOW(), NOW()),
('Emp009', 'Mr. Mohit Vaidwan', 'ZM', '9876543212', 'mohit@phoenix.com', 'South Haryana', 'Emp008', '2024-01-01', 92000, 'Y', NOW(), NOW());


-- 3. PRODUCTS MASTER TABLE
-- =====================================================
CREATE TABLE products (
    product_id VARCHAR(20) PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    category VARCHAR(50),
    sub_category VARCHAR(50),
    unit VARCHAR(20) DEFAULT 'Bags',
    mrp DECIMAL(12,2),
    rate DECIMAL(12,2),
    gst_percent DECIMAL(5,2) DEFAULT 5,
    hsn_code VARCHAR(20),
    min_stock INT DEFAULT 0,
    current_stock INT DEFAULT 0,
    active_status ENUM('Y','N') DEFAULT 'Y',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_product_category (category),
    INDEX idx_product_active (active_status)
);

-- Sample Data
INSERT INTO products VALUES
('Pro001', 'NPK 18:28:10', 'Primary Fertilizer', 'NPK Complex', 'Bags', 1450, 1370, 5, '31052000', 500, 14400, 'Y', NOW(), NOW()),
('Pro002', 'Complete Dose', 'Advance Fertilizers', 'Micro Nutrients', 'Bucket', 750, 560, 5, '31059000', 200, 3200, 'Y', NOW(), NOW()),
('Pro003', 'NPK 22:22:11', 'Primary Fertilizer', 'NPK Complex', 'Bags', 1280, 1180, 5, '31052000', 300, 5400, 'Y', NOW(), NOW()),
('Pro004', 'Phino-Potash', 'Primary Fertilizer', 'Potash', 'Bags', 550, 450, 5, '31042000', 400, 2800, 'Y', NOW(), NOW());


-- 4. TRANSPORTERS MASTER TABLE
-- =====================================================
CREATE TABLE transporters (
    transporter_id VARCHAR(20) PRIMARY KEY,
    transporter_name VARCHAR(100) NOT NULL,
    phone VARCHAR(15),
    alt_phone VARCHAR(15),
    city VARCHAR(50),
    address TEXT,
    gst_no VARCHAR(20),
    active_status ENUM('Y','N') DEFAULT 'Y',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_transporter_name (transporter_name),
    INDEX idx_transporter_city (city)
);

-- Sample Data
INSERT INTO transporters VALUES
('KT001', 'Katariya Transport', '9837790000', NULL, 'Meerut', 'Meerut Uttar Pradesh', '09AAACK1111J1Z', 'Y', NOW()),
('SBT002', 'Shiv Baba Transport', '9917709000', NULL, 'Meerut', 'Meerut, Kankar Khera, UP', '09AAACS2222K2Z', 'Y', NOW()),
('OM004', 'Om Carrier Transport', '9350581000', NULL, 'Muzaffar Nagar', 'Muzaffar Nagar Uttar Pradesh', '09AAACO3333L3Z', 'Y', NOW()),
('Self', 'Phoenix Transport', '9917586000', NULL, 'Muzaffar Nagar', 'Self', '09AAACP4444M4Z', 'Y', NOW());


-- 5. ORDERS TABLE
-- =====================================================
CREATE TABLE orders (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE NOT NULL,
    dealer_id VARCHAR(20) NOT NULL,
    dealer_name VARCHAR(150),
    rdm_id VARCHAR(20),
    rdm_name VARCHAR(100),
    product_id VARCHAR(20) NOT NULL,
    product_name VARCHAR(100),
    quantity INT NOT NULL,
    rate DECIMAL(12,2) NOT NULL,
    amount DECIMAL(15,2) NOT NULL,
    payment_type ENUM('Credit', 'Cash', 'Advance') DEFAULT 'Credit',
    due_date DATE,
    payment_status ENUM('Paid', 'Partial', 'Pending', 'Due') DEFAULT 'Pending',
    order_status ENUM('Pending', 'Dispatched', 'Partially Delivered', 'Delivered', 'Cancelled') DEFAULT 'Pending',
    notes TEXT,
    received_amount DECIMAL(15,2) DEFAULT 0,
    outstanding_amount DECIMAL(15,2) DEFAULT 0,
    delivered_quantity INT DEFAULT 0,
    pending_quantity INT DEFAULT 0,
    created_by VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (dealer_id) REFERENCES dealers(dealer_id),
    FOREIGN KEY (rdm_id) REFERENCES employees(emp_id),
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    INDEX idx_order_date (order_date),
    INDEX idx_dealer (dealer_id),
    INDEX idx_rdm (rdm_id),
    INDEX idx_order_status (order_status),
    INDEX idx_payment_status (payment_status),
    INDEX idx_due_date (due_date)
);

-- Sample Data
INSERT INTO orders (order_id, order_date, dealer_id, dealer_name, rdm_id, rdm_name, product_id, product_name, quantity, rate, amount, payment_type, due_date, payment_status, order_status, notes, received_amount, outstanding_amount, delivered_quantity, pending_quantity) VALUES
(1, '2026-03-07', 'Jha001', 'Nahar Pacs Ltd.', 'Emp002', 'Mr. Jagmohan Solanki', 'Pro001', 'NPK 18:28:10', 1800, 1370, 2466000, 'Credit', '2026-10-03', 'Pending', 'Pending', 'ASAP', 0, 2466000, 0, 1800),
(2, '2026-02-11', 'Pal001', 'Palwal Pacs Ltd.', 'Emp001', 'Mr. Varun Singh Tomar', 'Pro001', 'NPK 18:28:10', 1400, 1370, 1918000, 'Credit', '2026-02-14', 'Due', 'Partially Delivered', 'ASAP', 822000, 1096000, 800, 600),
(3, '2026-02-26', 'Pal003', 'THE JATAULI PACS', 'Emp001', 'Mr. Varun Singh Tomar', 'Pro001', 'NPK 18:28:10', 600, 1370, 822000, 'Credit', '2026-08-03', 'Paid', 'Delivered', 'ASAP', 822000, 0, 600, 0),
(4, '2026-03-06', 'Pal002', 'S P MAJRI AT PACS', 'Emp001', 'Mr. Varun Singh Tomar', 'Pro003', 'NPK 22:22:11', 600, 1180, 708000, 'Credit', '2026-08-03', 'Paid', 'Delivered', 'ASAP', 732000, 0, 600, 0),
(5, '2026-01-01', 'Pal004', 'The Bata Pacs Ltd.', 'Emp001', 'Mr. Varun Singh Tomar', 'Pro002', 'Complete Dose', 100, 560, 56000, 'Credit', '2026-04-01', 'Pending', 'Pending', 'ASAP', 0, 56000, 0, 100),
(6, '2026-02-16', 'Pal005', 'The Chhaisa Pacs Ltd.', 'Emp001', 'Mr. Varun Singh Tomar', 'Pro001', 'NPK 18:28:10', 1200, 1370, 1644000, 'Credit', '2026-03-15', 'Pending', 'Pending', 'ASAP', 0, 1644000, 0, 1200);


-- 6. DISPATCH TABLE
-- =====================================================
CREATE TABLE dispatch (
    dispatch_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    invoice_no VARCHAR(50),
    dispatch_date DATE NOT NULL,
    status ENUM('Dispatched', 'Partially Delivered', 'Delivered') DEFAULT 'Dispatched',
    vehicle_no VARCHAR(20),
    quantity INT NOT NULL,
    transporter_id VARCHAR(20),
    transporter_name VARCHAR(100),
    driver_name VARCHAR(100),
    driver_phone VARCHAR(15),
    lr_number VARCHAR(50),
    eway_bill_no VARCHAR(50),
    remarks TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (transporter_id) REFERENCES transporters(transporter_id),
    INDEX idx_dispatch_order (order_id),
    INDEX idx_dispatch_date (dispatch_date),
    INDEX idx_vehicle (vehicle_no)
);

-- Sample Data
INSERT INTO dispatch (dispatch_id, order_id, invoice_no, dispatch_date, status, vehicle_no, quantity, transporter_id, transporter_name, driver_name, driver_phone, lr_number, eway_bill_no, remarks) VALUES
(1, 2, 302, '2026-03-07', 'Partially Delivered', 'UP15DT7318', 800, 'KT001', 'Katariya Transport', 'Askar', '9389215284', 465, '372203311', 'Dispatch On GURUGRAM'),
(2, 3, 303, '2026-03-07', 'Delivered', 'RJ11GB7871', 600, 'KT001', 'Katariya Transport', 'Sadam khan', '6350413798', 463, '322203211', 'Dispatch On GURUGRAM'),
(3, 4, 304, '2026-02-23', 'Delivered', 'UP15DT7318', 600, 'KT001', 'Katariya Transport', 'Askar', '9389215284', 461, '', '');


-- 7. DELIVERY PROOF TABLE
-- =====================================================
CREATE TABLE delivery_proof (
    proof_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    dispatch_id INT,
    dealer_id VARCHAR(20),
    dealer_name VARCHAR(150),
    delivered_quantity INT NOT NULL,
    delivery_date DATE NOT NULL,
    proof_image_url TEXT,
    proof_type ENUM('Signature', 'Photo', 'GPS', 'Document') DEFAULT 'Signature',
    receiver_name VARCHAR(100),
    receiver_signature TEXT,
    remarks TEXT,
    verified_by VARCHAR(50),
    verified_status ENUM('Pending', 'Verified', 'Rejected') DEFAULT 'Pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (dispatch_id) REFERENCES dispatch(dispatch_id) ON DELETE SET NULL,
    FOREIGN KEY (dealer_id) REFERENCES dealers(dealer_id),
    INDEX idx_proof_order (order_id),
    INDEX idx_proof_date (delivery_date),
    INDEX idx_verification (verified_status)
);

-- Sample Data
INSERT INTO delivery_proof (proof_id, order_id, dealer_id, dealer_name, delivered_quantity, delivery_date, proof_image_url, receiver_name, verified_status) VALUES
(1, 2, 'Pal001', 'Palwal Pacs Ltd.', 800, '2026-03-10', 'https://drive.google.com/delivery_proof_2.png', 'Ram Singh', 'Verified');


-- 8. PAYMENTS TABLE
-- =====================================================
CREATE TABLE payments (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT NOT NULL,
    dealer_id VARCHAR(20),
    dealer_name VARCHAR(150),
    rdm_id VARCHAR(20),
    rdm_name VARCHAR(100),
    amount DECIMAL(15,2) NOT NULL,
    payment_mode ENUM('NEFT/RTGS', 'RTGS', 'NEFT', 'Cheque', 'Cash', 'UPI') NOT NULL,
    payment_date DATE NOT NULL,
    reference_no VARCHAR(100),
    bank_name VARCHAR(100),
    cheque_no VARCHAR(50),
    rdm_incentive DECIMAL(12,2) DEFAULT 0,
    zm_incentive DECIMAL(12,2) DEFAULT 0,
    status ENUM('Paid', 'Pending', 'Failed') DEFAULT 'Paid',
    notes TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (order_id) REFERENCES orders(order_id) ON DELETE CASCADE,
    FOREIGN KEY (dealer_id) REFERENCES dealers(dealer_id),
    FOREIGN KEY (rdm_id) REFERENCES employees(emp_id),
    INDEX idx_payment_order (order_id),
    INDEX idx_payment_date (payment_date),
    INDEX idx_payment_mode (payment_mode),
    INDEX idx_reference (reference_no)
);

-- Sample Data
INSERT INTO payments (payment_id, order_id, dealer_id, dealer_name, rdm_id, rdm_name, amount, payment_mode, payment_date, reference_no, rdm_incentive, zm_incentive, status, notes) VALUES
(1, 4, 'Pal002', 'S P MAJRI AT PACS', 'Emp001', 'Mr. Varun Singh Tomar', 732000, 'NEFT/RTGS', '2026-03-03', '71712810001', 17019, 8510, 'Paid', 'Paid By NEFT'),
(2, 3, 'Pal003', 'THE JATAULI PACS', 'Emp001', 'Mr. Varun Singh Tomar', 822000, 'NEFT/RTGS', '2026-03-16', '4698336044307', 19111.5, 9556, 'Paid', 'Paid By RTGS'),
(3, 15, NULL, 'The Akoda Pacs', 'Emp006', 'Mr. Vipin Mourya', 1644010, 'NEFT/RTGS', '2026-03-16', '4698335044308', 38223.23, 19112, 'Paid', 'Paid By RTGS'),
(4, 17, NULL, 'The Sihma Pacs Ltd.', 'Emp006', 'Mr. Vipin Mourya', 822000, 'RTGS', '2026-03-18', 'UTIBR72026031800', 19111.5, 9556, 'Paid', 'Paid By RTGS');


-- 9. RECOVERY AGING TABLE (Auto-calculated via View)
-- =====================================================
CREATE VIEW recovery_aging_view AS
SELECT 
    d.dealer_id,
    d.dealer_name,
    d.phone,
    COALESCE(SUM(o.outstanding_amount), 0) AS total_due,
    SUM(CASE WHEN DATEDIFF(CURDATE(), o.due_date) <= 7 AND o.outstanding_amount > 0 THEN o.outstanding_amount ELSE 0 END) AS due_0_7_days,
    SUM(CASE WHEN DATEDIFF(CURDATE(), o.due_date) BETWEEN 8 AND 15 AND o.outstanding_amount > 0 THEN o.outstanding_amount ELSE 0 END) AS due_8_15_days,
    SUM(CASE WHEN DATEDIFF(CURDATE(), o.due_date) BETWEEN 16 AND 30 AND o.outstanding_amount > 0 THEN o.outstanding_amount ELSE 0 END) AS due_16_30_days,
    SUM(CASE WHEN DATEDIFF(CURDATE(), o.due_date) > 30 AND o.outstanding_amount > 0 THEN o.outstanding_amount ELSE 0 END) AS due_31_plus_days,
    COUNT(CASE WHEN o.outstanding_amount > 0 THEN 1 END) AS overdue_orders_count,
    CASE 
        WHEN SUM(o.outstanding_amount) > 1000000 THEN 'Final Reminder'
        WHEN SUM(o.outstanding_amount) > 500000 THEN '2nd Reminder'
        WHEN SUM(o.outstanding_amount) > 100000 THEN '1st Reminder'
        ELSE 'Normal Follow-up'
    END AS reminder_type,
    'Not Sent' AS reminder_status
FROM dealers d
LEFT JOIN orders o ON d.dealer_id = o.dealer_id AND o.outstanding_amount > 0
GROUP BY d.dealer_id, d.dealer_name, d.phone
HAVING total_due > 0
ORDER BY total_due DESC;


-- 10. STOCK LEDGER TABLE
-- =====================================================
CREATE TABLE stock_ledger (
    ledger_id INT AUTO_INCREMENT PRIMARY KEY,
    product_id VARCHAR(20) NOT NULL,
    transaction_date DATE NOT NULL,
    transaction_type ENUM('Inward', 'Outward', 'Adjustment') NOT NULL,
    reference_type VARCHAR(50),
    reference_id INT,
    quantity INT NOT NULL,
    balance_quantity INT NOT NULL,
    rate DECIMAL(12,2),
    warehouse VARCHAR(50),
    remarks TEXT,
    created_by VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (product_id) REFERENCES products(product_id),
    INDEX idx_stock_product (product_id),
    INDEX idx_stock_date (transaction_date),
    INDEX idx_stock_type (transaction_type)
);

-- Sample Data
INSERT INTO stock_ledger (ledger_id, product_id, transaction_date, transaction_type, reference_type, quantity, balance_quantity, rate, warehouse, remarks) VALUES
(1, 'Pro001', '2026-04-01', 'Inward', 'Purchase', 5000, 19400, 1350, 'Panipat Warehouse', 'New stock received'),
(2, 'Pro001', '2026-04-03', 'Outward', 'Order#1', -1800, 17600, 1370, 'Panipat Warehouse', 'Dispatched to Nahar Pacs'),
(3, 'Pro001', '2026-04-05', 'Outward', 'Order#2', -800, 16800, 1370, 'Panipat Warehouse', 'Dispatched to Palwal Pacs');


-- 11. USER/LOGIN TABLE
-- =====================================================
CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    emp_id VARCHAR(20),
    role ENUM('Admin', 'RDM', 'ZM', 'Finance', 'Logistics', 'Viewer') DEFAULT 'Viewer',
    full_name VARCHAR(100),
    email VARCHAR(100),
    phone VARCHAR(15),
    last_login DATETIME,
    active_status ENUM('Y','N') DEFAULT 'Y',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (emp_id) REFERENCES employees(emp_id),
    INDEX idx_username (username),
    INDEX idx_role (role)
);

-- Default Admin User (password: admin123)
INSERT INTO users (username, password_hash, role, full_name, email, active_status) VALUES
('admin', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'System Administrator', 'admin@phoenix.com', 'Y');


-- 12. ACTIVITY LOG TABLE
-- =====================================================
CREATE TABLE activity_log (
    log_id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    username VARCHAR(50),
    action_type VARCHAR(50),
    table_name VARCHAR(50),
    record_id VARCHAR(50),
    old_data TEXT,
    new_data TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    INDEX idx_log_user (user_id),
    INDEX idx_log_table (table_name),
    INDEX idx_log_created (created_at)
);


-- 13. CREATE TRIGGERS
-- =====================================================

-- Trigger to auto-update outstanding amount when payment is made
DELIMITER $$
CREATE TRIGGER update_order_outstanding AFTER INSERT ON payments
FOR EACH ROW
BEGIN
    UPDATE orders 
    SET received_amount = received_amount + NEW.amount,
        outstanding_amount = amount - (received_amount + NEW.amount),
        payment_status = CASE 
            WHEN (amount - (received_amount + NEW.amount)) <= 0 THEN 'Paid'
            WHEN (received_amount + NEW.amount) > 0 THEN 'Partial'
            ELSE 'Pending'
        END
    WHERE order_id = NEW.order_id;
END$$

-- Trigger to update order status when dispatch is created
CREATE TRIGGER update_order_status AFTER INSERT ON dispatch
FOR EACH ROW
BEGIN
    DECLARE total_ordered INT;
    DECLARE total_dispatched INT;
    
    SELECT quantity INTO total_ordered FROM orders WHERE order_id = NEW.order_id;
    SELECT SUM(quantity) INTO total_dispatched FROM dispatch WHERE order_id = NEW.order_id;
    
    UPDATE orders 
    SET delivered_quantity = total_dispatched,
        pending_quantity = total_ordered - total_dispatched,
        order_status = CASE 
            WHEN total_dispatched >= total_ordered THEN 'Delivered'
            WHEN total_dispatched > 0 THEN 'Partially Delivered'
            ELSE 'Pending'
        END
    WHERE order_id = NEW.order_id;
END$$

-- Trigger to update stock balance
CREATE TRIGGER update_stock_balance AFTER INSERT ON stock_ledger
FOR EACH ROW
BEGIN
    UPDATE products 
    SET current_stock = current_stock + NEW.quantity
    WHERE product_id = NEW.product_id;
END$$

DELIMITER ;


-- 14. STORED PROCEDURES
-- =====================================================

-- Get RDM Performance Summary
DELIMITER $$
CREATE PROCEDURE GetRDMPerformance(IN p_month INT, IN p_year INT)
BEGIN
    SELECT 
        rdm_id,
        rdm_name,
        COUNT(*) AS total_orders,
        SUM(amount) AS total_sales,
        SUM(received_amount) AS total_collection,
        SUM(outstanding_amount) AS total_outstanding,
        COUNT(CASE WHEN order_status = 'Pending' THEN 1 END) AS pending_orders
    FROM orders
    WHERE (p_month IS NULL OR MONTH(order_date) = p_month)
      AND (p_year IS NULL OR YEAR(order_date) = p_year)
    GROUP BY rdm_id, rdm_name
    ORDER BY total_sales DESC;
END$$

-- Get Recovery Report by Date Range
CREATE PROCEDURE GetRecoveryReport(IN p_start_date DATE, IN p_end_date DATE)
BEGIN
    SELECT 
        d.dealer_name,
        d.phone,
        o.order_id,
        o.order_date,
        o.due_date,
        DATEDIFF(CURDATE(), o.due_date) AS days_overdue,
        o.outstanding_amount
    FROM orders o
    JOIN dealers d ON o.dealer_id = d.dealer_id
    WHERE o.outstanding_amount > 0
      AND (p_start_date IS NULL OR o.due_date >= p_start_date)
      AND (p_end_date IS NULL OR o.due_date <= p_end_date)
    ORDER BY days_overdue DESC, o.outstanding_amount DESC;
END$$

DELIMITER ;


-- 15. INDEXES FOR PERFORMANCE
-- =====================================================
CREATE INDEX idx_orders_dealer_date ON orders(dealer_id, order_date);
CREATE INDEX idx_orders_rdm_status ON orders(rdm_id, order_status);
CREATE INDEX idx_payments_date_mode ON payments(payment_date, payment_mode);
CREATE INDEX idx_dispatch_date_status ON dispatch(dispatch_date, status);
CREATE INDEX idx_recovery_dealer ON recovery_aging_view(dealer_id);


-- =====================================================
-- QUICK QUERIES FOR DASHBOARD
-- =====================================================

-- Dashboard KPI Query
SELECT 
    (SELECT COUNT(*) FROM orders) AS total_orders,
    (SELECT COUNT(*) FROM orders WHERE order_status = 'Pending') AS pending_orders,
    (SELECT COUNT(*) FROM orders WHERE order_status = 'Dispatched') AS dispatched_orders,
    (SELECT COUNT(*) FROM orders WHERE order_status = 'Partially Delivered') AS partial_delivered,
    (SELECT COUNT(*) FROM orders WHERE order_status = 'Delivered') AS delivered_orders,
    (SELECT SUM(amount) FROM orders) AS total_sales,
    (SELECT SUM(amount) FROM payments WHERE status = 'Paid') AS total_collection,
    (SELECT SUM(outstanding_amount) FROM orders) AS total_outstanding,
    (SELECT SUM(outstanding_amount) FROM orders WHERE due_date < CURDATE()) AS overdue_outstanding,
    (SELECT COUNT(DISTINCT dealer_id) FROM orders) AS active_dealers;

-- RDM-wise Collection
SELECT rdm_name, SUM(amount) AS total_collection, SUM(rdm_incentive) AS total_incentive
FROM payments
GROUP BY rdm_name
ORDER BY total_collection DESC;

-- Monthly Sales Trend
SELECT 
    DATE_FORMAT(order_date, '%Y-%m') AS month,
    COUNT(*) AS orders,
    SUM(amount) AS sales,
    SUM(outstanding_amount) AS outstanding
FROM orders
GROUP BY DATE_FORMAT(order_date, '%Y-%m')
ORDER BY month DESC;