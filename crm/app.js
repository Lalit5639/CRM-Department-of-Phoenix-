const DB = {
  orders:[
    {id:1,date:'2026-03-07',dealer:'Nahar Pacs Ltd.',dealerId:'Jha001',rdm:'Mr. Jagmohan Solanki',product:'NPK 18:28:10',qty:1800,rate:1370,amount:2466000,payType:'Credit',dueDate:'2026-10-03',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:1800},
    {id:2,date:'2026-02-11',dealer:'Palwal Pacs Ltd.',dealerId:'Pal001',rdm:'Mr. Varun Singh Tomar',product:'NPK 18:28:10',qty:1400,rate:1370,amount:1918000,payType:'Credit',dueDate:'2026-02-14',payStatus:'Due',orderStatus:'Partially Delivered',notes:'ASAP',received:0,outstanding:1096000,deliveredQty:800,pendingQty:600},
    {id:3,date:'2026-02-26',dealer:'THE JATAULI PACS',dealerId:'Pal003',rdm:'Mr. Varun Singh Tomar',product:'NPK 18:28:10',qty:600,rate:1370,amount:822000,payType:'Credit',dueDate:'2026-08-03',payStatus:'Paid',orderStatus:'Delivered',notes:'ASAP',received:822000,outstanding:0,deliveredQty:600,pendingQty:0},
    {id:4,date:'2026-03-06',dealer:'S P MAJRI AT PACS',dealerId:'Pal002',rdm:'Mr. Varun Singh Tomar',product:'NPK 22:22:11',qty:600,rate:1180,amount:708000,payType:'Credit',dueDate:'2026-08-03',payStatus:'Paid',orderStatus:'Delivered',notes:'ASAP',received:732000,outstanding:0,deliveredQty:600,pendingQty:0},
    {id:5,date:'2026-01-01',dealer:'The Bata Pacs Ltd.',dealerId:'Pal004',rdm:'Mr. Varun Singh Tomar',product:'Complete Dose',qty:100,rate:560,amount:56000,payType:'Credit',dueDate:'2026-04-01',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:100},
    {id:6,date:'2026-02-16',dealer:'The Chhaisa Pacs Ltd.',dealerId:'Pal005',rdm:'Mr. Varun Singh Tomar',product:'NPK 18:28:10',qty:1200,rate:1370,amount:1644000,payType:'Credit',dueDate:'2026-03-15',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:1200},
    {id:7,date:'2026-02-18',dealer:'The Jawan Pacs Ltd.',dealerId:'Pal006',rdm:'Mr. Varun Singh Tomar',product:'NPK 18:28:10',qty:1200,rate:1370,amount:1644000,payType:'Credit',dueDate:'2026-01-04',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:1200},
    {id:8,date:'2026-02-21',dealer:'The Motla Kalan Pacs',dealerId:'Jha002',rdm:'Mr. Jagmohan Solanki',product:'NPK 18:28:10',qty:600,rate:1370,amount:822000,payType:'Credit',dueDate:'2026-02-24',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:600},
    {id:9,date:'2026-02-21',dealer:'Kosli & Bhakli Pacs Ltd.',dealerId:'Jha003',rdm:'Mr. Jagmohan Solanki',product:'NPK 18:28:10',qty:1200,rate:1370,amount:1644000,payType:'Credit',dueDate:'2026-02-24',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:1200},
    {id:10,date:'2026-02-26',dealer:'Shubham Rana.',dealerId:'Jha008',rdm:'Mr. Jagmohan Solanki',product:'NPK 18:28:10',qty:1200,rate:1370,amount:1644000,payType:'Credit',dueDate:'2026-02-24',payStatus:'Pending',orderStatus:'Pending',notes:'ASAP',received:0,outstanding:0,deliveredQty:0,pendingQty:1200},
  ],
  dispatch:[
    {invoice:302,orderId:2,date:'2026-03-07',status:'Partially Delivered',vehicle:'UP15DT7318',qty:800,transporter:'Katariya Transport',driver:'Askar',driverPhone:'9389215284',lr:465,eway:'372203311',remarks:'Dispatch On GURUGRAM'},
    {invoice:303,orderId:3,date:'2026-03-07',status:'Delivered',vehicle:'RJ11GB7871',qty:600,transporter:'Katariya Transport',driver:'Sadam khan',driverPhone:'6350413798',lr:463,eway:'322203211',remarks:'Dispatch On GURUGRAM'},
    {invoice:304,orderId:4,date:'2026-02-23',status:'Delivered',vehicle:'UP15DT7318',qty:600,transporter:'Katariya Transport',driver:'Askar',driverPhone:'9389215284',lr:461,eway:'',remarks:''},
  ],
  payments:[
    {id:1,orderId:4,dealer:'S P MAJRI AT PACS',amount:732000,mode:'NEFT/RTGS',date:'2026-03-03',ref:'71712810001',status:'Paid',notes:'Paid By NEFT',rdm:'Mr. Varun Singh Tomar',incentive:17019},
    {id:2,orderId:3,dealer:'THE JATAULI PACS',amount:822000,mode:'NEFT/RTGS',date:'2026-03-16',ref:'4698336044307',status:'Paid',notes:'Paid By RTGS',rdm:'Mr. Varun Singh Tomar',incentive:19111.5},
    {id:3,orderId:15,dealer:'The Akoda Pacs',amount:1644010,mode:'NEFT/RTGS',date:'2026-03-16',ref:'4698335044308',status:'Paid',notes:'Paid By RTGS',rdm:'Mr. Vipin Mourya',incentive:38223.23},
    {id:4,orderId:17,dealer:'The Sihma Pacs Ltd.',amount:822000,mode:'RTGS',date:'2026-03-18',ref:'UTIBR72026031800',status:'Paid',notes:'Paid By RTGS',rdm:'Mr. Vipin Mourya',incentive:19111.5},
    {id:5,orderId:18,dealer:'The Sihma Pacs Ltd.',amount:822000,mode:'RTGS',date:'2026-03-26',ref:'DR/RTGS/SDC39614/',status:'Paid',notes:'Paid By RTGS',rdm:'Mr. Vipin Mourya',incentive:19111.5},
    {id:6,orderId:22,dealer:'Kishan Sewa Co-op MPacs',amount:216000,mode:'RTGS',date:'2026-03-26',ref:'UTR PUNBR52026032715',status:'Paid',notes:'Paid by RTGS',rdm:'Mr. Ashok Kumar Ji',incentive:5022},
  ],
  delivery:[
    {id:1,orderId:2,dispatchInvoice:302,dealer:'Palwal Pacs Ltd.',deliveredQty:800,date:'2026-03-10',receiver:'Ram Singh',receiverPhone:'',condition:'GOOD',proofUrl:'https://drive.google.com/delivery_proof_2.png',status:'Verified',remarks:'Received in good condition'},
  ],
  dealers:[
    {id:'Jha001',name:'Nahar Pacs Ltd.',phone:'8813914232',address:'Nahar Rewari',district:'Rewari',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal001',name:'Palwal Pacs Ltd.',phone:'9729307700',address:'Palwal Haryana',district:'Palwal',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal002',name:'S P MAJRI AT PACS',phone:'9991114417',address:'S P MAJRI GURUGRAM',district:'GURUGRAM',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal003',name:'THE JATAULI PACS',phone:'9991829411',address:'HAILY MANDI GURUGRAM',district:'GURUGRAM',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal004',name:'The Bata Pacs Ltd.',phone:'9896531945',address:'Bata, Palwal, Hayana',district:'Palwal',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal005',name:'The Chhaisa Pacs Ltd.',phone:'9813538131',address:'Chhaisa Palwal Haryana',district:'Palwal',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Pal006',name:'The Jawan Pacs Ltd.',phone:'9671723000',address:'Jawan, Near Shiv Mandir, 121004',district:'Palwal',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Jha002',name:'The Motla Kalan Pacs',phone:'9416904755',address:'Motla Kalan Jhajjar Hr',district:'Jhajjar',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Jha003',name:'Kosli & Bhakli Pacs Ltd.',phone:'8814900542',address:'VPO Bakli, Jhajjar Hr',district:'Jhajjar',state:'HARYANA',credit:20000000,active:'Y'},
    {id:'Jha004',name:'Musepur Pacs Ltd.',phone:'9991672850',address:'Musepur Jhajjar Hr',district:'Jhajjar',state:'HARYANA',credit:20000000,active:'Y'},
  ],
  employees:[
    {id:'Emp001',name:'Mr. Varun Singh Tomar',role:'RDM',phone:'8858365791',region:'Palwal/Faridabad/Gurugram',zm:'Mr. Mohan Singh',active:'Y'},
    {id:'Emp002',name:'Mr. Jagmohan Solanki',role:'RDM',phone:'9084216380',region:'Jhajjar/Rewari',zm:'Mr. Mohan Singh',active:'Y'},
    {id:'Emp003',name:'Mr. Vikrant Choudhary',role:'ZM',phone:'8430004525',region:'Kurkshetra, Yamuna Nagar, Ambala',zm:'Mr. Vatan Baliyan',active:'Y'},
    {id:'Emp004',name:'Mr. Ashok Kumar Ji',role:'RDM',phone:'9813022250',region:'Jind, Hissar, Jind',zm:'Mr. Subham Rana',active:'Y'},
    {id:'Emp005',name:'Mr. Amit Ahlawat',role:'RDM',phone:'9760966920',region:'Ambala, Yamuna Nagar',zm:'Mr. Vikrant Choudhary',active:'Y'},
    {id:'Emp006',name:'Mr. Vipin Mourya',role:'RDM',phone:'7518893672',region:'Mahendragarh, Rewari',zm:'Mr. Mohit Vaidwan',active:'Y'},
  ],
  products:[
    {id:'Pro001',name:'NPK 18:28:10',category:'Primary Fertilizer',unit:'Bags',mrp:1450,rate:1370,gst:5,active:'Y'},
    {id:'Pro002',name:'Complete Dose',category:'Advance Fertilizers',unit:'Bucket',mrp:750,rate:560,gst:5,active:'Y'},
    {id:'Pro003',name:'NPK 22:22:11',category:'Primary Fertilizer',unit:'Bags',mrp:1280,rate:1180,gst:5,active:'Y'},
    {id:'Pro004',name:'Phino-Potash',category:'Primary Fertilizer',unit:'Bags',mrp:550,rate:450,gst:5,active:'Y'},
  ],
  transporters:[
    {id:'KT001',name:'Katariya Transport',phone:'9837790000',city:'Meerut',notes:'Meerut Uttar Pradesh',active:'Y'},
    {id:'SBT002',name:'Shiv Baba Transport',phone:'9917709000',city:'Meerut',notes:'Meerut, Kankar Khera, UP',active:'Y'},
    {id:'OM004',name:'Om Carrier Transport',phone:'9350581000',city:'Muzaffar Nagar',notes:'Muzaffar Nagar Uttar Pradesh',active:'Y'},
    {id:'Self',name:'Phoenix Transport',phone:'9917586000',city:'Muzaffar Nagar',notes:'Self',active:'Y'},
  ],
  recovery:[
    {dealer:'Palwal Pacs Ltd.',phone:'9729307700',totalDue:1096000,notDue:0,d0_7:0,d8_15:0,d16_30:0,d31plus:1096000,reminderType:'Final Reminder',reminderStatus:'Not Sent'},
    {dealer:'The Phalahawas Pacs',phone:'',totalDue:1644000,notDue:0,d0_7:0,d8_15:0,d16_30:0,d31plus:1644000,reminderType:'Final Reminder',reminderStatus:'Not Sent'},
    {dealer:'Palwal Pacs Ltd.',phone:'9729307700',totalDue:1096000,notDue:0,d0_7:0,d8_15:0,d16_30:0,d31plus:1096000,reminderType:'Final Reminder',reminderStatus:'Not Sent'},
    {dealer:'The Sehlang M-Pacs',phone:'',totalDue:822000,notDue:0,d0_7:0,d8_15:0,d16_30:0,d31plus:822000,reminderType:'1st Reminder',reminderStatus:'Not Sent'},
    {dealer:'The Khatoti Kalan Pacs Ltd.',phone:'',totalDue:822000,notDue:0,d0_7:0,d8_15:0,d16_30:0,d31plus:822000,reminderType:'1st Reminder',reminderStatus:'Not Sent'},
  ],
  users:[],
  auditLogs:[],
  chatHistory:[]
};

const APP_CONFIG = {
  apiSaveUrl:'/api/save',
  runtimeConfigUrl:'/api/runtime-config',
  authLoginUrl:'/api/auth/login',
  authMeUrl:'/api/auth/me',
  authLogoutUrl:'/api/auth/logout',
  authChangePasswordUrl:'/api/auth/change-password',
  usersUrl:'/api/users',
  auditUrl:'/api/audit',
  lockAcquireUrl:'/api/locks/acquire',
  lockReleaseUrl:'/api/locks/release',
  whatsappOwner:'+918126354387',
  apiCandidates:[
    '/api/save',
    'localhost.php?api=save',
    'http://127.0.0.1/localhost.php?api=save',
    'http://localhost/localhost.php?api=save',
    'http://127.0.0.1/crm/localhost.php?api=save',
    'http://localhost/crm/localhost.php?api=save'
  ]
};
let resolvedApiSaveUrl = null;
let resolvedBootstrapUrl = null;
let resolvedRuntimeConfig = null;
const STORAGE_KEY = 'phoenix_plants_crm_state_v1';
const SESSION_STORAGE_KEY = 'phoenix_plants_crm_state_session_v1';
const AUTH_STORAGE_KEY = 'phoenix_plants_crm_auth_v1';
const API_TIMEOUT_MS = 1200;
const AUTO_SYNC_MS = 15000;
let lastSyncedSignature = '';
let autoSyncTimer = null;
let currentUser = null;
let authToken = '';
let authOverlayVisible = false;
let activeEditLock = null;
let activeEditLockTimer = null;

function persistState(){
  const payload = JSON.stringify({
    orders: DB.orders,
    dispatch: DB.dispatch,
    payments: DB.payments,
    delivery: DB.delivery,
    dealers: DB.dealers,
    employees: DB.employees,
    products: DB.products,
    transporters: DB.transporters,
    recovery: DB.recovery,
  });
  try {
    localStorage.setItem(STORAGE_KEY, payload);
    sessionStorage.setItem(SESSION_STORAGE_KEY, payload);
  } catch (_err) {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, payload);
    } catch (_err2) {
      console.warn('Unable to persist CRM state to browser storage.');
    }
  }
}

function restoreState(){
  try {
    let raw = null;
    try {
      raw = localStorage.getItem(STORAGE_KEY);
    } catch (_err) {
      raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    }
    if (!raw) { 
      console.log('No saved state in browser storage. Keeping default data.');
      return; 
    }
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== 'object') { return; }
    ['orders','dispatch','payments','delivery','dealers','employees','products','transporters','recovery'].forEach((key)=>{
      if (Array.isArray(parsed[key])) {
        DB[key] = parsed[key];
      }
    });
  } catch (_err) {
    console.warn('Unable to restore CRM state from browser storage.', _err);
  }
}

function getRuntimeApiCandidates(){
  const origin=window.location.origin;
  const path=window.location.pathname || '/';
  const dir=path.includes('/') ? path.substring(0,path.lastIndexOf('/')) : '';
  const fromCurrentDir=[
    `${origin}${dir}/localhost.php?api=save`,
    `${origin}/localhost.php?api=save`,
  ];
  const rootDir=(dir.split('/').filter(Boolean)[0]||'').trim();
  const fromRootDir=rootDir ? [
    `http://127.0.0.1/${rootDir}/localhost.php?api=save`,
    `http://localhost/${rootDir}/localhost.php?api=save`,
  ] : [];
  return [...fromCurrentDir, ...fromRootDir];
}

function getStateSignature(data){
  try{
    return JSON.stringify(data || {});
  }catch(_err){
    return '';
  }
}

function getAuthHeaders(extra = {}){
  return authToken ? {...extra, Authorization:`Bearer ${authToken}`} : {...extra};
}

function saveAuthSession(){
  try{
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify({token:authToken,user:currentUser}));
  }catch(_err){}
}

function clearAuthSession(){
  authToken='';
  currentUser=null;
  try{
    localStorage.removeItem(AUTH_STORAGE_KEY);
  }catch(_err){}
}

function restoreAuthSession(){
  try{
    const raw=localStorage.getItem(AUTH_STORAGE_KEY);
    if(!raw){ return; }
    const parsed=JSON.parse(raw);
    authToken=String(parsed?.token || '');
    currentUser=parsed?.user || null;
  }catch(_err){}
}

function getCurrentRole(){
  return String(currentUser?.role || 'Viewer');
}

function getCurrentPermissions(){
  return currentUser?.permissions || {};
}

function isAdmin(){
  return getCurrentRole()==='Admin';
}

function canViewPage(page){
  if(isAdmin()){ return true; }
  return Boolean(getCurrentPermissions()?.[page]?.view);
}

function canWritePage(page){
  if(isAdmin()){ return true; }
  return Boolean(getCurrentPermissions()?.[page]?.edit);
}

function canManageUsers(){
  return canViewPage('users');
}

function canViewAudit(){
  return canViewPage('audit');
}

function getUserDisplayName(){
  return currentUser?.fullName || currentUser?.username || 'Guest';
}

function getResourceIdForPage(page,id){
  if(page==='dispatch'){ return String(id); }
  return String(id ?? '');
}

async function fetchWithTimeout(url, options = {}, timeoutMs = API_TIMEOUT_MS){
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try{
    return await fetch(url,{...options,signal:controller.signal});
  }finally{
    clearTimeout(timer);
  }
}

async function resolveWorkingBootstrapUrl(){
  if(resolvedBootstrapUrl){ return resolvedBootstrapUrl; }
  const candidates=[...new Set([APP_CONFIG.apiSaveUrl,...getRuntimeApiCandidates(),...APP_CONFIG.apiCandidates])];
  for(const saveUrl of candidates){
    const bootstrapUrl=saveUrl.replace('api=save','api=bootstrap');
    try{
      const data=await apiGetJson(bootstrapUrl,{method:'GET'});
      if(data?.ok && data?.data){
        resolvedBootstrapUrl=bootstrapUrl;
        resolvedApiSaveUrl=saveUrl;
        return bootstrapUrl;
      }
    }catch(_e){}
  }
  return null;
}

async function resolveRuntimeConfig(){
  if(resolvedRuntimeConfig){ return resolvedRuntimeConfig; }
  const candidates=[...new Set([
    APP_CONFIG.runtimeConfigUrl,
    `${window.location.origin}${APP_CONFIG.runtimeConfigUrl}`,
  ])];
  for(const url of candidates){
    try{
      const data=await apiGetJson(url,{method:'GET'});
      if(data?.ok){
        resolvedRuntimeConfig=data;
        return data;
      }
    }catch(_err){}
  }
  return null;
}

function applyBootstrapData(data){
  ['orders','dispatch','payments','delivery','dealers','employees','products','transporters','recovery'].forEach((key)=>{
    if(Array.isArray(data?.[key])) DB[key]=data[key];
  });
  sanitizeDbTextFields();
  persistState();
}

async function syncDbToUi(options = {}){
  const { force = false } = options;
  if(document.hidden && !force){ return false; }
  const bootstrapUrl=await resolveWorkingBootstrapUrl();
  if(!bootstrapUrl){ return false; }
  try{
    const res=await fetchWithTimeout(bootstrapUrl,{method:'GET'});
    if(!res.ok){ return false; }
    const payload=await res.json();
    if(!payload?.ok || !payload?.data){ return false; }
    const data=payload.data;
    const signature=getStateSignature(data);
    if(!force && signature && signature===lastSyncedSignature){
      return false;
    }
    lastSyncedSignature=signature;
    applyBootstrapData(data);
    return true;
  }catch(_e){
    return false;
  }
}

async function apiGetJson(url, options = {}){
  const res=await fetchWithTimeout(url,{
    ...options,
    headers:getAuthHeaders(options.headers || {})
  });
  let data=null;
  try{
    data=await res.json();
  }catch(_err){
    data=null;
  }
  if(res.status===401){ throw new Error(data?.message || 'AUTH_REQUIRED'); }
  if(!res.ok){ throw new Error(data?.message || `HTTP ${res.status}`); }
  if(!data?.ok){ throw new Error(data?.message || 'API error'); }
  return data;
}

function startAutoSync(){
  if(autoSyncTimer){ clearInterval(autoSyncTimer); }
  autoSyncTimer=setInterval(async ()=>{
    const changed=await syncDbToUi();
    if(changed){ render(); }
  }, AUTO_SYNC_MS);
}

async function fetchCurrentUser(){
  if(!authToken){ return null; }
  try{
    const data=await apiGetJson(APP_CONFIG.authMeUrl,{method:'GET'});
    currentUser=data.user || null;
    saveAuthSession();
    return currentUser;
  }catch(_err){
    clearAuthSession();
    return null;
  }
}

function updateUserToolbar(){
  const mount=document.getElementById('user-toolbar');
  if(!mount){ return; }
  if(!currentUser){
    mount.innerHTML='';
    return;
  }
  mount.innerHTML=`<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
    <span class="badge badge-blue">${escapeHtml(getCurrentRole())}</span>
    <span style="font-size:12px;color:var(--color-text-secondary)">Signed in as <strong>${escapeHtml(getUserDisplayName())}</strong></span>
    <button class="btn" type="button" onclick="openPasswordChangeModal()">Change Password</button>
    <button class="btn" type="button" onclick="logoutUser()">Logout</button>
  </div>`;
}

function applyRoleUi(){
  const pages=['dashboard','sales','orders','dispatch','delivery','payments','receipts','recovery','dealers','employees','products','transporters','stock','ai','users','audit'];
  for(const page of pages){
    const navEl=document.querySelector(`.nav-item[onclick="nav('${page}')"]`);
    if(navEl){
      navEl.style.display=canViewPage(page) ? '' : 'none';
    }
  }
  const addBtn=document.getElementById('add-btn');
  if(addBtn){
    const canWrite=canWritePage(currentPage);
    addBtn.style.display=canWrite ? '' : 'none';
  }
  if(!canViewPage(currentPage)){
    currentPage=canViewPage('dashboard') ? 'dashboard' : 'ai';
    document.getElementById('page-title').textContent=currentPage==='ai' ? 'AI CRM Assistant' : 'Dashboard';
  }
}

function showLoginOverlay(message=''){
  if(authOverlayVisible){ return; }
  authOverlayVisible=true;
  const overlay=document.createElement('div');
  overlay.className='modal-overlay';
  overlay.id='auth-overlay';
  overlay.style.position='fixed';
  overlay.innerHTML=`<div class="modal" style="max-width:420px">
    <div class="modal-header">
      <div>
        <div class="modal-title">CRM Login</div>
        <div class="modal-subtitle">Admin ya staff account se login karein.</div>
      </div>
    </div>
    <div class="modal-body">
      ${message ? `<div class="alert alert-warning" id="auth-message">${escapeHtml(message)}</div>` : `<div id="auth-message"></div>`}
      <form id="auth-form" class="form-grid" style="grid-template-columns:1fr">
        <div class="form-group"><label>Username</label><input name="username" type="text" autocomplete="username" placeholder="admin"></div>
        <div class="form-group"><label>Password</label><input name="password" type="password" autocomplete="current-password" placeholder="Password"></div>
      </form>
    </div>
    <div class="form-actions">
      <button type="button" class="btn btn-primary" onclick="submitLogin()">Login</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

function hideLoginOverlay(){
  authOverlayVisible=false;
  document.getElementById('auth-overlay')?.remove();
}

async function submitLogin(){
  const form=document.getElementById('auth-form');
  if(!form){ return; }
  const formData=new FormData(form);
  const payload={
    username:String(formData.get('username') || '').trim(),
    password:String(formData.get('password') || '')
  };
  const msgEl=document.getElementById('auth-message');
  try{
    const data=await apiGetJson(APP_CONFIG.authLoginUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify(payload)
    });
    authToken=data.token || '';
    currentUser=data.user || null;
    saveAuthSession();
    hideLoginOverlay();
    updateUserToolbar();
    applyRoleUi();
    await loadUsers();
    await loadAuditLogs();
    await syncDbToUi({force:true});
    render();
  }catch(err){
    if(msgEl){
      msgEl.innerHTML=`<div class="alert alert-warning">${escapeHtml(err?.message === 'AUTH_REQUIRED' ? 'Login required.' : (err?.message || 'Login failed.'))}</div>`;
    }
  }
}

async function logoutUser(){
  try{
    if(authToken){
      await fetchWithTimeout(APP_CONFIG.authLogoutUrl,{method:'POST',headers:getAuthHeaders({'Content-Type':'application/json'})});
    }
  }catch(_err){}
  clearAuthSession();
  DB.auditLogs=[];
  updateUserToolbar();
  applyRoleUi();
  showLoginOverlay('Session close ho gayi. Dobara login karein.');
}

async function loadUsers(){
  if(!canManageUsers() || !authToken){
    DB.users=[];
    return;
  }
  try{
    const data=await apiGetJson(APP_CONFIG.usersUrl,{method:'GET'});
    DB.users=(data.rows || []).map((row)=>({
      id:Number(row.user_id),
      username:row.username || '',
      fullName:row.full_name || '',
      email:row.email || '',
      role:row.role || 'Viewer',
      active:row.active_status || 'Y',
      permissions:row.permissions || {},
      lastLogin:row.last_login ? String(row.last_login).slice(0,19).replace('T',' ') : '',
      createdAt:row.created_at ? String(row.created_at).slice(0,19).replace('T',' ') : '',
    }));
  }catch(_err){
    DB.users=[];
  }
}

async function loadAuditLogs(){
  if(!canViewAudit() || !authToken){
    DB.auditLogs=[];
    return;
  }
  try{
    const data=await apiGetJson(`${APP_CONFIG.auditUrl}?limit=150`,{method:'GET'});
    DB.auditLogs=(data.rows || []).map((row)=>({
      id:Number(row.audit_id),
      username:row.username || '',
      actionType:row.action_type || '',
      entityType:row.entity_type || '',
      entityId:row.entity_id || '',
      createdAt:row.created_at ? String(row.created_at).slice(0,19).replace('T',' ') : '',
      details:row.details_json ? (()=>{ try{return JSON.parse(row.details_json);}catch(_err){ return row.details_json; } })() : null,
    }));
  }catch(_err){
    DB.auditLogs=[];
  }
}

async function acquireEditLock(page,id){
  if(!authToken || !id || page==='users' && !canManageUsers()){ return true; }
  const resourceId=getResourceIdForPage(page,id);
  try{
    const data=await apiGetJson(APP_CONFIG.lockAcquireUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({resourceType:page,resourceId})
    });
    activeEditLock={page,resourceId,expiresAt:data.expiresAt};
    if(activeEditLockTimer){ clearInterval(activeEditLockTimer); }
    activeEditLockTimer=setInterval(()=>{
      if(!activeEditLock){ return; }
      fetchWithTimeout(APP_CONFIG.lockAcquireUrl,{
        method:'POST',
        headers:getAuthHeaders({'Content-Type':'application/json'}),
        body:JSON.stringify({resourceType:activeEditLock.page,resourceId:activeEditLock.resourceId})
      }).catch(()=>{});
    },30000);
    return true;
  }catch(err){
    alert(err?.message || 'Ye record kisi aur user ne lock kiya hua hai.');
    return false;
  }
}

async function releaseActiveEditLock(){
  if(!activeEditLock){ return; }
  const lock=activeEditLock;
  activeEditLock=null;
  if(activeEditLockTimer){
    clearInterval(activeEditLockTimer);
    activeEditLockTimer=null;
  }
  try{
    await fetchWithTimeout(APP_CONFIG.lockReleaseUrl,{
      method:'POST',
      headers:getAuthHeaders({'Content-Type':'application/json'}),
      body:JSON.stringify({resourceType:lock.page,resourceId:lock.resourceId})
    });
  }catch(_err){}
}

function getExportDatasets(){
  return [
    {name:'Orders', rows:DB.orders || []},
    {name:'Sales', rows:getSalesRows()},
    {name:'Dispatch', rows:DB.dispatch || []},
    {name:'Payments', rows:DB.payments || []},
    {name:'Incentive', rows:getIncentiveReportRows()},
    {name:'Delivery', rows:DB.delivery || []},
    {name:'Dealers', rows:DB.dealers || []},
    {name:'Employees', rows:DB.employees || []},
    {name:'Products', rows:DB.products || []},
    {name:'Transporters', rows:DB.transporters || []},
    {name:'Recovery', rows:DB.recovery || []}
  ];
}

function sanitizeWorksheetName(name){
  return String(name || 'Sheet')
    .replace(/[\\\/\?\*\[\]:]/g,' ')
    .trim()
    .slice(0,31) || 'Sheet';
}

function escapeExcelXml(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&apos;');
}

function collectColumns(rows){
  const columns=[];
  rows.forEach((row)=>{
    Object.keys(row || {}).forEach((key)=>{
      if(!columns.includes(key)){
        columns.push(key);
      }
    });
  });
  return columns;
}

function buildWorksheetXml(sheetName, rows){
  const columns=collectColumns(rows);
  const safeSheetName=sanitizeWorksheetName(sheetName);
  const headerCells=columns.map((column)=>`<Cell ss:StyleID="header"><Data ss:Type="String">${escapeExcelXml(column)}</Data></Cell>`).join('');
  const dataRows=(rows.length ? rows : [{}]).map((row)=>{
    const cells=(columns.length ? columns : ['message']).map((column)=>{
      const rawValue=columns.length ? row[column] : 'No data available';
      const value=rawValue ?? '';
      const type=typeof value==='number' ? 'Number' : 'String';
      return `<Cell><Data ss:Type="${type}">${escapeExcelXml(value)}</Data></Cell>`;
    }).join('');
    return `<Row>${cells}</Row>`;
  }).join('');
  return `<Worksheet ss:Name="${escapeExcelXml(safeSheetName)}"><Table>${columns.length ? `<Row>${headerCells}</Row>` : ''}${dataRows}</Table></Worksheet>`;
}

function exportAllDataToExcel(){
  const datasets=getExportDatasets();
  const workbookXml=`<?xml version="1.0"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">
 <Styles>
  <Style ss:ID="header">
   <Font ss:Bold="1"/>
   <Interior ss:Color="#DCE6F1" ss:Pattern="Solid"/>
  </Style>
 </Styles>
 ${datasets.map((dataset)=>buildWorksheetXml(dataset.name,dataset.rows)).join('')}
</Workbook>`;
  const blob=new Blob([workbookXml],{type:'application/vnd.ms-excel'});
  const url=URL.createObjectURL(blob);
  const link=document.createElement('a');
  const stamp=new Date().toISOString().slice(0,19).replace(/[:T]/g,'-');
  link.href=url;
  link.download=`phoenix-plants-crm-data-${stamp}.xls`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),500);
}

let currentPage='dashboard';
let modalOpen=false;
const MONTH_NAMES=['All Months','January','February','March','April','May','June','July','August','September','October','November','December'];
const filterState={month:'all',year:'all'};
const productFilterState={category:'all'};
const reportFilterState={category:''};
const INCENTIVE_SLOT_OPTIONS=[0,2,3,4];
const incentiveConfig={
  deductionPercent:22.5,
  employeeSlots:{}
};

function fmt(n){return '\u20B9'+Number(n).toLocaleString('en-IN')}
function fmtNum(n){return Number(n).toLocaleString('en-IN')}

function parseDateParts(value){
  const raw=String(value||'').trim();
  const m=raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if(m){
    return {year:Number(m[1]),month:Number(m[2]),day:Number(m[3])};
  }
  return null;
}

function filterByMonthYear(rows,dateKey='date'){
  return rows.filter((row)=>{
    const p=parseDateParts(row?.[dateKey]);
    if(!p){ return false; }
    const monthOk=filterState.month==='all' || p.month===Number(filterState.month);
    const yearOk=filterState.year==='all' || p.year===Number(filterState.year);
    return monthOk && yearOk;
  });
}

function getFilteredOrders(){ return filterByMonthYear(DB.orders,'date'); }
function getFilteredDispatch(){ return filterByMonthYear(DB.dispatch,'date'); }
function getFilteredDelivery(){ return filterByMonthYear(DB.delivery,'date'); }
function getFilteredPayments(){ return filterByMonthYear(DB.payments,'date'); }
function getProductCategories(){
  return [...new Set((DB.products || []).map((product)=>String(product.category || '').trim()).filter(Boolean))].sort((a,b)=>a.localeCompare(b));
}

function getFilteredProducts(){
  return (DB.products || []).filter((product)=>{
    return productFilterState.category==='all' || String(product.category || '').trim()===productFilterState.category;
  });
}

function getSalesRows(){
  return getFilteredOrders().map((order)=>{
    const payments=(DB.payments || []).filter((payment)=>Number(payment.orderId)===Number(order.id));
    const dispatches=(DB.dispatch || []).filter((dispatch)=>Number(dispatch.orderId)===Number(order.id));
    const deliveries=(DB.delivery || []).filter((delivery)=>Number(delivery.orderId)===Number(order.id));
    const totalReceived=payments.reduce((sum,payment)=>sum+Number(payment.amount||0),0);
    const totalDispatched=dispatches.reduce((sum,dispatch)=>sum+Number(dispatch.qty||0),0);
    const totalDelivered=deliveries.reduce((sum,delivery)=>sum+Number(delivery.deliveredQty||0),0);
    return {
      orderId: order.id,
      date: order.date || '',
      dealer: order.dealer || '',
      rdm: order.rdm || '',
      product: order.product || '',
      orderedQty: Number(order.qty || 0),
      dispatchedQty: totalDispatched,
      deliveredQty: totalDelivered,
      saleAmount: Number(order.amount || 0),
      receivedAmount: totalReceived,
      outstandingAmount: Math.max(0, Number(order.amount || 0) - totalReceived),
      paymentStatus: order.payStatus || '',
      orderStatus: order.orderStatus || ''
    };
  });
}

function getIncentiveReportRows(){
  const paymentRows=getFilteredPayments().filter((payment)=>Number(payment.incentive || 0) > 0);
  const employeeMap=new Map((DB.employees || []).map((employee)=>[String(employee.name || '').trim(), employee]));
  const groupedRows=new Map();

  paymentRows.forEach((payment)=>{
    const employeeName=String(payment.rdm || '').trim();
    if(!employeeName){ return; }
    const employeeMeta=employeeMap.get(employeeName) || {};
    const current=groupedRows.get(employeeName) || {
      employeeId: employeeMeta.id || '',
      employee: employeeName,
      role: employeeMeta.role || '',
      paymentCount: 0,
      collectionAmount: 0,
      grossIncentiveAmount: 0
    };
    current.paymentCount+=1;
    current.collectionAmount+=Number(payment.amount || 0);
    current.grossIncentiveAmount+=Number(payment.incentive || 0);
    groupedRows.set(employeeName,current);
  });

  return Array.from(groupedRows.values())
    .map((row)=>{
      const deductionPercent=Number(incentiveConfig.deductionPercent || 0);
      const deductionAmount=(Number(row.grossIncentiveAmount || 0)*deductionPercent)/100;
      return {
        employeeId: row.employeeId,
        employee: row.employee,
        role: row.role,
        paymentCount: Number(row.paymentCount || 0),
        collectionAmount: Number(row.collectionAmount || 0),
        grossIncentiveAmount: Number(row.grossIncentiveAmount || 0),
        deductionPercent,
        deductionAmount,
        netIncentiveAmount: Math.max(Number(row.grossIncentiveAmount || 0)-deductionAmount,0)
      };
    })
    .filter((row)=>row.grossIncentiveAmount>0)
    .sort((a,b)=>b.grossIncentiveAmount-a.grossIncentiveAmount);
}

function onProductCategoryChange(){
  const categoryEl=document.getElementById('product-category-filter');
  productFilterState.category=categoryEl?.value || 'all';
  render();
}

function onReportCategoryChange(){
  const categoryEl=document.getElementById('report-category-filter');
  reportFilterState.category=categoryEl?.value || '';
}

function printSelectedCategoryReport(){
  printCategoryReport(reportFilterState.category || 'orders');
}

async function deleteEntry(page,id){
  if(!canWritePage(page)){
    alert('Aapke role ko delete permission nahi hai.');
    return;
  }
  const locked=await acquireEditLock(page,id);
  if(!locked){ return; }
  const config=getModalConfig(page);
  if(!config || !Array.isArray(config.list)){ await releaseActiveEditLock(); return; }
  const item=config.get(id);
  if(!item){ await releaseActiveEditLock(); return; }
  const confirmed=window.confirm(`Kya aap is ${page} entry ko delete karna chahte hain? Ye action undo nahi hoga.`);
  if(!confirmed){ await releaseActiveEditLock(); return; }
  const index=config.list.indexOf(item);
  if(index===-1){ await releaseActiveEditLock(); return; }
  const snapshot={...item};
  config.list.splice(index,1);
  persistState();
  render();
  const dbResult=await persistToDb(page,snapshot,'delete');
  await releaseActiveEditLock();
  if(dbResult?.ok){
    if(page==='users'){ await loadUsers(); render(); }
    alert('Entry delete ho gayi.');
    return;
  }
  alert('Entry UI se delete ho gayi. Agar backend unavailable hai to ye delete browser storage me safe rahega.');
}

function getEligibleIncentiveEmployees(orderRows=getFilteredOrders(), paymentRows=getFilteredPayments()){
  const salesByEmployee={};
  const paymentsByEmployee={};

  orderRows.forEach((order)=>{
    const key=String(order?.rdm || '').trim();
    if(!key){ return; }
    salesByEmployee[key]=(salesByEmployee[key] || 0) + Number(order.amount || 0);
  });

  paymentRows.forEach((payment)=>{
    const key=String(payment?.rdm || '').trim();
    if(!key){ return; }
    paymentsByEmployee[key]=(paymentsByEmployee[key] || 0) + Number(payment.amount || 0);
  });

  return (DB.employees || [])
    .filter((employee)=>{
      const name=String(employee?.name || '').trim();
      return employee.active !== 'N' && (salesByEmployee[name] || paymentsByEmployee[name]);
    })
    .map((employee)=>({
      ...employee,
      salesAmount:salesByEmployee[String(employee.name || '').trim()] || 0,
      paymentAmount:paymentsByEmployee[String(employee.name || '').trim()] || 0
    }));
}

function ensureIncentiveEmployeeSlots(orderRows=getFilteredOrders(), paymentRows=getFilteredPayments()){
  const nextSlots={};
  getEligibleIncentiveEmployees(orderRows,paymentRows).forEach((employee)=>{
    const currentValue=Number(incentiveConfig.employeeSlots[employee.id] || 0);
    nextSlots[employee.id]=INCENTIVE_SLOT_OPTIONS.includes(currentValue) ? currentValue : 0;
  });
  incentiveConfig.employeeSlots=nextSlots;
}

function getIncentiveBreakdown(){
  const orderRows=getFilteredOrders();
  const paymentRows=getFilteredPayments();
  const eligibleEmployees=getEligibleIncentiveEmployees(orderRows,paymentRows);
  ensureIncentiveEmployeeSlots(orderRows,paymentRows);
  const grossTotal=paymentRows.reduce((sum,payment)=>sum+Number(payment.incentive||0),0);
  const deductionAmount=(grossTotal*Number(incentiveConfig.deductionPercent||0))/100;
  const netAmount=Math.max(grossTotal-deductionAmount,0);
  const slotAmounts={
    2:(netAmount*2)/100,
    3:(netAmount*3)/100,
    4:(netAmount*4)/100
  };
  const employeeRows=eligibleEmployees.map((employee)=>{
    const slotPercent=Number(incentiveConfig.employeeSlots[employee.id] || 0);
    return {
      ...employee,
      slotPercent,
      incentiveAmount:slotPercent>0 ? slotAmounts[slotPercent] : 0
    };
  });
  const assignedAmount=employeeRows.reduce((sum,employee)=>sum+employee.incentiveAmount,0);
  return {grossTotal,deductionAmount,netAmount,slotAmounts,employeeRows,assignedAmount,balanceAmount:netAmount-assignedAmount};
}

function getAvailableYears(){
  const years=new Set();
  [DB.orders,DB.dispatch,DB.delivery,DB.payments].forEach((list)=>{
    list.forEach((item)=>{
      const p=parseDateParts(item?.date);
      if(p){ years.add(p.year); }
    });
  });
  if(!years.size){ years.add(new Date().getFullYear()); }
  return Array.from(years).sort((a,b)=>b-a);
}

function refreshTopbarFilters(){
  const monthEl=document.getElementById('month-filter');
  const yearEl=document.getElementById('year-filter');
  if(!monthEl || !yearEl){ return; }
  monthEl.innerHTML=MONTH_NAMES.map((name,i)=>`<option value="${i===0?'all':i}" ${String(filterState.month)===String(i===0?'all':i)?'selected':''}>${name}</option>`).join('');
  const years=getAvailableYears();
  yearEl.innerHTML=`<option value="all" ${filterState.year==='all'?'selected':''}>All Years</option>${years.map((y)=>`<option value="${y}" ${String(filterState.year)===String(y)?'selected':''}>${y}</option>`).join('')}`;
}

function onTopbarFilterChange(){
  const monthEl=document.getElementById('month-filter');
  const yearEl=document.getElementById('year-filter');
  filterState.month=monthEl?.value||'all';
  filterState.year=yearEl?.value||'all';
  render();
}

function doesEntryMatchCurrentFilter(entryDate){
  const p=parseDateParts(entryDate);
  if(!p){ return true; }
  const monthOk=filterState.month==='all' || p.month===Number(filterState.month);
  const yearOk=filterState.year==='all' || p.year===Number(filterState.year);
  return monthOk && yearOk;
}

function statusBadge(s){
  const m={Paid:'badge-green',Due:'badge-red',Pending:'badge-orange',Partial:'badge-orange',Delivered:'badge-green','Partially Delivered':'badge-orange',Dispatched:'badge-blue','Not Sent':'badge-gray','Final Reminder':'badge-red','1st Reminder':'badge-orange',Order:'badge-blue',Dispatch:'badge-orange',Payment:'badge-green',Delivery:'badge-blue'};
  return `<span class="badge ${m[s]||'badge-gray'}">${s}</span>`;
}

function normalizePhone(phone){
  const digits = String(phone || '').replace(/[^\d]/g, '');
  let clean = digits.replace(/^0+/, '');
  if (clean.length === 10) {
    clean = `91${clean}`;
  }
  return clean;
}

function openWhatsApp(phone, message){
  const clean = normalizePhone(phone);
  if (!clean){
    alert('Dealer phone number available nahi hai ya phone number galat format mein hai.');
    return;
  }
  const url = `https://wa.me/${clean}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

function dealerByName(name){
  return DB.dealers.find(d=>d.name===name);
}

function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

const DELIVERY_META_PREFIX='[[delivery-meta]]';

function parseDeliveryMeta(remarks){
  const raw=String(remarks ?? '');
  const lines=raw.split(/\r?\n/);
  const metaLine=lines.find((line)=>line.startsWith(DELIVERY_META_PREFIX));
  const cleanRemarks=lines.filter((line)=>!line.startsWith(DELIVERY_META_PREFIX)).join('\n').trim();
  const meta={receiverPhone:'',condition:''};
  if(metaLine){
    metaLine
      .slice(DELIVERY_META_PREFIX.length)
      .split('|')
      .map((part)=>part.trim())
      .forEach((part)=>{
        const [key,...rest]=part.split('=');
        const value=rest.join('=').trim();
        if(key?.trim()==='receiverPhone'){ meta.receiverPhone=value; }
        if(key?.trim()==='condition'){ meta.condition=value; }
      });
  }
  return {...meta, cleanRemarks};
}

function buildDeliveryRemarks(remarks, receiverPhone, condition){
  const cleanRemarks=String(remarks ?? '').trim();
  const metaParts=[];
  if(receiverPhone){ metaParts.push(`receiverPhone=${receiverPhone}`); }
  if(condition){ metaParts.push(`condition=${condition}`); }
  const metaLine=metaParts.length ? `${DELIVERY_META_PREFIX} ${metaParts.join(' | ')}` : '';
  return [cleanRemarks, metaLine].filter(Boolean).join('\n').trim();
}

function normalizeDeliveryRecord(record){
  if(!record){ return record; }
  const parsed=parseDeliveryMeta(record.remarks);
  record.receiver=cleanInjectedText(record.receiver || '');
  record.receiverPhone=cleanInjectedText(record.receiverPhone || parsed.receiverPhone || '');
  record.condition=cleanInjectedText(record.condition || parsed.condition || '');
  record.proofUrl=cleanInjectedText(record.proofUrl || '');
  record.remarks=cleanInjectedText(parsed.cleanRemarks || '');
  return record;
}

function formatWhatsappDate(dateValue){
  const parts=parseDateParts(dateValue);
  if(!parts){ return String(dateValue || ''); }
  return `${String(parts.day).padStart(2,'0')}-${String(parts.month).padStart(2,'0')}-${parts.year}`;
}

function cleanInjectedText(value){
  const v=String(value ?? '');
  if(/save\(form,item\)|dispatch:\{|render:data=>|getModalConfig\(/i.test(v)){ return ''; }
  return v.replace(/\$\{[^}]*\}/g,'').trim();
}

function sanitizeDbTextFields(){
  DB.orders.forEach((o)=>{ o.notes=cleanInjectedText(o.notes); });
  DB.dispatch.forEach((d)=>{
    d.vehicle=cleanInjectedText(d.vehicle);
    d.driver=cleanInjectedText(d.driver);
    d.driverPhone=cleanInjectedText(d.driverPhone);
    d.lr=cleanInjectedText(d.lr);
    d.eway=cleanInjectedText(d.eway);
    d.remarks=cleanInjectedText(d.remarks);
  });
  DB.payments.forEach((p)=>{ p.notes=cleanInjectedText(p.notes); p.ref=cleanInjectedText(p.ref); });
  DB.delivery.forEach((d)=>{ normalizeDeliveryRecord(d); });
}

function sendOrderReceipt(orderId){
  const order=DB.orders.find(o=>o.id===Number(orderId));
  if(!order){ return; }
  const dealer=dealerByName(order.dealer);
  const msg=`Phoenix Plants Order Receipt%0AOrder #${order.id}%0ADealer: ${order.dealer}%0AProduct: ${order.product}%0AQty: ${order.qty}%0AAmount: ${fmt(order.amount)}%0ADate: ${order.date}%0AFrom: ${APP_CONFIG.whatsappOwner}`;
  openWhatsApp(dealer?.phone,msg.replace(/%0A/g,'\n'));
}

function sendDispatchReceipt(invoice){
  const item=DB.dispatch.find(d=>String(d.invoice)===String(invoice));
  if(!item){ return; }
  const order=DB.orders.find(o=>o.id===Number(item.orderId));
  const dealer=order?dealerByName(order.dealer):null;
  const msg=`Phoenix Plants Dispatch Receipt\nInvoice: ${item.invoice}\nOrder: #${item.orderId}\nVehicle: ${item.vehicle}\nQty: ${item.qty}\nDate: ${item.date}\nTransporter: ${item.transporter}\nFrom: ${APP_CONFIG.whatsappOwner}`;
  openWhatsApp(dealer?.phone,msg);
}

function sendPaymentReceipt(paymentId){
  const p=DB.payments.find(item=>Number(item.id)===Number(paymentId));
  if(!p){ return; }
  const dealer=dealerByName(p.dealer);
  const msg=`Phoenix Plants Payment Receipt\nPayment ID: ${p.id}\nOrder: #${p.orderId}\nDealer: ${p.dealer}\nAmount: ${fmt(p.amount)}\nMode: ${p.mode}\nDate: ${p.date}\nRef: ${p.ref}\nFrom: ${APP_CONFIG.whatsappOwner}`;
  openWhatsApp(dealer?.phone,msg);
}

function sendDeliveryReceipt(deliveryId){
  const d=DB.delivery.find(item=>Number(item.id)===Number(deliveryId));
  if(!d){ return; }
  normalizeDeliveryRecord(d);
  const dealer=dealerByName(d.dealer);
  const order=DB.orders.find(item=>Number(item.id)===Number(d.orderId));
  const lines=[
    `प्रिय *${d.dealer || order?.dealer || 'Dealer'}*,`,
    '',
    '✅ आपका माल सफलतापूर्वक डिलीवर हो गया है।',
    '',
    `📦 *उत्पाद:* ${order?.product || '-'}`,
    `📅 *डिलीवरी तिथि:* ${formatWhatsappDate(d.date)}`,
    `👤 *माल प्राप्त करने वाले:* ${d.receiver || '-'}`,
  ];
  if(d.receiverPhone){
    lines.push(`📞 *Receiver Phone:* ${d.receiverPhone}`);
  }
  if(d.condition){
    lines.push(`🟢 *Condition:* ${d.condition}`);
  }
  lines.push(`📊 *Order Qty:* ${order?.qty ?? '-'}`);
  lines.push(`🚚 *Delivered Qty:* ${d.deliveredQty ?? '-'}`);
  if(d.proofUrl){
    lines.push('');
    lines.push('📷 *Delivery Proof:*');
    lines.push(d.proofUrl);
  }
  lines.push('');
  lines.push('धन्यवाद');
  lines.push('*Phoenix Plants Lifesaver Pvt. Ltd.*');
  lines.push('☎ *Toll Free:* 18005693914');
  const msg=lines.join('\n');
  openWhatsApp(dealer?.phone,msg);
}

async function persistToDb(type,payload,mode='add'){
  if(type==='users'){
    try{
      const data=await apiGetJson(APP_CONFIG.usersUrl,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({mode,payload})
      });
      await loadUsers();
      return data;
    }catch(err){
      alert(err?.message || 'User save failed.');
      return null;
    }
  }
  const tried=[];
  const candidates=[...new Set([APP_CONFIG.apiSaveUrl,...getRuntimeApiCandidates(),...APP_CONFIG.apiCandidates])];

  async function resolveWorkingSaveUrl(){
    if(resolvedApiSaveUrl){ return resolvedApiSaveUrl; }
    const bootstrap=await resolveWorkingBootstrapUrl();
    if(bootstrap && resolvedApiSaveUrl){ return resolvedApiSaveUrl; }
    for(const saveUrl of candidates){
      const healthUrl=saveUrl.replace('api=save','api=dashboard');
      try{
        const res=await fetchWithTimeout(healthUrl,{method:'GET',headers:getAuthHeaders()});
        if(!res.ok){ continue; }
        const contentType=res.headers.get('content-type')||'';
        if(!contentType.includes('application/json')){ continue; }
        const data=await res.json();
        if(data && data.ok){
          resolvedApiSaveUrl=saveUrl;
          return saveUrl;
        }
      }catch(_e){}
    }
    return null;
  }

  const workingUrl=await resolveWorkingSaveUrl();
  if(!workingUrl){
    console.warn('No PHP/MySQL backend detected. Saving in UI only.');
    persistState();
    return {ok:false,localOnly:true};
  }

  try{
    const res=await fetchWithTimeout(workingUrl,{
      method:'POST',
      headers:getAuthHeaders({'Content-Type':'application/json'}),
      body:JSON.stringify({type,mode,payload})
    });
    tried.push(`${workingUrl} => ${res.status}`);
    if(!res.ok){ throw new Error(`HTTP ${res.status}`); }
    const contentType=res.headers.get('content-type')||'';
    if(!contentType.includes('application/json')){ throw new Error('Non-JSON response'); }
    const data=await res.json();
    if(!data.ok){ throw new Error(data.message||'DB save failed'); }
    return data;
  }catch(err){
    tried.push(`${workingUrl} => ${err?.message||'network error'}`);
  }

  for(const url of candidates){
    if(url===workingUrl){ continue; }
    try{
      const res=await fetchWithTimeout(url,{
        method:'POST',
        headers:getAuthHeaders({'Content-Type':'application/json'}),
        body:JSON.stringify({type,mode,payload})
      });
      tried.push(`${url} => ${res.status}`);
      if(!res.ok){ continue; }
      const contentType=res.headers.get('content-type')||'';
      if(!contentType.includes('application/json')){ continue; }
      const data=await res.json();
      if(data.ok){ return data; }
    }catch(err){
      tried.push(`${url} => ${err?.message||'network error'}`);
    }
  }
  console.error('DB save failed. Tried:',tried);
  alert(`Entry UI me save ho gayi, lekin database save fail hua.\n\nTried:\n${tried.join('\n')}\n\nShared backend aur login session active rakhein.`);
  return null;
}

function nav(page){
  if(!canViewPage(page)){
    alert('Aapke account ko is page ka access nahi diya gaya hai.');
    return;
  }
  currentPage=page;
  document.querySelectorAll('.nav-item').forEach((el)=>{
    el.classList.toggle('active', el.getAttribute('onclick')===`nav('${page}')`);
  });
  const titles={dashboard:'Dashboard',sales:'Sales',orders:'Orders',dispatch:'Dispatch',delivery:'Delivery Proof',payments:'Payments',receipts:'Receipt History',recovery:'Recovery Aging',dealers:'Dealers',employees:'Employees',products:'Products',transporters:'Transporters',users:'User Accounts',audit:'Audit Logs',stock:'Stock',ai:'AI CRM Assistant'};
  document.getElementById('page-title').textContent=titles[page]||page;
  applyRoleUi();
  render();
}

function render(){
  const c=document.getElementById('content');
  const pages={dashboard:renderDashboard,sales:renderSales,orders:renderOrders,dispatch:renderDispatch,delivery:renderDelivery,payments:renderPayments,receipts:renderReceiptHistory,recovery:renderRecovery,dealers:renderDealers,employees:renderEmployees,products:renderProducts,transporters:renderTransporters,users:renderUsers,audit:renderAudit,stock:renderStock,ai:renderAI};
  c.innerHTML=(pages[currentPage]||renderDashboard)();
  applyRoleUi();
  refreshTopbarFilters();
  const reportSelect=document.getElementById('report-category-filter');
  if(reportSelect){ reportSelect.value=reportFilterState.category || ''; }
  if(currentPage==='ai') initAI();
}

function renderSales(){
  const rows=getSalesRows();
  const totalSale=rows.reduce((sum,row)=>sum+Number(row.saleAmount||0),0);
  const totalReceived=rows.reduce((sum,row)=>sum+Number(row.receivedAmount||0),0);
  const totalOutstanding=rows.reduce((sum,row)=>sum+Number(row.outstandingAmount||0),0);
  const totalDeliveredQty=rows.reduce((sum,row)=>sum+Number(row.deliveredQty||0),0);
  return `
<div class="kpi-grid">
  <div class="kpi-card"><div class="kpi-label">Total Sale</div><div class="kpi-value kpi-green">${fmt(totalSale)}</div><div class="kpi-sub">${fmtNum(rows.length)} orders auto-linked</div></div>
  <div class="kpi-card"><div class="kpi-label">Collection</div><div class="kpi-value kpi-blue">${fmt(totalReceived)}</div><div class="kpi-sub">Payments se auto update</div></div>
  <div class="kpi-card"><div class="kpi-label">Outstanding</div><div class="kpi-value kpi-red">${fmt(totalOutstanding)}</div><div class="kpi-sub">Order minus payment</div></div>
  <div class="kpi-card"><div class="kpi-label">Delivered Qty</div><div class="kpi-value kpi-orange">${fmtNum(totalDeliveredQty)}</div><div class="kpi-sub">Delivery records se auto update</div></div>
</div>
<div class="card">
  <div class="card-header"><span class="card-title">Sales Summary (${rows.length})</span></div>
  <div class="table-wrap">
  <table>
    <tr><th>Order ID</th><th>Date</th><th>Dealer</th><th>RDM</th><th>Product</th><th>Ordered Qty</th><th>Dispatched Qty</th><th>Delivered Qty</th><th>Sale Amount</th><th>Received</th><th>Outstanding</th><th>Status</th></tr>
    ${rows.map((row)=>`<tr>
      <td>#${row.orderId}</td>
      <td>${row.date}</td>
      <td>${row.dealer}</td>
      <td>${row.rdm}</td>
      <td>${row.product}</td>
      <td>${fmtNum(row.orderedQty)}</td>
      <td>${fmtNum(row.dispatchedQty)}</td>
      <td>${fmtNum(row.deliveredQty)}</td>
      <td style="color:#166534;font-weight:600">${fmt(row.saleAmount)}</td>
      <td style="color:#1d4ed8;font-weight:600">${fmt(row.receivedAmount)}</td>
      <td style="color:${row.outstandingAmount>0?'#A32D2D':'#166534'};font-weight:600">${fmt(row.outstandingAmount)}</td>
      <td>${statusBadge(row.orderStatus)}</td>
    </tr>`).join('')}
  </table>
  </div>
</div>`;
}

function renderDashboard(){
  const orderRows=getFilteredOrders();
  const paymentRows=getFilteredPayments();
  const totalSales=orderRows.reduce((s,o)=>s+o.amount,0);
  const totalColl=paymentRows.reduce((s,p)=>s+p.amount,0);
  const outstanding=orderRows.filter(o=>o.outstanding>0).reduce((s,o)=>s+o.outstanding,0);
  const pending=orderRows.filter(o=>o.orderStatus==='Pending').length;
  const recoveryData = DB.recovery || [];
  const overdueAmt=recoveryData.reduce((s,r)=>s+r.totalDue,0);
  const incentiveData=getIncentiveBreakdown();
  return `
<div class="kpi-grid">
  <div class="kpi-card"><div class="kpi-label">Total Orders</div><div class="kpi-value kpi-blue">${orderRows.length}</div><div class="kpi-sub">Pending: ${pending}</div></div>
  <div class="kpi-card"><div class="kpi-label">Total Sales</div><div class="kpi-value kpi-green">${fmt(totalSales)}</div><div class="kpi-sub">16,700 Bags</div></div>
  <div class="kpi-card"><div class="kpi-label">Collection</div><div class="kpi-value kpi-blue">${fmt(totalColl)}</div><div class="kpi-sub">${paymentRows.length} payments</div></div>
  <div class="kpi-card"><div class="kpi-label">Overdue Outstanding</div><div class="kpi-value kpi-red">${fmt(overdueAmt)}</div><div class="kpi-sub">5 dealers</div></div>
</div>
<div class="card">
  <div class="card-header"><span class="card-title">Incentive Slot Planner</span></div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:12px;margin-bottom:16px">
    <div style="padding:14px;border:1px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);background:var(--color-background-secondary)">
      <div class="kpi-label">Incentive Total Amount</div>
      <div class="kpi-value kpi-orange" style="font-size:20px">${fmt(incentiveData.grossTotal.toFixed(2))}</div>
    </div>
    <div style="padding:14px;border:1px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);background:var(--color-background-secondary)">
      <div class="kpi-label">Net Incentive Base</div>
      <div class="kpi-value kpi-green" style="font-size:20px">${fmt(incentiveData.netAmount.toFixed(2))}</div>
      <div class="kpi-sub">22.5% deduction auto applied</div>
    </div>
    <div style="padding:14px;border:1px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);background:var(--color-background-secondary)">
      <div class="kpi-label">Assigned / Balance</div>
      <div class="kpi-value ${incentiveData.balanceAmount < 0 ? 'kpi-red' : 'kpi-blue'}" style="font-size:20px">${fmt(incentiveData.assignedAmount.toFixed(2))}</div>
      <div class="kpi-sub">Balance: ${fmt(incentiveData.balanceAmount.toFixed(2))}</div>
    </div>
    <div style="padding:14px;border:1px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);background:var(--color-background-secondary)">
      <div class="kpi-label">Eligible Employees</div>
      <div class="kpi-value kpi-blue" style="font-size:20px">${fmtNum(incentiveData.employeeRows.length)}</div>
      <div class="kpi-sub">Only sales/payment linked employees</div>
    </div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:16px">
    <div style="padding:12px 14px;border-radius:var(--border-radius-md);background:#ecfdf5;border:1px solid #bbf7d0">
      <div class="kpi-label">Slot 3%</div>
      <div style="font-size:19px;font-weight:600;color:#166534">${fmt(incentiveData.slotAmounts[3].toFixed(2))}</div>
    </div>
    <div style="padding:12px 14px;border-radius:var(--border-radius-md);background:#eff6ff;border:1px solid #bfdbfe">
      <div class="kpi-label">Slot 2%</div>
      <div style="font-size:19px;font-weight:600;color:#1d4ed8">${fmt(incentiveData.slotAmounts[2].toFixed(2))}</div>
    </div>
    <div style="padding:12px 14px;border-radius:var(--border-radius-md);background:#fff7ed;border:1px solid #fed7aa">
      <div class="kpi-label">Slot 4%</div>
      <div style="font-size:19px;font-weight:600;color:#c2410c">${fmt(incentiveData.slotAmounts[4].toFixed(2))}</div>
    </div>
  </div>
  <div style="padding:12px 14px;border:1px dashed var(--color-border-secondary);border-radius:var(--border-radius-md);background:var(--color-background-secondary);font-size:12px;color:var(--color-text-secondary);margin-bottom:14px">
    Formula: Total incentive amount par 22.5% auto deduction ke baad jo net incentive base bachega us par 3%, 2%, aur 4% ke slots calculate honge. Table me sirf wahi employees dikh rahe hain jinhone sale ki hai ya jinke through payment aaya hai.
  </div>
  <table>
    <tr><th>Employee</th><th>Role</th><th>Sales</th><th>Payment</th><th>Slot</th><th>Incentive Amount</th></tr>
    ${incentiveData.employeeRows.map((employee)=>`<tr>
      <td style="font-weight:500">${employee.name}</td>
      <td>${statusBadge(employee.role)}</td>
      <td style="font-weight:500;color:#166534">${fmt(employee.salesAmount.toFixed(2))}</td>
      <td style="font-weight:500;color:#1d4ed8">${fmt(employee.paymentAmount.toFixed(2))}</td>
      <td>
        <select onchange="updateEmployeeIncentiveSlot('${employee.id}', this.value)" style="padding:8px 10px;border:1px solid var(--color-border-secondary);border-radius:10px;background:var(--color-background-primary);min-width:100px">
          ${INCENTIVE_SLOT_OPTIONS.map((slot)=>`<option value="${slot}" ${Number(employee.slotPercent)===slot?'selected':''}>${slot===0?'No Slot':slot + '%'}</option>`).join('')}
        </select>
      </td>
      <td style="font-weight:600;color:${employee.incentiveAmount>0?'#166534':'var(--color-text-secondary)'}">${employee.incentiveAmount>0?fmt(employee.incentiveAmount.toFixed(2)):'-'}</td>
    </tr>`).join('')}
  </table>
</div>
<div class="two-col">
  <div class="card">
    <div class="card-header"><span class="card-title">Recent Orders</span><button class="btn" onclick="nav('orders')">View All</button></div>
    <table><tr><th>Dealer</th><th>Product</th><th>Qty</th><th>Status</th></tr>
    ${orderRows.slice(0,5).map(o=>`<tr><td>${o.dealer.substring(0,18)}</td><td>${o.product}</td><td>${fmtNum(o.qty)}</td><td>${statusBadge(o.orderStatus)}</td></tr>`).join('')}
    </table>
  </div>
  <div class="card">
    <div class="card-header"><span class="card-title">Top Overdue Dealers</span><button class="btn" onclick="nav('recovery')">Recovery</button></div>
    <table><tr><th>Dealer</th><th>Due Amount</th><th>Reminder</th></tr>
    ${recoveryData.slice(0,5).map(r=>`<tr><td>${r.dealer.substring(0,20)}</td><td style="color:#A32D2D;font-weight:500">${fmt(r.totalDue)}</td><td>${statusBadge(r.reminderType||'Not Sent')}</td></tr>`).join('')}
    </table>
  </div>
</div>
<div class="two-col">
  <div class="card">
    <div class="card-header"><span class="card-title">RDM Performance</span></div>
    <table><tr><th>RDM</th><th>Orders</th><th>Collection</th></tr>
    <tr><td>Mr. Varun Singh Tomar</td><td>7</td><td>${fmt(2626000)}</td></tr>
    <tr><td>Mr. Jagmohan Solanki</td><td>9</td><td>${fmt(1644000)}</td></tr>
    <tr><td>Mr. Vipin Mourya</td><td>7</td><td>${fmt(5754000)}</td></tr>
    <tr><td>Mr. Ashok Kumar Ji</td><td>1</td><td>${fmt(216000)}</td></tr>
    </table>
  </div>
  <div class="card">
    <div class="card-header"><span class="card-title">Payment Mode Summary</span></div>
    <table><tr><th>Mode</th><th>Count</th><th>Amount</th></tr>
    <tr><td>NEFT/RTGS</td><td>3</td><td>${fmt(3198010)}</td></tr>
    <tr><td>RTGS</td><td>3</td><td>${fmt(1860000)}</td></tr>
    </table>
  </div>
</div>`;
}

function renderOrders(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">All Orders (${DB.orders.length})</span></div>
  <table>
    <tr><th>#</th><th>Date</th><th>Dealer</th><th>RDM</th><th>Product</th><th>Qty</th><th>Amount</th><th>Outstanding</th><th>Pay Status</th><th>Order Status</th></tr>
    ${DB.orders.map(o=>`<tr>
      <td>${o.id}</td><td>${o.date}</td><td>${o.dealer}</td><td style="font-size:12px">${o.rdm}</td>
      <td>${o.product}</td><td>${fmtNum(o.qty)}</td><td>${fmt(o.amount)}</td>
      <td style="color:${o.outstanding>0?'#A32D2D':'#3B6D11'}">${fmt(o.outstanding)}</td>
      <td>${statusBadge(o.payStatus)}</td><td>${statusBadge(o.orderStatus)}</td>
    </tr>`).join('')}
  </table>
</div>`;
}

function renderDispatch(){
  const rows=getFilteredDispatch();
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Dispatch Records (${rows.length})</span></div>
  <table>
    <tr><th>Invoice</th><th>Order ID</th><th>Date</th><th>Status</th><th>Vehicle</th><th>Qty</th><th>Transporter</th><th>Driver</th><th>LR No.</th><th>Remarks</th><th>Action</th></tr>
    ${rows.map(d=>{
      return `<tr>
      <td>${d.invoice}</td><td>#${d.orderId}</td><td>${d.date}</td><td>${statusBadge(d.status)}</td>
      <td>${d.vehicle}</td><td>${fmtNum(d.qty)}</td><td>${d.transporter}</td><td>${d.driver}<br><span style="font-size:11px;color:var(--color-text-secondary)">${d.driverPhone}</span></td>
      <td>${d.lr}</td><td style="font-size:12px">${d.remarks||'-'}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('dispatch',d.invoice)} ${renderPrintButton('dispatch',d.invoice)} ${renderDeleteButton('dispatch',d.invoice)} <button class="btn" style="font-size:11px;padding:4px 8px" onclick="sendDispatchReceipt(${d.invoice})">WhatsApp</button></td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
}

function renderDelivery(){
  const rows=getFilteredDelivery();
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Delivery Proof Records (${rows.length})</span></div>
  <table>
    <tr><th>Proof ID</th><th>Order</th><th>Invoice</th><th>Dealer</th><th>Delivered Qty</th><th>Date</th><th>Receiver</th><th>Status</th><th>Proof Link</th><th>Action</th></tr>
    ${rows.map(d=>{
      return `<tr>
      <td>${d.id}</td>
      <td>#${d.orderId}</td>
      <td>${d.dispatchInvoice||'-'}</td>
      <td>${d.dealer}</td>
      <td>${fmtNum(d.deliveredQty)}</td>
      <td>${d.date}</td>
      <td>${d.receiver||'-'}</td>
      <td>${statusBadge(d.status)}</td>
      <td>${d.proofUrl?`<a href="${d.proofUrl}" target="_blank">Open</a>`:'-'}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('delivery',d.id)} ${renderPrintButton('delivery',d.id)} ${renderDeleteButton('delivery',d.id)} <button class="btn" style="font-size:11px;padding:4px 8px" onclick="sendDeliveryReceipt(${d.id})">WhatsApp</button></td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
}

function renderPayments(){
  const rows=getFilteredPayments();
  const total=rows.reduce((s,p)=>s+p.amount,0);
  const totalIncentive=rows.reduce((s,p)=>s+Number(p.incentive||0),0);
  return `
<div class="kpi-grid">
  <div class="kpi-card"><div class="kpi-label">Total Received</div><div class="kpi-value kpi-green">${fmt(total)}</div></div>
  <div class="kpi-card"><div class="kpi-label">Payments Count</div><div class="kpi-value kpi-blue">${rows.length}</div></div>
  <div class="kpi-card"><div class="kpi-label">RDM Incentive</div><div class="kpi-value kpi-orange">${fmt(totalIncentive.toFixed(0))}</div></div>
  <div class="kpi-card"><div class="kpi-label">ZM Incentive</div><div class="kpi-value kpi-orange">${fmt(totalIncentive.toFixed(0))}</div></div>
</div>
<div class="card">
  <div class="card-header"><span class="card-title">Payment Records</span></div>
  <table>
    <tr><th>ID</th><th>Order</th><th>Dealer</th><th>Amount</th><th>Mode</th><th>Date</th><th>Reference</th><th>Status</th><th>RDM Incentive</th><th>Action</th></tr>
    ${rows.map(p=>{
      return `<tr>
      <td>${p.id}</td><td>#${p.orderId}</td><td>${p.dealer}</td>
      <td style="font-weight:500;color:#3B6D11">${fmt(p.amount)}</td>
      <td><span class="badge badge-blue">${p.mode}</span></td><td>${p.date}</td>
      <td style="font-size:11px;color:var(--color-text-secondary)">${p.ref}</td>
      <td>${statusBadge(p.status)}</td>
      <td>${fmt(p.incentive.toFixed(0))}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('payments',p.id)} ${renderPrintButton('payments',p.id)} ${renderDeleteButton('payments',p.id)} <button class="btn" style="font-size:11px;padding:4px 8px" onclick="sendPaymentReceipt(${p.id})">WhatsApp</button></td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
}

function buildReceiptHistory(){
  const orderRows=getFilteredOrders().map(o=>({
    type:'Order',
    ref:`Order #${o.id}`,
    dealer:o.dealer||'-',
    date:o.date||'',
    amount:o.amount||0,
    action:()=>sendOrderReceipt(o.id)
  }));
  const dispatchRows=getFilteredDispatch().map(d=>{
    const ord=DB.orders.find(o=>Number(o.id)===Number(d.orderId));
    return {
      type:'Dispatch',
      ref:`Invoice ${d.invoice}`,
      dealer:ord?.dealer||'-',
      date:d.date||'',
      amount:0,
      action:()=>sendDispatchReceipt(d.invoice)
    };
  });
  const paymentRows=getFilteredPayments().map(p=>({
    type:'Payment',
    ref:`Payment #${p.id}`,
    dealer:p.dealer||'-',
    date:p.date||'',
    amount:p.amount||0,
    action:()=>sendPaymentReceipt(p.id)
  }));
  const deliveryRows=getFilteredDelivery().map(d=>({
    type:'Delivery',
    ref:`Proof #${d.id}`,
    dealer:d.dealer||'-',
    date:d.date||'',
    amount:0,
    action:()=>sendDeliveryReceipt(d.id)
  }));

  const parseDate=(v)=>{
    const t=Date.parse(v||'');
    return Number.isNaN(t)?0:t;
  };
  return [...orderRows,...dispatchRows,...paymentRows,...deliveryRows]
    .sort((a,b)=>parseDate(b.date)-parseDate(a.date));
}

function resendReceiptByIndex(idx){
  const rows=buildReceiptHistory();
  const row=rows[idx];
  if(!row){ return; }
  row.action();
}

function updateEmployeeIncentiveSlot(employeeId, slotValue){
  incentiveConfig.employeeSlots[employeeId]=Number(slotValue||0);
  render();
}

function renderReceiptHistory(){
  const rows=buildReceiptHistory();
  const totalReceipts=rows.length;
  const todayCount=rows.filter(r=>r.date===new Date().toISOString().slice(0,10)).length;
  const orderRows=getFilteredOrders();
  const paymentRows=getFilteredPayments();

  return `
<div class="kpi-grid">
  <div class="kpi-card"><div class="kpi-label">Total Receipts</div><div class="kpi-value kpi-blue">${fmtNum(totalReceipts)}</div><div class="kpi-sub">All categories combined</div></div>
  <div class="kpi-card"><div class="kpi-label">Today Receipts</div><div class="kpi-value kpi-green">${fmtNum(todayCount)}</div><div class="kpi-sub">Generated today</div></div>
  <div class="kpi-card"><div class="kpi-label">Order Receipts</div><div class="kpi-value kpi-orange">${fmtNum(orderRows.length)}</div><div class="kpi-sub">One-click resend</div></div>
  <div class="kpi-card"><div class="kpi-label">Payment Receipts</div><div class="kpi-value kpi-blue">${fmtNum(paymentRows.length)}</div><div class="kpi-sub">One-click resend</div></div>
</div>
<div class="card">
  <div class="card-header"><span class="card-title">Receipt History (Resend on WhatsApp)</span></div>
  <table>
    <tr><th>#</th><th>Type</th><th>Reference</th><th>Dealer</th><th>Date</th><th>Amount</th><th>Action</th></tr>
    ${rows.map((r,i)=>{
      return `<tr>
      <td>${i+1}</td>
      <td>${statusBadge(r.type)}</td>
      <td>${r.ref}</td>
      <td>${r.dealer}</td>
      <td>${r.date||'-'}</td>
      <td>${r.amount?fmt(r.amount):'-'}</td>
      <td><button class="btn" style="font-size:11px;padding:4px 8px" onclick="resendReceiptByIndex(${i})">Resend WhatsApp</button></td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
}

function renderRecovery(){
  return `
<div class="alert alert-warning">Recovery Aging Report \u20B95,206,000 outstanding overdue hai - immediate follow-up required</div>
<div class="card">
  <div class="card-header"><span class="card-title">Recovery Aging Report</span></div>
  <table>
    <tr><th>Dealer</th><th>Phone</th><th>Total Due</th><th>0-7 Days</th><th>8-15 Days</th><th>16-30 Days</th><th>31+ Days</th><th>Reminder Type</th><th>Status</th><th>Action</th></tr>
    ${DB.recovery.map(r=>`<tr>
      <td style="font-weight:500">${r.dealer}</td>
      <td style="font-size:12px">${r.phone||'-'}</td>
      <td style="color:#A32D2D;font-weight:500">${fmt(r.totalDue)}</td>
      <td>${fmt(r.d0_7)}</td><td>${fmt(r.d8_15)}</td><td>${fmt(r.d16_30)}</td>
      <td style="color:#A32D2D">${fmt(r.d31plus)}</td>
      <td>${statusBadge(r.reminderType||'Not Set')}</td>
      <td>${statusBadge(r.reminderStatus)}</td>
      <td><button class="btn" style="font-size:11px;padding:4px 8px" onclick="sendReminder('${r.dealer}','${r.phone}',${r.totalDue})">📱 Reminder</button></td>
    </tr>`).join('')}
  </table>
</div>`;
}

function sendReminder(dealer,phone,amt){
  const msg=`Dear ${dealer},\nAapka \u20B9${Number(amt).toLocaleString('en-IN')} outstanding payment overdue hai.\nKripya jaldi payment karein.\n\nPhoenix Plants CRM`;
  openWhatsApp(phone,msg);
}

function renderDealers(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Dealer Master (${DB.dealers.length})</span></div>
  <table>
    <tr><th>ID</th><th>Dealer Name</th><th>Phone</th><th>District</th><th>State</th><th>Credit Limit</th><th>Active</th><th>Action</th></tr>
    ${DB.dealers.map(d=>`<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${d.id}</td>
      <td style="font-weight:500">${d.name}</td>
      <td>${d.phone}</td><td>${d.district}</td><td>${d.state}</td>
      <td>${fmt(d.credit)}</td>
      <td>${d.active==='Y'?'<span class="badge badge-green">Active</span>':'<span class="badge badge-gray">Inactive</span>'}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('dealers',d.id)} ${renderPrintButton('dealers',d.id)} ${renderDeleteButton('dealers',d.id)}</td>
    </tr>`).join('')}
  </table>
</div>`;
}

renderEmployees=function(){
  const incentiveData=getIncentiveBreakdown();
  const incentiveByEmployee=new Map(incentiveData.employeeRows.map((employee)=>[employee.id, employee]));
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Employee Master (${DB.employees.length})</span></div>
  <div style="padding:0 0 14px;font-size:12px;color:var(--color-text-secondary);line-height:1.5">
    Is month ki sales aur payment ke hisaab se employee-wise incentive rate set karein. Dropdown me 2%, 3%, ya 4% select karne par neeche incentive amount auto calculate ho jayega.
  </div>
  <div class="table-wrap">
  <table>
    <tr><th>ID</th><th>Name</th><th>Role</th><th>Month Sale</th><th>Collection</th><th>Incentive Rate</th><th>Incentive Amount</th><th>Phone</th><th>Region</th><th>Reporting ZM</th><th>Active</th><th>Action</th></tr>
    ${DB.employees.map(e=>{
      const roleClass = e.role==='ZM'?'badge-blue':e.role==='RDM'?'badge-green':'badge-orange';
      const activeStatus = e.active==='Y'?'<span class="badge badge-green">Active</span>':'<span class="badge badge-gray">Inactive</span>';
      const incentiveRow=incentiveByEmployee.get(e.id);
      const salesAmount=Number(incentiveRow?.salesAmount || 0);
      const paymentAmount=Number(incentiveRow?.paymentAmount || 0);
      const slotPercent=Number(incentiveRow?.slotPercent || 0);
      const incentiveAmount=Number(incentiveRow?.incentiveAmount || 0);
      const hasIncentiveBase=salesAmount>0 || paymentAmount>0;
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${e.id}</td>
      <td style="font-weight:500">${e.name}</td>
      <td><span class="badge ${roleClass}">${e.role}</span></td>
      <td style="font-weight:600;color:${salesAmount>0?'#166534':'var(--color-text-secondary)'}">${salesAmount>0?fmt(salesAmount.toFixed(2)):'-'}</td>
      <td style="font-weight:600;color:${paymentAmount>0?'#1d4ed8':'var(--color-text-secondary)'}">${paymentAmount>0?fmt(paymentAmount.toFixed(2)):'-'}</td>
      <td>
        ${hasIncentiveBase
          ? `<select onchange="updateEmployeeIncentiveSlot('${e.id}', this.value)" style="padding:8px 10px;border:1px solid var(--color-border-secondary);border-radius:10px;background:var(--color-background-primary);min-width:96px">
              <option value="" ${slotPercent===0?'selected':''}>Select %</option>
              ${INCENTIVE_SLOT_OPTIONS.filter((slot)=>slot!==0).map((slot)=>`<option value="${slot}" ${slotPercent===slot?'selected':''}>${slot}%</option>`).join('')}
            </select>`
          : '<span style="font-size:12px;color:var(--color-text-secondary)">No sale</span>'}
      </td>
      <td style="font-weight:600;color:${incentiveAmount>0?'#166534':'var(--color-text-secondary)'}">${incentiveAmount>0?fmt(incentiveAmount.toFixed(2)):'-'}</td>
      <td>${e.phone}</td>
      <td style="font-size:12px">${e.region}</td>
      <td style="font-size:12px">${e.zm}</td>
      <td>${activeStatus}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('employees',e.id)} ${renderPrintButton('employees',e.id)} ${renderDeleteButton('employees',e.id)}</td>
    </tr>`;
    }).join('')}
  </table>
  </div>
</div>`;
};

renderProducts=function(){
  const rows=getFilteredProducts();
  const categories=getProductCategories();
  return `
<div class="card">
  <div class="card-header products-toolbar">
    <span class="card-title">Product Master (${rows.length})</span>
    <div class="products-filter-group">
      <label for="product-category-filter" style="font-size:12px;color:var(--color-text-secondary);font-weight:600">Category Filter</label>
      <select id="product-category-filter" class="topbar-select" onchange="onProductCategoryChange()">
        <option value="all" ${productFilterState.category==='all'?'selected':''}>All Categories</option>
        ${categories.map((category)=>`<option value="${category}" ${productFilterState.category===category?'selected':''}>${category}</option>`).join('')}
      </select>
    </div>
  </div>
  <div class="table-wrap">
  <table>
    <tr><th>ID</th><th>Product Name</th><th>Category</th><th>Unit</th><th>MRP</th><th>Sale Rate</th><th>GST%</th><th>Active</th><th>Action</th></tr>
    ${rows.map(p=>{
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${p.id}</td>
      <td style="font-weight:500">${p.name}</td>
      <td style="font-size:12px">${p.category}</td>
      <td>${p.unit}</td>
      <td>${fmt(p.mrp)}</td>
      <td style="color:#3B6D11;font-weight:500">${fmt(p.rate)}</td>
      <td>${p.gst}%</td>
      <td><span class="badge badge-green">Active</span></td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('products',p.id)} ${renderPrintButton('products',p.id)} ${renderDeleteButton('products',p.id)}</td>
    </tr>`;
    }).join('')}
  </table>
  </div>
</div>`;
};

renderTransporters=function(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Transporter Master (${DB.transporters.length})</span></div>
  <table>
    <tr><th>ID</th><th>Name</th><th>Phone</th><th>City</th><th>Notes</th><th>Active</th><th>Action</th></tr>
    ${DB.transporters.map(t=>{
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${t.id}</td>
      <td style="font-weight:500">${t.name}</td>
      <td>${t.phone}</td><td>${t.city}</td>
      <td style="font-size:12px;color:var(--color-text-secondary)">${t.notes}</td>
      <td><span class="badge badge-green">Active</span></td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('transporters',t.id)} ${renderPrintButton('transporters',t.id)} ${renderDeleteButton('transporters',t.id)}</td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
};

function renderStock(){
  return `
<div class="kpi-grid">
  <div class="kpi-card"><div class="kpi-label">Opening Stock</div><div class="kpi-value kpi-blue">15,000</div><div class="kpi-sub">NPK 18:28:10 Bags</div></div>
  <div class="kpi-card"><div class="kpi-label">Total Inward</div><div class="kpi-value kpi-green">8,000</div><div class="kpi-sub">Bags</div></div>
  <div class="kpi-card"><div class="kpi-label">Total Outward</div><div class="kpi-value kpi-orange">8,600</div><div class="kpi-sub">Bags Dispatched</div></div>
  <div class="kpi-card"><div class="kpi-label">Current Balance</div><div class="kpi-value kpi-blue">14,400</div><div class="kpi-sub">Bags Available</div></div>
</div>
<div class="card">
  <div class="card-header"><span class="card-title">Stock Ledger</span></div>
  <table>
    <tr><th>Txn ID</th><th>Date</th><th>Type</th><th>Ref</th><th>Product</th><th>Qty</th><th>Warehouse</th><th>Notes</th></tr>
    <tr><td>1</td><td>2026-05-03</td><td><span class="badge badge-orange">Outward</span></td><td>Emp001</td><td>NPK 18:28:10</td><td>-</td><td>Panipat</td><td>Dispatch on Palwal</td></tr>
  </table>
  <div style="margin-top:14px">
    <button class="btn btn-primary" onclick="openAddModal()">+ Add Stock Entry</button>
  </div>
</div>`;
}

function renderAI(){
  return `
<div class="card" style="margin-bottom:0">
  <div class="card-header">
    <span class="card-title">AI CRM Assistant</span>
    <span style="font-size:12px;color:var(--color-text-secondary)">Phoenix Plants ka CRM data jaanta hai</span>
  </div>
  <div id="chat-messages" style="min-height:300px;max-height:420px;overflow-y:auto;padding:4px 0;margin-bottom:14px">
    <div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px 14px;margin-bottom:10px;font-size:13px;line-height:1.6">
      <strong>AI Assistant:</strong> Namaste! Main Phoenix Plants Lifesaver ka CRM AI assistant hoon. Aap mujhse koi bhi sawaal pooch sakte hain:<br><br>
      - Kisi dealer ka outstanding kya hai?<br>
      - Kisi order ki status batao<br>
      - Recovery reminder draft karo<br>
      - RDM performance analyze karo<br>
      - Koi bhi CRM related kaam!
    </div>
  </div>
  <div style="border-top:0.5px solid var(--color-border-tertiary);padding-top:12px">
    <div style="display:flex;gap:8px;margin-bottom:10px;flex-wrap:wrap">
      <button class="btn" style="font-size:12px" onclick="quickAsk('Palwal Pacs Ltd. ka outstanding kya hai?')">Palwal ka outstanding</button>
      <button class="btn" style="font-size:12px" onclick="quickAsk('Kaunse dealers ka payment overdue hai aur unhe reminder draft karo')">Overdue reminder</button>
      <button class="btn" style="font-size:12px" onclick="quickAsk('RDM wise performance summary do')">RDM Performance</button>
      <button class="btn" style="font-size:12px" onclick="quickAsk('Aaj ke pending orders ki list do')">Pending orders</button>
    </div>
    <div class="ai-input-row">
      <input type="text" id="ai-input" placeholder="Apna sawaal type karein..." onkeydown="if(event.key==='Enter')sendAI()">
      <button class="btn btn-primary" onclick="sendAI()">Send</button>
    </div>
    <div id="ai-status" style="font-size:12px;color:var(--color-text-secondary);margin-top:6px;height:16px"></div>
  </div>
</div>`;
}

function initAI(){
}

function quickAsk(q){
  document.getElementById('ai-input').value=q;
  sendAI();
}

async function sendAI(){
  const input=document.getElementById('ai-input');
  const q=input.value.trim();
  if(!q)return;
  input.value='';
  
  const msgs=document.getElementById('chat-messages');
  msgs.innerHTML+=`<div style="text-align:right;margin-bottom:10px"><span style="background:var(--color-background-info);color:var(--color-text-info);padding:8px 12px;border-radius:var(--border-radius-md);font-size:13px;display:inline-block;max-width:85%;text-align:left">${q}</span></div>`;
  
  const status=document.getElementById('ai-status');
  status.textContent='AI soch raha hai...';
  msgs.scrollTop=msgs.scrollHeight;

  const systemPrompt=`Tu Phoenix Plants Lifesaver Pvt. Ltd. ka CRM AI assistant hai. Tu Hindi aur Hinglish mein baat karta hai. 
Tu is company ka complete data jaanta hai:

COMPANY: Phoenix Plants Lifesaver Pvt. Ltd. (Fertilizer company, Haryana)

ORDERS (${DB.orders.length} total):
${DB.orders.map(o=>`Order#${o.id}: ${o.dealer}, ${o.product}, Qty:${o.qty}, Amount:\u20B9${o.amount}, Outstanding:\u20B9${o.outstanding}, Status:${o.orderStatus}, PayStatus:${o.payStatus}, DueDate:${o.dueDate}`).join('\n')}

PAYMENTS (${DB.payments.length} total):
${DB.payments.map(p=>`Pay#${p.id}: ${p.dealer}, \u20B9${p.amount}, ${p.mode}, ${p.date}, Status:${p.status}`).join('\n')}

RECOVERY OVERDUE:
${DB.recovery.map(r=>`${r.dealer}: Total Due \u20B9${r.totalDue}, 31+days: \u20B9${r.d31plus}, Reminder:${r.reminderType||'Not Set'}`).join('\n')}

DEALERS: ${DB.dealers.map(d=>`${d.name}(${d.id})`).join(', ')}
PRODUCTS: ${DB.products.map(p=>`${p.name}@\u20B9${p.rate}`).join(', ')}
EMPLOYEES: ${DB.employees.map(e=>`${e.name}(${e.role})`).join(', ')}

KPIs: Total Sales \u20B92,25,22,000 | Collection \u20B950,58,010 | Outstanding \u20B952,06,000 (all overdue) | Pending Orders: 13

Tu concise aur helpful jawab de. WhatsApp reminder drafts, analysis, summaries sab kar sakta hai. Numbers ko Indian format mein dikhao.`;

  DB.chatHistory.push({role:'user',content:q});

  try{
    const res=await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        model:'claude-sonnet-4-20250514',
        max_tokens:1000,
        system:systemPrompt,
        messages:DB.chatHistory
      })
    });
    const data=await res.json();
    const reply=data.content?.map(b=>b.text||'').join('')||'Kuch error aaya, dobara try karein.';
    DB.chatHistory.push({role:'assistant',content:reply});
    
    msgs.innerHTML+=`<div style="background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px 14px;margin-bottom:10px;font-size:13px;line-height:1.6;white-space:pre-wrap"><strong>AI Assistant:</strong>\n${reply}</div>`;
    status.textContent='';
  }catch(e){
    msgs.innerHTML+=`<div style="background:#FCEBEB;border-radius:var(--border-radius-md);padding:12px 14px;margin-bottom:10px;font-size:13px;color:#501313">Error: API se connect nahi ho pa raha. Internet connection check karein.</div>`;
    status.textContent='';
  }
  msgs.scrollTop=msgs.scrollHeight;
}

let modalContext={mode:'add',page:null,id:null};

function renderEditButton(page,id){
  if(!canWritePage(page)){ return ''; }
  return `<button class="btn" style="font-size:11px;padding:4px 8px" onclick="openEditModal('${page}','${id}')">Edit</button>`;
}

function printEntry(page, id) {
  const config = getModalConfig(page);
  if (!config) return;
  const item = config.get(id);
  if (!item) return;
  
  let title = page.charAt(0).toUpperCase() + page.slice(1);
  let content = `<h2>${title} - Phoenix Plants Lifesaver Pvt. Ltd.</h2><table style="width:100%; border-collapse:collapse; margin-top:20px;"><tbody>`;
  
  Object.keys(item).forEach(key => {
    const val = item[key];
    let displayVal = val;
    if (typeof val === 'number') {
      displayVal = val > 100000 ? val.toLocaleString('en-IN') : val;
    }
    content += `<tr><td style="border:1px solid #ccc; padding:8px; font-weight:bold; width:30%">${key}</td><td style="border:1px solid #ccc; padding:8px">${displayVal}</td></tr>`;
  });
  
  content += `</tbody></table><p style="margin-top:30px; color:#666; font-size:12px">Printed: ${new Date().toLocaleString('en-IN')}</p>`;
  
  const printWin = window.open('', '', 'width=900,height=700');
  printWin.document.write(`<!DOCTYPE html><html><head><title>${title} - Print</title><style>body{font-family:Arial,sans-serif; padding:20px; background:#fff} h2{color:#0f4c81} table{margin-top:20px} td{padding:10px}</style></head><body>${content}</body></html>`);
  printWin.document.close();
  setTimeout(() => printWin.print(), 250);
}

function renderPrintButton(page, id) {
  return `<button class="btn" style="font-size:11px;padding:4px 8px;background:#f0f4f8;" onclick="printEntry('${page}',${typeof id === 'number' ? id : "'" + id + "'"})" title="Print this entry">Print</button>`;
}

function renderDeleteButton(page, id) {
  if(!canWritePage(page)){ return ''; }
  return `<button class="btn" style="font-size:11px;padding:4px 8px;background:#FCEBEB;color:#7f1d1d;border-color:#fecaca" onclick="deleteEntry('${page}',${typeof id === 'number' ? id : "'" + id + "'"})" title="Delete this entry">Delete</button>`;
}

function permissionMatrixHtml(permissions = {}){
  const pages=[
    {key:'dashboard',label:'Dashboard'},
    {key:'sales',label:'Sales'},
    {key:'orders',label:'Orders'},
    {key:'dispatch',label:'Dispatch'},
    {key:'delivery',label:'Delivery'},
    {key:'payments',label:'Payments'},
    {key:'receipts',label:'Receipts'},
    {key:'recovery',label:'Recovery'},
    {key:'dealers',label:'Dealers'},
    {key:'employees',label:'Employees'},
    {key:'products',label:'Products'},
    {key:'transporters',label:'Transporters'},
    {key:'stock',label:'Stock'},
    {key:'ai',label:'AI'},
    {key:'users',label:'Users'},
    {key:'audit',label:'Audit'}
  ];
  return `<div class="form-group full-span"><label>Page Permissions</label>
    <div style="border:1px solid var(--color-border-tertiary);border-radius:12px;overflow:hidden">
      <table>
        <tr><th>Page</th><th>View</th><th>Edit</th></tr>
        ${pages.map((page)=>{
          const perm=permissions?.[page.key] || {};
          return `<tr>
            <td>${page.label}</td>
            <td><input type="checkbox" name="perm_view_${page.key}" ${perm.view?'checked':''}></td>
            <td><input type="checkbox" name="perm_edit_${page.key}" ${perm.edit?'checked':''}></td>
          </tr>`;
        }).join('')}
      </table>
    </div>
  </div>`;
}

function escapeHtml(value){
  return String(value ?? '')
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function getCategoryReportConfig(page){
  const configMap={
    orders:{title:'Total Order Report', rows:getFilteredOrders()},
    sales:{title:'Sales Report', rows:getSalesRows()},
    dispatch:{title:'Dispatch Report', rows:getFilteredDispatch()},
    delivery:{title:'Delivery Report', rows:getFilteredDelivery()},
    payments:{title:'Payments Report', rows:getFilteredPayments()},
    incentive:{title:'Incentive Report', rows:getIncentiveReportRows()},
    recovery:{title:'Recovery Report', rows:DB.recovery || []},
    dealers:{title:'Dealers Report', rows:DB.dealers || []},
    employees:{title:'Employees Report', rows:DB.employees || []},
    products:{title:'Products Report', rows:getFilteredProducts()},
    transporters:{title:'Transporters Report', rows:DB.transporters || []}
  };
  return configMap[page] || null;
}

function printCategoryReport(page){
  const reportConfig=getCategoryReportConfig(page);
  if(!reportConfig){ return; }

  const rows=reportConfig.rows || [];
  const columns=collectColumns(rows);
  const printableColumns=columns.length ? columns : ['message'];
  const headerHtml=printableColumns.map((column)=>`<th>${escapeHtml(column)}</th>`).join('');
  const bodyHtml=(rows.length ? rows : [{message:'No data available'}]).map((row)=>{
    const cells=printableColumns.map((column)=>{
      const value=row?.[column] ?? '';
      const displayValue=typeof value === 'number' ? value.toLocaleString('en-IN') : value;
      return `<td>${escapeHtml(displayValue)}</td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');

  const filterSummaryParts=[];
  if(['orders','sales','dispatch','delivery','payments','incentive'].includes(page)){
    filterSummaryParts.push(`Month: ${filterState.month==='all' ? 'All Months' : MONTH_NAMES[Number(filterState.month)]}`);
    filterSummaryParts.push(`Year: ${filterState.year==='all' ? 'All Years' : filterState.year}`);
  }
  if(page==='products'){
    filterSummaryParts.push(`Category: ${productFilterState.category==='all' ? 'All Categories' : productFilterState.category}`);
  }
  const filterLine=filterSummaryParts.length ? `<p><strong>Filters:</strong> ${escapeHtml(filterSummaryParts.join(' | '))}</p>` : '';

  const summary=`<div style="margin:12px 0 18px; font-size:13px; color:#475569">
    <p><strong>Total Records:</strong> ${rows.length.toLocaleString('en-IN')}</p>
    ${filterLine}
    <p><strong>Printed:</strong> ${escapeHtml(new Date().toLocaleString('en-IN'))}</p>
  </div>`;

  const html=`<!DOCTYPE html>
  <html>
  <head>
    <title>${escapeHtml(reportConfig.title)} - Print</title>
    <style>
      body{font-family:Arial,sans-serif;padding:24px;background:#fff;color:#0f172a}
      h1{color:#0f4c81;margin-bottom:4px}
      .sub{color:#475569;margin-bottom:18px}
      table{width:100%;border-collapse:collapse;font-size:12px}
      th,td{border:1px solid #cbd5e1;padding:8px;text-align:left;vertical-align:top}
      th{background:#eaf1f8;font-weight:700}
      p{margin:0 0 6px}
      @media print{body{padding:0}}
    </style>
  </head>
  <body>
    <h1>${escapeHtml(reportConfig.title)}</h1>
    <div class="sub">Phoenix Plants Lifesaver Pvt. Ltd.</div>
    ${summary}
    <table>
      <thead><tr>${headerHtml}</tr></thead>
      <tbody>${bodyHtml}</tbody>
    </table>
  </body>
  </html>`;

  const printWin=window.open('', '', 'width=1200,height=800');
  if(!printWin){ return; }
  printWin.document.write(html);
  printWin.document.close();
  setTimeout(()=>printWin.print(),250);
}

renderOrders=function(){
  const rows=getFilteredOrders();
  return `
<div class="card">
  <div class="card-header"><span class="card-title">All Orders (${rows.length})</span></div>
  <table>
    <tr><th>#</th><th>Date</th><th>Dealer</th><th>RDM</th><th>Product</th><th>Qty</th><th>Amount</th><th>Outstanding</th><th>Pay Status</th><th>Order Status</th><th>Action</th></tr>
    ${rows.map(o=>{
      const color = o.outstanding>0?'#A32D2D':'#3B6D11';
      return `<tr>
      <td>${o.id}</td><td>${o.date}</td><td>${o.dealer}</td><td style="font-size:12px">${o.rdm}</td>
      <td>${o.product}</td><td>${fmtNum(o.qty)}</td><td>${fmt(o.amount)}</td>
      <td style="color:${color}">${fmt(o.outstanding)}</td>
      <td>${statusBadge(o.payStatus)}</td><td>${statusBadge(o.orderStatus)}</td><td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('orders',o.id)} ${renderPrintButton('orders',o.id)} ${renderDeleteButton('orders',o.id)} <button class="btn" style="font-size:11px;padding:4px 8px" onclick="sendOrderReceipt(${o.id})">WhatsApp</button></td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
};

renderDealers=function(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Dealer Master (${DB.dealers.length})</span></div>
  <table>
    <tr><th>ID</th><th>Dealer Name</th><th>Phone</th><th>District</th><th>State</th><th>Credit Limit</th><th>Active</th><th>Action</th></tr>
    ${DB.dealers.map(d=>{
      const activeStatus = d.active==='Y'?'<span class="badge badge-green">Active</span>':'<span class="badge badge-gray">Inactive</span>';
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${d.id}</td>
      <td style="font-weight:500">${d.name}</td>
      <td>${d.phone}</td><td>${d.district}</td><td>${d.state}</td>
      <td>${fmt(d.credit)}</td>
      <td>${activeStatus}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('dealers',d.id)} ${renderPrintButton('dealers',d.id)} ${renderDeleteButton('dealers',d.id)}</td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
};

renderEmployees=function(){
  const incentiveData=getIncentiveBreakdown();
  const incentiveByEmployee=new Map(incentiveData.employeeRows.map((employee)=>[employee.id, employee]));
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Employee Master (${DB.employees.length})</span></div>
  <div style="padding:0 0 14px;font-size:12px;color:var(--color-text-secondary);line-height:1.5">
    Is month ki sales aur payment ke hisaab se employee-wise incentive rate set karein. Dropdown me 2%, 3%, ya 4% select karne par incentive amount auto calculate ho jayega.
  </div>
  <div class="table-wrap">
  <table>
    <tr><th>ID</th><th>Name</th><th>Role</th><th>Month Sale</th><th>Collection</th><th>Incentive Rate</th><th>Incentive Amount</th><th>Phone</th><th>Region</th><th>Reporting ZM</th><th>Active</th><th>Action</th></tr>
    ${DB.employees.map(e=>{
      const roleClass = e.role==='ZM'?'badge-blue':e.role==='RDM'?'badge-green':'badge-orange';
      const activeStatus = e.active==='Y'?'<span class="badge badge-green">Active</span>':'<span class="badge badge-gray">Inactive</span>';
      const incentiveRow=incentiveByEmployee.get(e.id);
      const salesAmount=Number(incentiveRow?.salesAmount || 0);
      const paymentAmount=Number(incentiveRow?.paymentAmount || 0);
      const slotPercent=Number(incentiveRow?.slotPercent || 0);
      const incentiveAmount=Number(incentiveRow?.incentiveAmount || 0);
      const hasIncentiveBase=salesAmount>0 || paymentAmount>0;
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${e.id}</td>
      <td style="font-weight:500">${e.name}</td>
      <td><span class="badge ${roleClass}">${e.role}</span></td>
      <td style="font-weight:600;color:${salesAmount>0?'#166534':'var(--color-text-secondary)'}">${salesAmount>0?fmt(salesAmount.toFixed(2)):'-'}</td>
      <td style="font-weight:600;color:${paymentAmount>0?'#1d4ed8':'var(--color-text-secondary)'}">${paymentAmount>0?fmt(paymentAmount.toFixed(2)):'-'}</td>
      <td>
        ${hasIncentiveBase
          ? `<select onchange="updateEmployeeIncentiveSlot('${e.id}', this.value)" style="padding:8px 10px;border:1px solid var(--color-border-secondary);border-radius:10px;background:var(--color-background-primary);min-width:96px">
              <option value="" ${slotPercent===0?'selected':''}>Select %</option>
              ${INCENTIVE_SLOT_OPTIONS.filter((slot)=>slot!==0).map((slot)=>`<option value="${slot}" ${slotPercent===slot?'selected':''}>${slot}%</option>`).join('')}
            </select>`
          : '<span style="font-size:12px;color:var(--color-text-secondary)">No sale</span>'}
      </td>
      <td style="font-weight:600;color:${incentiveAmount>0?'#166534':'var(--color-text-secondary)'}">${incentiveAmount>0?fmt(incentiveAmount.toFixed(2)):'-'}</td>
      <td>${e.phone}</td>
      <td style="font-size:12px">${e.region}</td>
      <td style="font-size:12px">${e.zm}</td>
      <td>${activeStatus}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('employees',e.id)} ${renderPrintButton('employees',e.id)} ${renderDeleteButton('employees',e.id)}</td>
    </tr>`;
    }).join('')}
  </table>
  </div>
</div>`;
};

renderProducts=function(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Product Master (${DB.products.length})</span></div>
  <table>
    <tr><th>ID</th><th>Product Name</th><th>Category</th><th>Unit</th><th>MRP</th><th>Sale Rate</th><th>GST%</th><th>Active</th><th>Action</th></tr>
    ${DB.products.map(p=>{
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${p.id}</td>
      <td style="font-weight:500">${p.name}</td>
      <td style="font-size:12px">${p.category}</td>
      <td>${p.unit}</td>
      <td>${fmt(p.mrp)}</td>
      <td style="color:#3B6D11;font-weight:500">${fmt(p.rate)}</td>
      <td>${p.gst}%</td>
      <td><span class="badge badge-green">Active</span></td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('products',p.id)} ${renderPrintButton('products',p.id)} ${renderDeleteButton('products',p.id)}</td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
};

renderTransporters=function(){
  return `
<div class="card">
  <div class="card-header"><span class="card-title">Transporter Master (${DB.transporters.length})</span></div>
  <table>
    <tr><th>ID</th><th>Name</th><th>Phone</th><th>City</th><th>Notes</th><th>Active</th><th>Action</th></tr>
    ${DB.transporters.map(t=>{
      return `<tr>
      <td style="font-size:12px;color:var(--color-text-secondary)">${t.id}</td>
      <td style="font-weight:500">${t.name}</td>
      <td>${t.phone}</td><td>${t.city}</td>
      <td style="font-size:12px;color:var(--color-text-secondary)">${t.notes}</td>
      <td><span class="badge badge-green">Active</span></td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('transporters',t.id)} ${renderPrintButton('transporters',t.id)} ${renderDeleteButton('transporters',t.id)}</td>
    </tr>`;
    }).join('')}
  </table>
</div>`;
};

function renderUsers(){
  if(!canManageUsers()){
    return `<div class="card"><div class="empty-state">User accounts sirf admin manage kar sakta hai.</div></div>`;
  }
  return `
<div class="card">
  <div class="card-header">
    <span class="card-title">User Accounts (${DB.users.length})</span>
    <button class="btn btn-primary" type="button" onclick="openEntryModal('users','add')">+ Add User</button>
  </div>
  <div class="table-wrap">
  <table>
    <tr><th>ID</th><th>Username</th><th>Full Name</th><th>Role</th><th>Email</th><th>Status</th><th>Last Login</th><th>Action</th></tr>
    ${DB.users.map((u)=>`<tr>
      <td>#${u.id}</td>
      <td style="font-weight:600">${escapeHtml(u.username)}</td>
      <td>${escapeHtml(u.fullName)}</td>
      <td>${statusBadge(u.role)}<div style="font-size:11px;color:var(--color-text-secondary);margin-top:4px">${Object.entries(u.permissions || {}).filter(([,perm])=>perm?.edit).map(([page])=>page).slice(0,3).join(', ') || 'Read only'}</div></td>
      <td>${escapeHtml(u.email || '-')}</td>
      <td>${u.active==='Y' ? '<span class="badge badge-green">Active</span>' : '<span class="badge badge-red">Inactive</span>'}</td>
      <td style="font-size:12px;color:var(--color-text-secondary)">${escapeHtml(u.lastLogin || 'Never')}</td>
      <td style="display:flex;gap:4px;flex-wrap:wrap">${renderEditButton('users',u.id)} ${renderDeleteButton('users',u.id)}</td>
    </tr>`).join('')}
  </table>
  </div>
</div>`;
}

function renderAudit(){
  if(!canViewAudit()){
    return `<div class="card"><div class="empty-state">Audit logs sirf admin dekh sakta hai.</div></div>`;
  }
  return `
<div class="card">
  <div class="card-header">
    <span class="card-title">Audit Logs (${DB.auditLogs.length})</span>
    <button class="btn" type="button" onclick="refreshAuditLogs()">Refresh</button>
  </div>
  <div class="table-wrap">
  <table>
    <tr><th>Time</th><th>User</th><th>Action</th><th>Entity</th><th>ID</th><th>Details</th></tr>
    ${DB.auditLogs.map((log)=>`<tr>
      <td style="font-size:12px">${escapeHtml(log.createdAt || '')}</td>
      <td>${escapeHtml(log.username || '')}</td>
      <td>${statusBadge(log.actionType || '')}</td>
      <td>${escapeHtml(log.entityType || '')}</td>
      <td>${escapeHtml(log.entityId || '-')}</td>
      <td style="font-size:12px;color:var(--color-text-secondary);max-width:380px;white-space:pre-wrap">${escapeHtml(typeof log.details === 'string' ? log.details : JSON.stringify(log.details || {}))}</td>
    </tr>`).join('')}
  </table>
  </div>
</div>`;
}

function getModalConfig(page){
  return {
    orders:{
      titleAdd:'New Order', titleEdit:'Edit Order', list:DB.orders,
      get:id=>DB.orders.find(item=>item.id===id),
      create:()=>({id:Math.max(0,...DB.orders.map(item=>item.id))+1,date:'2026-04-05',dealer:DB.dealers[0]?.name||'',rdm:DB.employees.find(e=>e.role==='RDM')?.name||'',product:DB.products[0]?.name||'',qty:'',rate:'',amount:0,payType:'Credit',dueDate:'',payStatus:'Pending',orderStatus:'Pending',notes:'',received:0,outstanding:0,deliveredQty:0,pendingQty:0}),
      render:data=>`<div class="entry-note">Order details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Dealer</label><select name="dealer">${DB.dealers.map(d=>`<option ${d.name===data.dealer?'selected':''}>${d.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>RDM</label><select name="rdm">${DB.employees.filter(e=>e.role==='RDM').map(e=>`<option ${e.name===data.rdm?'selected':''}>${e.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Product</label><select name="product">${DB.products.map(p=>`<option ${p.name===data.product?'selected':''}>${p.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Quantity (Bags)</label><input name="qty" type="number" value="${data.qty ?? ''}" placeholder="0"></div>
        <div class="form-group"><label>Rate (Rs.)</label><input name="rate" type="number" value="${data.rate ?? ''}" placeholder="1370"></div>
        <div class="form-group"><label>Order Date</label><input name="date" type="date" value="${escapeHtml(data.date || '2026-04-05')}"></div>
        <div class="form-group"><label>Credit Due Date</label><input name="dueDate" type="date" value="${escapeHtml(data.dueDate || '')}"></div>
        <div class="form-group"><label>Payment Type</label><select name="payType"><option ${data.payType==='Credit'?'selected':''}>Credit</option><option ${data.payType==='Cash'?'selected':''}>Cash</option></select></div>
        <div class="form-group full-span"><label>Notes</label><textarea name="notes" placeholder="ASAP / special instructions...">${escapeHtml(cleanInjectedText(data.notes || ''))}</textarea></div>
      </div>`,
      save(form,item){item.dealer=form.get('dealer');item.rdm=form.get('rdm');item.product=form.get('product');item.qty=Number(form.get('qty')||0);item.rate=Number(form.get('rate')||0);item.date=form.get('date');item.dueDate=form.get('dueDate');item.payType=form.get('payType');item.notes=form.get('notes');item.amount=item.qty*item.rate;item.pendingQty=item.qty-(item.deliveredQty||0);}
    },
    dispatch:{
      titleAdd:'New Dispatch', titleEdit:'Edit Dispatch', list:DB.dispatch,
      get:id=>DB.dispatch.find(item=>String(item.invoice)===String(id)),
      create:()=>({invoice:Math.max(300,...DB.dispatch.map(item=>Number(item.invoice)||0))+1,orderId:DB.orders[0]?.id||1,date:'2026-04-05',status:'Dispatched',vehicle:'',qty:0,transporter:DB.transporters[0]?.name||'',driver:'',driverPhone:'',lr:'',eway:'',remarks:''}),
      render:data=>`<div class="entry-note">Dispatch details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Order ID</label><input name="orderId" type="number" value="${data.orderId ?? ''}" placeholder="1"></div>
        <div class="form-group"><label>Invoice No.</label><input name="invoice" type="number" value="${data.invoice ?? ''}" placeholder="311"></div>
        <div class="form-group"><label>Dispatch Date</label><input name="date" type="date" value="${escapeHtml(data.date || '2026-04-05')}"></div>
        <div class="form-group"><label>Status</label><select name="status"><option ${data.status==='Dispatched'?'selected':''}>Dispatched</option><option ${data.status==='Partially Delivered'?'selected':''}>Partially Delivered</option><option ${data.status==='Delivered'?'selected':''}>Delivered</option></select></div>
        <div class="form-group"><label>Vehicle No.</label><input name="vehicle" type="text" value="${escapeHtml(cleanInjectedText(data.vehicle || ''))}" placeholder="UP15DT7318"></div>
        <div class="form-group"><label>Quantity</label><input name="qty" type="number" value="${data.qty ?? ''}" placeholder="600"></div>
        <div class="form-group"><label>Transporter</label><select name="transporter">${DB.transporters.map(t=>`<option ${t.name===data.transporter?'selected':''}>${t.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Driver Name</label><input name="driver" type="text" value="${escapeHtml(cleanInjectedText(data.driver || ''))}" placeholder="Driver name"></div>
        <div class="form-group"><label>Driver Phone</label><input name="driverPhone" type="text" value="${escapeHtml(cleanInjectedText(data.driverPhone || ''))}" placeholder="9XXXXXXXXX"></div>
        <div class="form-group"><label>LR Number</label><input name="lr" type="text" value="${escapeHtml(cleanInjectedText(data.lr || ''))}" placeholder="465"></div>
        <div class="form-group"><label>E-Way Bill</label><input name="eway" type="text" value="${escapeHtml(cleanInjectedText(data.eway || ''))}" placeholder="E-way bill"></div>
        <div class="form-group full-span"><label>Remarks</label><textarea name="remarks" placeholder="Dispatch notes...">${escapeHtml(cleanInjectedText(data.remarks || ''))}</textarea></div>
      </div>`,
      save(form,item){item.orderId=Number(form.get('orderId')||0);item.invoice=Number(form.get('invoice')||0);item.date=form.get('date');item.status=form.get('status');item.vehicle=form.get('vehicle');item.qty=Number(form.get('qty')||0);item.transporter=form.get('transporter');item.driver=form.get('driver');item.driverPhone=form.get('driverPhone');item.lr=form.get('lr');item.eway=form.get('eway');item.remarks=form.get('remarks');}
    },
    payments:{
      titleAdd:'Record Payment', titleEdit:'Edit Payment', list:DB.payments,
      get:id=>DB.payments.find(item=>Number(item.id)===Number(id)),
      create:()=>({id:Math.max(0,...DB.payments.map(item=>Number(item.id)||0))+1,orderId:DB.orders[0]?.id||1,dealer:DB.dealers[0]?.name||'',amount:0,mode:'NEFT/RTGS',date:'2026-04-05',ref:'',status:'Paid',notes:'',rdm:DB.employees.find(e=>e.role==='RDM')?.name||'',incentive:0}),
      render:data=>`<div class="entry-note">Payment details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Order ID</label><input name="orderId" type="number" value="${data.orderId ?? ''}" placeholder="1"></div>
        <div class="form-group"><label>Dealer</label><select name="dealer">${DB.dealers.map(d=>`<option ${d.name===data.dealer?'selected':''}>${d.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Amount (Rs.)</label><input name="amount" type="number" value="${data.amount ?? ''}" placeholder="0"></div>
        <div class="form-group"><label>Payment Mode</label><select name="mode"><option ${data.mode==='NEFT/RTGS'?'selected':''}>NEFT/RTGS</option><option ${data.mode==='RTGS'?'selected':''}>RTGS</option><option ${data.mode==='NEFT'?'selected':''}>NEFT</option><option ${data.mode==='Cheque'?'selected':''}>Cheque</option><option ${data.mode==='Cash'?'selected':''}>Cash</option><option ${data.mode==='UPI'?'selected':''}>UPI</option></select></div>
        <div class="form-group"><label>Payment Date</label><input name="date" type="date" value="${escapeHtml(data.date || '2026-04-05')}"></div>
        <div class="form-group"><label>Reference No.</label><input name="ref" type="text" value="${escapeHtml(cleanInjectedText(data.ref || ''))}" placeholder="UTR / Transaction ID"></div>
        <div class="form-group"><label>Status</label><select name="status"><option ${data.status==='Paid'?'selected':''}>Paid</option><option ${data.status==='Pending'?'selected':''}>Pending</option><option ${data.status==='Failed'?'selected':''}>Failed</option></select></div>
        <div class="form-group"><label>RDM Name</label><select name="rdm">${DB.employees.filter(e=>e.role==='RDM').map(e=>`<option ${e.name===data.rdm?'selected':''}>${e.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Incentive</label><input name="incentive" type="number" value="${data.incentive ?? ''}" placeholder="0"></div>
        <div class="form-group full-span"><label>Notes</label><textarea name="notes" placeholder="Payment remarks...">${escapeHtml(cleanInjectedText(data.notes || ''))}</textarea></div>
      </div>`,
      save(form,item){item.orderId=Number(form.get('orderId')||0);item.dealer=form.get('dealer');item.amount=Number(form.get('amount')||0);item.mode=form.get('mode');item.date=form.get('date');item.ref=form.get('ref');item.status=form.get('status');item.rdm=form.get('rdm');item.incentive=Number(form.get('incentive')||0);item.notes=form.get('notes');}
    },
    delivery:{
      titleAdd:'Add Delivery Proof', titleEdit:'Edit Delivery Proof', list:DB.delivery,
      get:id=>DB.delivery.find(item=>Number(item.id)===Number(id)),
      create:()=>({id:Math.max(0,...DB.delivery.map(item=>Number(item.id)||0))+1,orderId:DB.orders[0]?.id||1,dispatchInvoice:DB.dispatch[0]?.invoice||'',dealer:DB.dealers[0]?.name||'',deliveredQty:0,date:'2026-04-05',receiver:'',receiverPhone:'',condition:'GOOD',proofUrl:'',status:'Pending',remarks:''}),
      render:data=>`<div class="entry-note">Delivery proof details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Order ID</label><input name="orderId" type="number" value="${data.orderId ?? ''}" placeholder="1"></div>
        <div class="form-group"><label>Dispatch Invoice</label><input name="dispatchInvoice" type="number" value="${data.dispatchInvoice ?? ''}" placeholder="302"></div>
        <div class="form-group"><label>Dealer</label><select name="dealer">${DB.dealers.map(d=>`<option ${d.name===data.dealer?'selected':''}>${d.name}</option>`).join('')}</select></div>
        <div class="form-group"><label>Delivered Quantity</label><input name="deliveredQty" type="number" value="${data.deliveredQty ?? ''}" placeholder="600"></div>
        <div class="form-group"><label>Delivery Date</label><input name="date" type="date" value="${escapeHtml(data.date || '2026-04-05')}"></div>
        <div class="form-group"><label>Receiver Name</label><input name="receiver" type="text" value="${escapeHtml(cleanInjectedText(data.receiver || ''))}" placeholder="Receiver"></div>
        <div class="form-group"><label>Receiver Phone</label><input name="receiverPhone" type="text" value="${escapeHtml(cleanInjectedText(data.receiverPhone || ''))}" placeholder="9XXXXXXXXX"></div>
        <div class="form-group"><label>Condition</label><select name="condition"><option ${data.condition==='GOOD'?'selected':''}>GOOD</option><option ${data.condition==='AVERAGE'?'selected':''}>AVERAGE</option><option ${data.condition==='DAMAGED'?'selected':''}>DAMAGED</option></select></div>
        <div class="form-group"><label>Status</label><select name="status"><option ${data.status==='Pending'?'selected':''}>Pending</option><option ${data.status==='Verified'?'selected':''}>Verified</option><option ${data.status==='Rejected'?'selected':''}>Rejected</option></select></div>
        <div class="form-group"><label>Proof URL</label><input name="proofUrl" type="text" value="${escapeHtml(cleanInjectedText(data.proofUrl || ''))}" placeholder="https://..."></div>
        <div class="form-group full-span"><label>Remarks</label><textarea name="remarks" placeholder="Delivery remarks...">${escapeHtml(cleanInjectedText(data.remarks || ''))}</textarea></div>
      </div>`,
      save(form,item){
        item.orderId=Number(form.get('orderId')||0);
        item.dispatchInvoice=Number(form.get('dispatchInvoice')||0);
        item.dealer=form.get('dealer');
        item.deliveredQty=Number(form.get('deliveredQty')||0);
        item.date=form.get('date');
        item.receiver=form.get('receiver');
        item.receiverPhone=String(form.get('receiverPhone')||'').trim();
        item.condition=String(form.get('condition')||'').trim();
        item.status=form.get('status');
        item.proofUrl=form.get('proofUrl');
        item.remarks=buildDeliveryRemarks(form.get('remarks'),item.receiverPhone,item.condition);
      }
    },
    dealers:{
      titleAdd:'Add Dealer', titleEdit:'Edit Dealer', list:DB.dealers,
      get:id=>DB.dealers.find(item=>item.id===id),
      create:()=>({id:'',name:'',phone:'',district:'',state:'HARYANA',address:'',credit:0,active:'Y'}),
      render:data=>`<div class="entry-note">Dealer details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Dealer ID</label><input name="id" type="text" value="${data.id || ''}" placeholder="Pal007"></div>
        <div class="form-group"><label>Dealer Name</label><input name="name" type="text" value="${data.name || ''}" placeholder="Full name"></div>
        <div class="form-group"><label>Phone</label><input name="phone" type="text" value="${data.phone || ''}" placeholder="9XXXXXXXXX"></div>
        <div class="form-group"><label>District</label><input name="district" type="text" value="${data.district || ''}" placeholder="Palwal"></div>
        <div class="form-group full-span"><label>Address</label><textarea name="address" placeholder="Full address...">${data.address || ''}</textarea></div>
        <div class="form-group"><label>Credit Limit (Rs.)</label><input name="credit" type="number" value="${data.credit ?? ''}" placeholder="20000000"></div>
        <div class="form-group"><label>Active</label><select name="active"><option ${data.active==='Y'?'selected':''}>Y</option><option ${data.active==='N'?'selected':''}>N</option></select></div>
      </div>`,
      save(form,item){item.id=form.get('id');item.name=form.get('name');item.phone=form.get('phone');item.district=form.get('district');item.address=form.get('address');item.credit=Number(form.get('credit')||0);item.active=form.get('active');}
    },
    employees:{
      titleAdd:'Add Employee', titleEdit:'Edit Employee', list:DB.employees,
      get:id=>DB.employees.find(item=>item.id===id),
      create:()=>({id:'',name:'',role:'RDM',phone:'',region:'',zm:'',active:'Y'}),
      render:data=>`<div class="entry-note">Employee details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Employee ID</label><input name="id" type="text" value="${data.id || ''}" placeholder="Emp007"></div>
        <div class="form-group"><label>Employee Name</label><input name="name" type="text" value="${data.name || ''}" placeholder="Full name"></div>
        <div class="form-group"><label>Role</label><select name="role"><option ${data.role==='RDM'?'selected':''}>RDM</option><option ${data.role==='ZM'?'selected':''}>ZM</option><option ${data.role==='Staff'?'selected':''}>Staff</option></select></div>
        <div class="form-group"><label>Phone</label><input name="phone" type="text" value="${data.phone || ''}" placeholder="9XXXXXXXXX"></div>
        <div class="form-group"><label>Region</label><input name="region" type="text" value="${data.region || ''}" placeholder="Palwal / Faridabad"></div>
        <div class="form-group"><label>Reporting ZM</label><input name="zm" type="text" value="${data.zm || ''}" placeholder="Manager name"></div>
        <div class="form-group"><label>Active</label><select name="active"><option ${data.active==='Y'?'selected':''}>Y</option><option ${data.active==='N'?'selected':''}>N</option></select></div>
      </div>`,
      save(form,item){item.id=form.get('id');item.name=form.get('name');item.role=form.get('role');item.phone=form.get('phone');item.region=form.get('region');item.zm=form.get('zm');item.active=form.get('active');}
    },
    products:{
      titleAdd:'Add Product', titleEdit:'Edit Product', list:DB.products,
      get:id=>DB.products.find(item=>item.id===id),
      create:()=>({id:'',name:'',category:'',unit:'Bags',mrp:0,rate:0,gst:5,active:'Y'}),
      render:data=>`<div class="entry-note">Product pricing aur GST update karein.</div><div class="form-grid">
        <div class="form-group"><label>Product ID</label><input name="id" type="text" value="${data.id || ''}" placeholder="Pro005"></div>
        <div class="form-group"><label>Product Name</label><input name="name" type="text" value="${data.name || ''}" placeholder="NPK 12:32:16"></div>
        <div class="form-group"><label>Category</label><input name="category" type="text" value="${data.category || ''}" placeholder="Primary Fertilizer"></div>
        <div class="form-group"><label>Unit</label><select name="unit"><option ${data.unit==='Bags'?'selected':''}>Bags</option><option ${data.unit==='Bucket'?'selected':''}>Bucket</option><option ${data.unit==='Kg'?'selected':''}>Kg</option><option ${data.unit==='Litre'?'selected':''}>Litre</option></select></div>
        <div class="form-group"><label>MRP (Rs.)</label><input name="mrp" type="number" value="${data.mrp ?? ''}" placeholder="1450"></div>
        <div class="form-group"><label>Sale Rate (Rs.)</label><input name="rate" type="number" value="${data.rate ?? ''}" placeholder="1370"></div>
        <div class="form-group"><label>GST %</label><input name="gst" type="number" value="${data.gst ?? ''}" placeholder="5"></div>
        <div class="form-group"><label>Active</label><select name="active"><option ${data.active==='Y'?'selected':''}>Y</option><option ${data.active==='N'?'selected':''}>N</option></select></div>
      </div>`,
      save(form,item){item.id=form.get('id');item.name=form.get('name');item.category=form.get('category');item.unit=form.get('unit');item.mrp=Number(form.get('mrp')||0);item.rate=Number(form.get('rate')||0);item.gst=Number(form.get('gst')||0);item.active=form.get('active');}
    },
    transporters:{
      titleAdd:'Add Transporter', titleEdit:'Edit Transporter', list:DB.transporters,
      get:id=>DB.transporters.find(item=>item.id===id),
      create:()=>({id:'',name:'',phone:'',city:'',notes:'',active:'Y'}),
      render:data=>`<div class="entry-note">Transporter details update karein.</div><div class="form-grid">
        <div class="form-group"><label>Transporter ID</label><input name="id" type="text" value="${data.id || ''}" placeholder="TR005"></div>
        <div class="form-group"><label>Transporter Name</label><input name="name" type="text" value="${data.name || ''}" placeholder="New Transport"></div>
        <div class="form-group"><label>Phone</label><input name="phone" type="text" value="${data.phone || ''}" placeholder="9XXXXXXXXX"></div>
        <div class="form-group"><label>City</label><input name="city" type="text" value="${data.city || ''}" placeholder="Meerut"></div>
        <div class="form-group full-span"><label>Notes</label><textarea name="notes" placeholder="Route / office address / remarks...">${data.notes || ''}</textarea></div>
        <div class="form-group"><label>Active</label><select name="active"><option ${data.active==='Y'?'selected':''}>Y</option><option ${data.active==='N'?'selected':''}>N</option></select></div>
      </div>`,
      save(form,item){item.id=form.get('id');item.name=form.get('name');item.phone=form.get('phone');item.city=form.get('city');item.notes=form.get('notes');item.active=form.get('active');}
    },
    users:{
      titleAdd:'Add User', titleEdit:'Edit User', list:DB.users,
      get:id=>DB.users.find(item=>Number(item.id)===Number(id)),
      create:()=>({id:'',username:'',fullName:'',email:'',role:'Staff',active:'Y',password:'',permissions:{}}),
      render:data=>`<div class="entry-note">Login account aur role assign karein.</div><div class="form-grid">
        <div class="form-group"><label>Username</label><input name="username" type="text" value="${escapeHtml(data.username || '')}" placeholder="staff1"></div>
        <div class="form-group"><label>Full Name</label><input name="fullName" type="text" value="${escapeHtml(data.fullName || '')}" placeholder="User full name"></div>
        <div class="form-group"><label>Email</label><input name="email" type="email" value="${escapeHtml(data.email || '')}" placeholder="name@company.com"></div>
        <div class="form-group"><label>Role</label><select name="role"><option ${data.role==='Staff'?'selected':''}>Staff</option><option ${data.role==='Admin'?'selected':''}>Admin</option><option ${data.role==='Viewer'?'selected':''}>Viewer</option></select></div>
        <div class="form-group"><label>Status</label><select name="active"><option ${data.active==='Y'?'selected':''}>Y</option><option ${data.active==='N'?'selected':''}>N</option></select></div>
        <div class="form-group"><label>Password</label><input name="password" type="password" value="" placeholder="${data.id ? 'Leave blank to keep same password' : 'Set password'}"></div>
        ${permissionMatrixHtml(data.permissions || {})}
      </div>`,
      save(form,item){
        const permissionKeys=['dashboard','sales','orders','dispatch','delivery','payments','receipts','recovery','dealers','employees','products','transporters','stock','ai','users','audit'];
        item.userId=Number(item.id || 0);
        item.id=Number(item.id || 0);
        item.username=String(form.get('username') || '').trim().toLowerCase();
        item.fullName=String(form.get('fullName') || '').trim();
        item.email=String(form.get('email') || '').trim();
        item.role=String(form.get('role') || 'Staff');
        item.active=String(form.get('active') || 'Y');
        item.password=String(form.get('password') || '');
        item.permissions=Object.fromEntries(permissionKeys.map((key)=>[key,{
          view:form.get(`perm_view_${key}`)==='on',
          edit:form.get(`perm_edit_${key}`)==='on'
        }]));
      }
    }
  }[page];
}

function openEntryModal(page,mode='add',id=null){
  if(!canWritePage(page)){
    alert('Aapke role ko is page me edit permission nahi hai.');
    return;
  }
  const config=getModalConfig(page);
  if(!config){
    const overlay=document.createElement('div');
    overlay.className='modal-overlay';
    overlay.style.position='fixed';
    overlay.innerHTML=`<div class="modal"><div class="modal-header"><div><div class="modal-title">New Entry</div><div class="modal-subtitle">Phoenix Plants CRM quick entry form</div></div><button class="close-btn" onclick="this.closest('.modal-overlay').remove()">&times;</button></div><div class="modal-body"><div class="empty-state">Is page ke liye quick entry available hai.<br>Sidebar se specific module select karein.</div></div><div class="form-actions"><button class="btn" onclick="this.closest('.modal-overlay').remove()">Close</button></div></div>`;
    document.getElementById('app').appendChild(overlay);
    return;
  }
  modalContext={mode,page,id};
  const data=mode==='edit'?{...config.get(id)}:config.create();
  const overlay=document.createElement('div');
  overlay.className='modal-overlay';
  overlay.style.position='fixed';
  overlay.innerHTML=`<div class="modal">
    <div class="modal-header">
      <div>
        <div class="modal-title">${mode==='edit'?config.titleEdit:config.titleAdd}</div>
        <div class="modal-subtitle">Phoenix Plants CRM quick entry form</div>
      </div>
      <button class="close-btn" onclick="closeActiveModal()">&times;</button>
    </div>
    <div class="modal-body"><form id="entry-form">${config.render(data)}</form></div>
    <div class="form-actions">
      <button type="button" class="btn btn-primary" onclick="saveEntry(this)">${mode==='edit'?'Update Entry':'Save Entry'}</button>
      <button type="button" class="btn" onclick="closeActiveModal()">Cancel</button>
    </div>
  </div>`;
  document.getElementById('app').appendChild(overlay);
}

openAddModal=function(){
  const page = getModalConfig(currentPage) ? currentPage : 'orders';
  if(!canWritePage(page)){
    alert('Aapke role ko new entry add karne ki permission nahi hai.');
    return;
  }
  if (page !== currentPage) {
    nav(page);
  }
  openEntryModal(page,'add');
};
async function openEditModal(page,id){
  const normalized=/^\d+$/.test(String(id))?Number(id):id;
  const locked=await acquireEditLock(page,normalized);
  if(!locked){ return; }
  openEntryModal(page,'edit',normalized);
}

async function closeActiveModal(){
  document.querySelector('.modal-overlay')?.remove();
  await releaseActiveEditLock();
}

saveEntry=async function(btn){
  const config=getModalConfig(modalContext.page);
  if(!config){
    btn.closest('.modal-overlay').remove();
    return;
  }
  const form=new FormData(btn.closest('.modal').querySelector('#entry-form'));
  let target;
  if(modalContext.mode==='edit'){
    target=config.get(modalContext.id);
  }else{
    target=config.create();
    config.list.push(target);
  }
  config.save(form,target);
  persistState();
  let filterAutoReset=false;
  if(modalContext.mode==='add' && ['orders','dispatch','payments','delivery'].includes(modalContext.page)){
    if(!doesEntryMatchCurrentFilter(target.date)){
      filterState.month='all';
      filterState.year='all';
      filterAutoReset=true;
    }
  }
  render();
  const dbResult=await persistToDb(modalContext.page,target,modalContext.mode);
  const isQueued=Boolean(dbResult?.queued);
  if(modalContext.mode==='add' && dbResult?.ok && dbResult?.insert_id){
    if(modalContext.page==='orders' || modalContext.page==='payments' || modalContext.page==='delivery'){
      target.id=Number(dbResult.insert_id);
    }
  }
  if(dbResult?.ok && !isQueued){
    if(modalContext.page==='users'){ await loadUsers(); }
    await syncDbToUi({force:true});
    render();
  }
  await releaseActiveEditLock();
  persistState();
  const syncLine=isQueued
    ? 'Database down tha: entry safe queue me store ho gayi.'
    : (dbResult?.ok ? 'Database sync successful.' : 'Database sync pending (backend unavailable).');
  const filterLine=filterAutoReset
    ? '<br>Note: New entry dikhane ke liye filter All Months / All Years pe set kar diya gaya.'
    : '';
  const overlay=btn.closest('.modal-overlay');
  overlay.innerHTML=`<div class="modal"><div style="text-align:center;padding:30px"><div style="font-size:32px;margin-bottom:12px">${modalContext.mode==='edit'?'Updated':'Done'}</div><div style="font-size:15px;font-weight:500;margin-bottom:8px">${modalContext.mode==='edit'?'Entry Updated!':'Entry Saved!'}</div><div style="font-size:13px;color:var(--color-text-secondary)">Data successfully ${modalContext.mode==='edit'?'update':'add'} ho gaya<br>Browser me bhi safe save ho gaya, isliye next time open karne par data wapas milna chahiye.<br>${syncLine}${filterLine}</div><button class="btn" style="margin-top:14px;margin-right:8px" onclick="exportAllDataToExcel()">Export Excel</button><button class="btn btn-primary" style="margin-top:14px" onclick="this.closest('.modal-overlay').remove();render()">Done</button></div></div>`;
};

async function initializeApp(){
  restoreState();
  restoreAuthSession();
  sanitizeDbTextFields();
  render();
  updateUserToolbar();
  applyRoleUi();
  resolveRuntimeConfig().then((config)=>{
    if(config?.lanUrls?.length){
      console.log('CRM LAN URLs:', config.lanUrls.join(', '));
    }
  }).catch(()=>{});
  const me=await fetchCurrentUser();
  if(!me){
    showLoginOverlay('Shared CRM use karne ke liye pehle login karein. Default admin: admin / admin123');
    return;
  }
  await loadUsers();
  await loadAuditLogs();
  await syncDbToUi({force:true});
  render();
  startAutoSync();
}

initializeApp();

window.addEventListener('focus', async ()=>{
  if(!authToken){ return; }
  const changed=await syncDbToUi({force:true});
  if(changed){ render(); }
});
document.addEventListener('visibilitychange', async ()=>{
  if(document.hidden || !authToken){ return; }
  const changed=await syncDbToUi({force:true});
  if(changed){ render(); }
});
window.addEventListener('beforeunload', ()=>{
  releaseActiveEditLock();
});

async function refreshAuditLogs(){
  await loadAuditLogs();
  if(currentPage==='audit'){ render(); }
}

function openPasswordChangeModal(){
  const overlay=document.createElement('div');
  overlay.className='modal-overlay';
  overlay.style.position='fixed';
  overlay.innerHTML=`<div class="modal" style="max-width:460px">
    <div class="modal-header">
      <div>
        <div class="modal-title">Change Password</div>
        <div class="modal-subtitle">Apne account ka password update karein.</div>
      </div>
      <button class="close-btn" onclick="this.closest('.modal-overlay').remove()">&times;</button>
    </div>
    <div class="modal-body">
      <div id="password-change-message"></div>
      <form id="password-change-form" class="form-grid" style="grid-template-columns:1fr">
        <div class="form-group"><label>Current Password</label><input name="currentPassword" type="password" autocomplete="current-password"></div>
        <div class="form-group"><label>New Password</label><input name="newPassword" type="password" autocomplete="new-password" placeholder="At least 6 characters"></div>
      </form>
    </div>
    <div class="form-actions">
      <button type="button" class="btn btn-primary" onclick="submitPasswordChange(this)">Update Password</button>
      <button type="button" class="btn" onclick="this.closest('.modal-overlay').remove()">Cancel</button>
    </div>
  </div>`;
  document.body.appendChild(overlay);
}

async function submitPasswordChange(btn){
  const form=btn.closest('.modal').querySelector('#password-change-form');
  const msg=form.closest('.modal').querySelector('#password-change-message');
  const formData=new FormData(form);
  try{
    await apiGetJson(APP_CONFIG.authChangePasswordUrl,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        currentPassword:String(formData.get('currentPassword') || ''),
        newPassword:String(formData.get('newPassword') || '')
      })
    });
    msg.innerHTML=`<div class="alert alert-success">Password update ho gaya.</div>`;
    form.reset();
    if(canViewAudit()){ await loadAuditLogs(); }
  }catch(err){
    msg.innerHTML=`<div class="alert alert-warning">${escapeHtml(err?.message || 'Password update failed.')}</div>`;
  }
}
