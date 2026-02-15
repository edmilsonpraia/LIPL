/* ═══════════════════════════════════════════
   Allora - Gestao de Evento
   Frontend App (Vanilla JS)
   ═══════════════════════════════════════════ */

const AREA_COLORS = {
  "Gestao Geral": "#9B1B3C",
  "Curadoria & Agenda": "#7A1530",
  "Curadoria": "#7A1530",
  "Logistica": "#B92850",
  "Relacoes Institucionais": "#C4506A",
  "Comunicacao & Marketing": "#D4728A",
  "Comunicacao": "#D4728A",
  "Gestao Financeira": "#6B0025",
  "Experiencia Participante": "#E0919F",
  "Experiencia": "#E0919F",
  "Avaliacao Final": "#8C8C8C",
  "Parcerias": "#C4506A",
  "Pos-evento": "#8C8C8C"
};

const TEAM_COLORS = ["#9B1B3C","#7A1530","#B92850","#C4506A","#D4728A","#6B0025","#E0919F"];

const STATUS_OPTIONS = ['Pendente', 'Em Curso', 'Concluido'];
const AREA_LIST = ["Gestao Geral","Curadoria & Agenda","Logistica","Relacoes Institucionais","Comunicacao & Marketing","Gestao Financeira","Experiencia Participante","Avaliacao Final"];
const CHECKLIST_AREAS = ["Gestao Geral","Curadoria","Logistica","Comunicacao","Parcerias","Experiencia","Pos-evento"];

const ICONS = {
  dashboard: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
  mapa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7l6-3 6 3 6-3v13l-6 3-6-3-6 3V7z"/><path d="M9 4v13"/><path d="M15 7v13"/></svg>',
  plano: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  checklist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>',
  equipas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>',
  docs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  pdf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="22" height="22"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  user: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  edit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  trash: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="16" height="16"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>'
};

// ══════════════════════════════════════════
// AUTH & USERS
// ══════════════════════════════════════════
const USERS_KEY = 'allora_users';
const SESSION_KEY = 'allora_session';
const ROLE_LABELS = { admin: 'Administrador', coord: 'Coordenador', viewer: 'Visualizador' };

// Permissions: what each role can do
const PERMISSIONS = {
  admin:  { view: true, edit: true, add: true, delete: true, manageUsers: true, resetData: true },
  coord:  { view: true, edit: true, add: true, delete: false, manageUsers: false, resetData: false },
  viewer: { view: true, edit: false, add: false, delete: false, manageUsers: false, resetData: false }
};

const DEFAULT_USERS = [
  { username: 'admin',  password: 'admin123',  nome: 'Administrador',     role: 'admin' },
  { username: 'coord',  password: 'coord123',  nome: 'Coordenador Geral', role: 'coord' },
  { username: 'viewer', password: 'viewer123', nome: 'Visualizador',      role: 'viewer' }
];

let currentUser = null;

function getUsers() {
  try {
    const s = localStorage.getItem(USERS_KEY);
    return s ? JSON.parse(s) : DEFAULT_USERS.map(function(u) { return Object.assign({}, u); });
  } catch(e) { return DEFAULT_USERS.map(function(u) { return Object.assign({}, u); }); }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function can(action) {
  if (!currentUser) return false;
  return PERMISSIONS[currentUser.role] && PERMISSIONS[currentUser.role][action];
}

function doLogin() {
  var userInput = document.getElementById('login-user').value.trim();
  var passInput = document.getElementById('login-pass').value;
  var errorEl = document.getElementById('login-error');

  if (!userInput || !passInput) {
    errorEl.textContent = 'Preencha todos os campos';
    return;
  }

  var users = getUsers();
  var found = null;
  for (var i = 0; i < users.length; i++) {
    if (users[i].username === userInput && users[i].password === passInput) {
      found = users[i];
      break;
    }
  }

  if (!found) {
    errorEl.textContent = 'Utilizador ou senha incorrectos';
    document.getElementById('login-pass').value = '';
    return;
  }

  currentUser = found;
  localStorage.setItem(SESSION_KEY, JSON.stringify({ username: found.username, role: found.role, nome: found.nome }));
  showApp();
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem(SESSION_KEY);
  document.getElementById('app-main').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
  document.getElementById('login-user').value = '';
  document.getElementById('login-pass').value = '';
  document.getElementById('login-error').textContent = '';
}

function checkSession() {
  try {
    var s = localStorage.getItem(SESSION_KEY);
    if (s) {
      var session = JSON.parse(s);
      var users = getUsers();
      for (var i = 0; i < users.length; i++) {
        if (users[i].username === session.username) {
          currentUser = users[i];
          return true;
        }
      }
    }
  } catch(e) {}
  return false;
}

function showApp() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('app-main').style.display = 'grid';

  // Update avatar and dropdown
  var initials = currentUser.nome.split(' ').map(function(w) { return w[0]; }).join('').substring(0, 2).toUpperCase();
  document.getElementById('user-avatar').textContent = initials;
  document.getElementById('dropdown-name').textContent = currentUser.nome;
  document.getElementById('dropdown-role').textContent = ROLE_LABELS[currentUser.role] || currentUser.role;

  // Show/hide admin features
  var manageBtn = document.getElementById('nav-manage-users');
  if (manageBtn) manageBtn.style.display = can('manageUsers') ? 'flex' : 'none';

  var resetBtn = document.getElementById('btn-reset-data');
  if (resetBtn) resetBtn.style.display = can('resetData') ? 'flex' : 'none';

  loadData();

  document.querySelectorAll('.nav-item').forEach(function(item) {
    item.addEventListener('click', function() { navigate(item.dataset.page); });
  });

  navigate('dashboard');
  updateSidebarStats();
}

function toggleUserMenu() {
  document.getElementById('user-dropdown').classList.toggle('show');
}

function closeUserMenu() {
  document.getElementById('user-dropdown').classList.remove('show');
}

// ══════════════════════════════════════════
// PERSISTENCE (localStorage)
// ══════════════════════════════════════════
const STORAGE_KEY = 'allora_event_data';

function loadData() {
  try {
    var s = localStorage.getItem(STORAGE_KEY);
    if (s) {
      var saved = JSON.parse(s);
      if (saved.mapaGeral) DATA.mapaGeral = saved.mapaGeral;
      if (saved.planoTrabalho) DATA.planoTrabalho = saved.planoTrabalho;
      if (saved.checklist) DATA.checklist = saved.checklist;
      if (saved.dashboard) DATA.dashboard = saved.dashboard;
      if (saved.equipas) DATA.equipas = saved.equipas;
      if (saved.anexos) DATA.anexos = saved.anexos;
      if (saved.instituicoes) DATA.instituicoes = saved.instituicoes;
    }
  } catch(e) { console.warn('Erro ao carregar dados:', e); }
}

function saveData() {
  if (!can('edit') && !can('add')) return showToast('Sem permissao para alterar dados');
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      mapaGeral: DATA.mapaGeral,
      planoTrabalho: DATA.planoTrabalho,
      checklist: DATA.checklist,
      dashboard: DATA.dashboard,
      equipas: DATA.equipas,
      anexos: DATA.anexos,
      instituicoes: DATA.instituicoes
    }));
  } catch(e) { console.warn('Erro ao guardar dados:', e); }
}

function resetData() {
  if (!can('resetData')) return showToast('Sem permissao');
  if (confirm('Tem a certeza que deseja repor todos os dados originais? Todas as alteracoes serao perdidas.')) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
}

// ══════════════════════════════════════════
// STATE
// ══════════════════════════════════════════
let currentPage = 'dashboard';
let barChart = null;
let doughnutChart = null;
let currentFilter = {};

// ══════════════════════════════════════════
// MODAL SYSTEM
// ══════════════════════════════════════════
function openModal(title, fields, onSave) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  let fieldsHTML = '';
  fields.forEach(f => {
    if (f.type === 'select') {
      const opts = f.options.map(o => `<option value="${o}" ${o === f.value ? 'selected' : ''}>${o}</option>`).join('');
      fieldsHTML += `<div class="modal-field">
        <label>${f.label}</label>
        <select data-key="${f.key}">${opts}</select>
      </div>`;
    } else if (f.type === 'textarea') {
      fieldsHTML += `<div class="modal-field">
        <label>${f.label}</label>
        <textarea data-key="${f.key}" rows="3">${f.value || ''}</textarea>
      </div>`;
    } else {
      fieldsHTML += `<div class="modal-field">
        <label>${f.label}</label>
        <input type="${f.type || 'text'}" data-key="${f.key}" value="${f.value || ''}" ${f.placeholder ? 'placeholder="'+f.placeholder+'"' : ''}>
      </div>`;
    }
  });

  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h3>${title}</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      </div>
      <div class="modal-body">${fieldsHTML}</div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
        <button class="btn btn-primary" id="modal-save-btn">Guardar</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('show'));

  const firstInput = overlay.querySelector('input, select, textarea');
  if (firstInput) firstInput.focus();

  overlay.querySelector('#modal-save-btn').onclick = () => {
    const result = {};
    overlay.querySelectorAll('[data-key]').forEach(el => {
      result[el.dataset.key] = el.value;
    });
    onSave(result);
    overlay.remove();
  };
}

function confirmDelete(msg, onConfirm) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  overlay.innerHTML = `
    <div class="modal" style="max-width:400px">
      <div class="modal-header">
        <h3>Confirmar</h3>
        <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">&times;</button>
      </div>
      <div class="modal-body"><p style="font-size:13px;color:var(--text-muted)">${msg}</p></div>
      <div class="modal-footer">
        <button class="btn btn-secondary" onclick="this.closest('.modal-overlay').remove()">Cancelar</button>
        <button class="btn btn-danger" id="modal-confirm-btn">Eliminar</button>
      </div>
    </div>`;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('show'));

  overlay.querySelector('#modal-confirm-btn').onclick = () => {
    onConfirm();
    overlay.remove();
  };
}

function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => t.classList.add('show'));
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2000);
}

// ══════════════════════════════════════════
// NAVIGATION
// ══════════════════════════════════════════
function navigate(page) {
  currentPage = page;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const navEl = document.querySelector('[data-page="' + page + '"]');
  if (navEl) navEl.classList.add('active');
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  if (page === 'dashboard') renderDashboard();
  if (page === 'mapa') renderMapa();
  if (page === 'plano') renderPlano();
  if (page === 'checklist') renderChecklist();
  if (page === 'equipas') renderEquipas();
  if (page === 'docs') renderDocs();
  if (page === 'instituicoes') renderInstituicoes();
  if (page === 'users') renderUsers();
}

// ══════════════════════════════════════════
// HELPERS
// ══════════════════════════════════════════
function pct(actual, meta) {
  if (!meta) return 0;
  return Math.round((actual / meta) * 100);
}

function pctColor(p) {
  if (p >= 70) return '#16a34a';
  if (p >= 30) return '#9B1B3C';
  return '#dc2626';
}

function statusBadge(status) {
  if (!status) return '<span class="badge badge-yellow">Sem status</span>';
  const s = status.toLowerCase();
  if (s === 'em curso') return '<span class="badge badge-blue"><span class="dot" style="background:#9B1B3C"></span> Em Curso</span>';
  if (s === 'pendente') return '<span class="badge badge-yellow"><span class="dot-yellow dot"></span> Pendente</span>';
  if (s === 'concluido' || s === 'concluído') return '<span class="badge badge-green"><span class="dot-green dot"></span> Concluido</span>';
  return '<span class="badge badge-yellow">' + status + '</span>';
}

function formatKZ(v) {
  return v.toLocaleString('pt-AO') + ' KZ';
}

function areaColor(area) {
  return AREA_COLORS[area] || '#8C8C8C';
}

function areaTag(area) {
  const c = areaColor(area);
  return '<span class="area-tag" style="background:' + c + '20;color:' + c + '">' + area + '</span>';
}

function actionBtn(icon, title, onclick, cls) {
  // Hide delete buttons for non-permitted users
  if (cls === 'btn-del' && !can('delete')) return '';
  // Hide edit buttons for viewers
  if (!cls && !can('edit')) return '';
  return '<button class="action-btn ' + (cls || '') + '" title="' + title + '" onclick="event.stopPropagation();' + onclick + '">' + icon + '</button>';
}

function addBtnHTML(label, onclick) {
  if (!can('add')) return '';
  return '<button class="btn btn-primary" onclick="' + onclick + '">' + ICONS.plus + ' ' + label + '</button>';
}

function groupBy(arr, key) {
  return arr.reduce(function(acc, item) {
    (acc[item[key]] = acc[item[key]] || []).push(item);
    return acc;
  }, {});
}

// ══════════════════════════════════════════
// DASHBOARD
// ══════════════════════════════════════════
function renderDashboard() {
  const el = document.getElementById('page-dashboard');
  const d = DATA.dashboard;

  const kpiIcons = ['👥','🏢','🤝','📄','🎤','💰','🚛','😊'];

  let kpiHTML = '<div class="kpi-grid">';
  d.forEach(function(item, i) {
    const p = pct(item.actual, item.meta);
    const c = pctColor(p);
    const metaStr = item.unidade === 'KZ' ? formatKZ(item.meta) : (item.meta + (item.unidade || ''));
    const actStr = item.unidade === 'KZ' ? formatKZ(item.actual) : (item.actual + (item.unidade || ''));
    kpiHTML += '\
      <div class="kpi-card" style="cursor:pointer" onclick="editDashboardItem(' + i + ')">\
        <div class="kpi-top">\
          <span class="kpi-label">' + item.metrica + '</span>\
          <span style="font-size:22px">' + kpiIcons[i] + '</span>\
        </div>\
        <div class="kpi-value" style="color:' + c + '">' + actStr + '</div>\
        <div class="kpi-meta">Meta: ' + metaStr + ' &middot; ' + p + '%</div>\
        <div class="kpi-bar"><div class="kpi-bar-fill" style="width:' + p + '%;background:' + c + '"></div></div>\
      </div>';
  });
  kpiHTML += '</div>';

  const totalCheck = DATA.checklist.length;
  const doneCheck = DATA.checklist.filter(function(c) { return c.concluido; }).length;
  const totalFases = DATA.planoTrabalho.length;
  const emCurso = DATA.planoTrabalho.filter(function(f) { return f.status === 'Em Curso'; }).length;
  const equipasAtivas = DATA.equipas.filter(function(e) { return e.estado === 'Em Curso'; }).length;

  let summaryHTML = '\
    <div class="summary-row">\
      <div class="summary-item"><div class="summary-num" style="color:#16a34a">' + doneCheck + '/' + totalCheck + '</div><div class="summary-label">Checklist Concluido</div></div>\
      <div class="summary-item"><div class="summary-num" style="color:#9B1B3C">' + emCurso + '/' + totalFases + '</div><div class="summary-label">Fases em Curso</div></div>\
      <div class="summary-item"><div class="summary-num" style="color:#7A1530">' + equipasAtivas + '/' + DATA.equipas.length + '</div><div class="summary-label">Equipas Activas</div></div>\
      <div class="summary-item"><div class="summary-num" style="color:#B92850">' + Object.keys(groupBy(DATA.mapaGeral, 'area')).length + '</div><div class="summary-label">Areas de Trabalho</div></div>\
    </div>';

  let chartsHTML = '\
    <div class="charts-row">\
      <div class="chart-card">\
        <div class="chart-title">Meta vs. Actual</div>\
        <div class="chart-container"><canvas id="chart-bar"></canvas></div>\
      </div>\
      <div class="chart-card">\
        <div class="chart-title">Checklist por Area</div>\
        <div class="chart-container"><canvas id="chart-doughnut"></canvas></div>\
      </div>\
    </div>';

  el.innerHTML = '\
    <div class="page-header">\
      <div class="page-title">Dashboard</div>\
      <div class="page-desc">Visao geral do progresso do evento &middot; Clique num KPI para editar valores</div>\
    </div>' + kpiHTML + summaryHTML + chartsHTML;

  renderCharts();
}

function editDashboardItem(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const item = DATA.dashboard[i];
  openModal('Editar ' + item.metrica, [
    { key: 'actual', label: 'Valor Actual', type: 'number', value: item.actual },
    { key: 'meta', label: 'Meta', type: 'number', value: item.meta }
  ], function(vals) {
    DATA.dashboard[i].actual = parseFloat(vals.actual) || 0;
    DATA.dashboard[i].meta = parseFloat(vals.meta) || 0;
    saveData();
    renderDashboard();
    updateSidebarStats();
    showToast('KPI actualizado');
  });
}

function renderCharts() {
  const d = DATA.dashboard.filter(function(x) { return x.unidade !== 'KZ' && x.actual > 0; });
  const ctx1 = document.getElementById('chart-bar');
  if (!ctx1) return;

  if (barChart) barChart.destroy();
  barChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: d.map(function(x) { return x.metrica; }),
      datasets: [
        { label: 'Meta', data: d.map(function(x) { return x.meta; }), backgroundColor: 'rgba(155,27,60,.15)', borderColor: '#9B1B3C', borderWidth: 1, borderRadius: 4 },
        { label: 'Actual', data: d.map(function(x) { return x.actual; }), backgroundColor: 'rgba(155,27,60,.45)', borderColor: '#7A1530', borderWidth: 1, borderRadius: 4 }
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { labels: { color: '#6b7280', font: { size: 11 } } } },
      scales: {
        x: { ticks: { color: '#6b7280', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,.06)' } },
        y: { ticks: { color: '#6b7280', font: { size: 10 } }, grid: { color: 'rgba(0,0,0,.06)' } }
      }
    }
  });

  const groups = groupBy(DATA.checklist, 'area');
  const labels = Object.keys(groups);
  const colors = labels.map(function(l) { return areaColor(l); });

  const ctx2 = document.getElementById('chart-doughnut');
  if (doughnutChart) doughnutChart.destroy();
  doughnutChart = new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{ data: labels.map(function(l) { return groups[l].length; }), backgroundColor: colors.map(function(c) { return c + '40'; }), borderColor: colors, borderWidth: 2 }]
    },
    options: {
      responsive: true, maintainAspectRatio: false, cutout: '65%',
      plugins: { legend: { position: 'right', labels: { color: '#6b7280', font: { size: 11 }, padding: 12 } } }
    }
  });
}

// ══════════════════════════════════════════
// MAPA GERAL
// ══════════════════════════════════════════
function renderMapa(filterArea) {
  currentFilter.mapa = filterArea;
  const el = document.getElementById('page-mapa');
  const areas = [];
  DATA.mapaGeral.forEach(function(m) { if (areas.indexOf(m.area) === -1) areas.push(m.area); });

  let filterHTML = '<div class="table-filters">';
  filterHTML += '<button class="filter-btn ' + (!filterArea ? 'active' : '') + '" onclick="renderMapa()">Todos</button>';
  areas.forEach(function(a) {
    filterHTML += '<button class="filter-btn ' + (filterArea === a ? 'active' : '') + '" onclick="renderMapa(\'' + a + '\')">' + a + '</button>';
  });
  filterHTML += '</div>';

  const items = filterArea ? DATA.mapaGeral.filter(function(m) { return m.area === filterArea; }) : DATA.mapaGeral;

  let rows = '';
  items.forEach(function(m) {
    const idx = DATA.mapaGeral.indexOf(m);
    const tags = m.tarefas.split(';').map(function(t) { return '<span class="timeline-tag">' + t.trim() + '</span>'; }).join(' ');
    rows += '<tr>\
      <td>' + areaTag(m.area) + '</td>\
      <td style="font-weight:500">' + m.subarea + '</td>\
      <td>' + tags + '</td>\
      <td>' + (m.responsavel || '<span style="color:var(--text-muted);font-style:italic">—</span>') + '</td>\
      <td>' + (m.prazo || '<span style="color:var(--text-muted);font-style:italic">—</span>') + '</td>\
      <td>' + statusBadge(m.status) + '</td>\
      <td class="actions-cell">\
        ' + actionBtn(ICONS.edit, 'Editar', 'editMapaItem(' + idx + ')') + '\
        ' + actionBtn(ICONS.trash, 'Eliminar', 'deleteMapaItem(' + idx + ')', 'btn-del') + '\
      </td>\
    </tr>';
  });

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Mapa Geral</div>\
        <div class="page-desc">' + DATA.mapaGeral.length + ' sub-areas em ' + areas.length + ' areas de trabalho</div>\
      </div>\
      ' + addBtnHTML('Adicionar', 'addMapaItem()') + '\
    </div>\
    <div class="table-card">\
      <div class="table-header">\
        <span class="table-title">Estrutura do Projecto</span>' + filterHTML + '\
      </div>\
      <table>\
        <thead><tr><th>Area</th><th>Sub-area</th><th>Tarefas</th><th>Responsavel</th><th>Prazo</th><th>Status</th><th style="width:80px"></th></tr></thead>\
        <tbody>' + rows + '</tbody>\
      </table>\
    </div>';
}

function editMapaItem(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const m = DATA.mapaGeral[i];
  openModal('Editar - ' + m.subarea, [
    { key: 'area', label: 'Area', type: 'select', options: AREA_LIST, value: m.area },
    { key: 'subarea', label: 'Sub-area', value: m.subarea },
    { key: 'tarefas', label: 'Tarefas (separar com ;)', type: 'textarea', value: m.tarefas },
    { key: 'responsavel', label: 'Responsavel', value: m.responsavel, placeholder: 'Nome do responsavel' },
    { key: 'prazo', label: 'Prazo', type: 'date', value: m.prazo },
    { key: 'status', label: 'Status', type: 'select', options: ['', ...STATUS_OPTIONS], value: m.status }
  ], function(vals) {
    Object.assign(DATA.mapaGeral[i], vals);
    saveData();
    renderMapa(currentFilter.mapa);
    showToast('Item actualizado');
  });
}

function addMapaItem() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar ao Mapa', [
    { key: 'area', label: 'Area', type: 'select', options: AREA_LIST, value: AREA_LIST[0] },
    { key: 'subarea', label: 'Sub-area', placeholder: 'Nome da sub-area' },
    { key: 'tarefas', label: 'Tarefas (separar com ;)', type: 'textarea' },
    { key: 'responsavel', label: 'Responsavel', placeholder: 'Nome do responsavel' },
    { key: 'prazo', label: 'Prazo', type: 'date' },
    { key: 'status', label: 'Status', type: 'select', options: ['', ...STATUS_OPTIONS], value: '' }
  ], function(vals) {
    if (!vals.subarea.trim()) return showToast('Sub-area obrigatoria');
    DATA.mapaGeral.push(vals);
    saveData();
    renderMapa(currentFilter.mapa);
    showToast('Item adicionado');
  });
}

function deleteMapaItem(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar "' + DATA.mapaGeral[i].subarea + '" do mapa?', function() {
    DATA.mapaGeral.splice(i, 1);
    saveData();
    renderMapa(currentFilter.mapa);
    showToast('Item eliminado');
  });
}

// ══════════════════════════════════════════
// PLANO DE TRABALHO
// ══════════════════════════════════════════
function renderPlano() {
  const el = document.getElementById('page-plano');

  let html = '<div class="timeline">';
  DATA.planoTrabalho.forEach(function(f, i) {
    const isActive = f.status === 'Em Curso';
    const isDone = f.status === 'Concluido';
    const dotColor = isDone ? '#16a34a' : (isActive ? '#9B1B3C' : '#e5e7eb');
    const borderStyle = isDone ? 'border-color:#16a34a' : (isActive ? 'border-color:#9B1B3C' : '');
    const tags = f.actividades.split(';').map(function(a) { return '<span class="timeline-tag">' + a.trim() + '</span>'; }).join('');

    html += '\
      <div class="timeline-item" style="' + borderStyle + '">\
        <div class="timeline-dot" style="background:' + dotColor + '"></div>\
        <div style="display:flex;justify-content:space-between;align-items:flex-start">\
          <div class="timeline-fase">' + f.fase + '</div>\
          <div class="actions-cell">\
            ' + actionBtn(ICONS.edit, 'Editar', 'editPlanoItem(' + i + ')') + '\
            ' + actionBtn(ICONS.trash, 'Eliminar', 'deletePlanoItem(' + i + ')', 'btn-del') + '\
          </div>\
        </div>\
        <div class="timeline-desc">' + f.descricao + '</div>\
        <div class="timeline-acts">' + tags + '</div>\
        <div class="timeline-footer">\
          <span>' + ICONS.user + ' ' + f.responsavel + '</span>\
          <span>' + ICONS.clock + ' ' + f.prazo + '</span>\
          ' + statusBadge(f.status) + '\
          <div class="status-switcher">\
            ' + statusButtons(i, f.status, 'changePlanoStatus') + '\
          </div>\
        </div>\
      </div>';
  });
  html += '</div>';

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Plano de Trabalho</div>\
        <div class="page-desc">' + DATA.planoTrabalho.length + ' fases do projecto</div>\
      </div>\
      ' + addBtnHTML('Adicionar Fase', 'addPlanoItem()') + '\
    </div>' + html;
}

function statusButtons(idx, current, fnName) {
  if (!can('edit')) return '';
  return STATUS_OPTIONS.map(function(s) {
    const active = current === s;
    const cls = active ? 'status-btn active' : 'status-btn';
    return '<button class="' + cls + '" onclick="event.stopPropagation();' + fnName + '(' + idx + ',\'' + s + '\')">' + s + '</button>';
  }).join('');
}

function changePlanoStatus(i, status) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  DATA.planoTrabalho[i].status = status;
  saveData();
  renderPlano();
  updateSidebarStats();
  showToast('Status actualizado');
}

function editPlanoItem(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const f = DATA.planoTrabalho[i];
  openModal('Editar - ' + f.fase, [
    { key: 'fase', label: 'Nome da Fase', value: f.fase },
    { key: 'descricao', label: 'Descricao', value: f.descricao },
    { key: 'actividades', label: 'Actividades (separar com ;)', type: 'textarea', value: f.actividades },
    { key: 'responsavel', label: 'Responsavel', value: f.responsavel },
    { key: 'prazo', label: 'Prazo', value: f.prazo },
    { key: 'status', label: 'Status', type: 'select', options: STATUS_OPTIONS, value: f.status }
  ], function(vals) {
    Object.assign(DATA.planoTrabalho[i], vals);
    saveData();
    renderPlano();
    updateSidebarStats();
    showToast('Fase actualizada');
  });
}

function addPlanoItem() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar Fase', [
    { key: 'fase', label: 'Nome da Fase', placeholder: 'Ex: 8. Nova Fase' },
    { key: 'descricao', label: 'Descricao', placeholder: 'Breve descricao' },
    { key: 'actividades', label: 'Actividades (separar com ;)', type: 'textarea' },
    { key: 'responsavel', label: 'Responsavel' },
    { key: 'prazo', label: 'Prazo', placeholder: 'Ex: 2026-02-15' },
    { key: 'status', label: 'Status', type: 'select', options: STATUS_OPTIONS, value: 'Pendente' }
  ], function(vals) {
    if (!vals.fase.trim()) return showToast('Nome da fase obrigatorio');
    DATA.planoTrabalho.push(vals);
    saveData();
    renderPlano();
    showToast('Fase adicionada');
  });
}

function deletePlanoItem(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar fase "' + DATA.planoTrabalho[i].fase + '"?', function() {
    DATA.planoTrabalho.splice(i, 1);
    saveData();
    renderPlano();
    showToast('Fase eliminada');
  });
}

// ══════════════════════════════════════════
// CHECKLIST
// ══════════════════════════════════════════
function renderChecklist(filter) {
  currentFilter.checklist = filter;
  const el = document.getElementById('page-checklist');
  const groups = groupBy(DATA.checklist, 'area');
  const areas = Object.keys(groups);

  let filterHTML = '<div class="table-filters">';
  filterHTML += '<button class="filter-btn ' + (!filter ? 'active' : '') + '" onclick="renderChecklist()">Todos</button>';
  filterHTML += '<button class="filter-btn ' + (filter === 'pendente' ? 'active' : '') + '" onclick="renderChecklist(\'pendente\')">Pendentes</button>';
  filterHTML += '<button class="filter-btn ' + (filter === 'concluido' ? 'active' : '') + '" onclick="renderChecklist(\'concluido\')">Concluidos</button>';
  filterHTML += '</div>';

  const totalDone = DATA.checklist.filter(function(c) { return c.concluido; }).length;
  const totalAll = DATA.checklist.length;

  let groupsHTML = '';
  areas.forEach(function(area) {
    const items = groups[area];
    let itemsHTML = '';
    let shown = 0;

    items.forEach(function(item) {
      const gi = DATA.checklist.indexOf(item);
      const done = item.concluido;
      if (filter === 'pendente' && done) return;
      if (filter === 'concluido' && !done) return;
      shown++;

      itemsHTML += '\
        <div class="check-item ' + (done ? 'check-done' : '') + '">\
          <div class="check-box ' + (done ? 'checked' : '') + '" onclick="toggleCheck(' + gi + ')"></div>\
          <div class="check-info" onclick="toggleCheck(' + gi + ')">\
            <h4>' + item.item + '</h4>\
            <p>' + item.detalhe + '</p>\
          </div>\
          <div class="check-meta">\
            <span>' + item.responsavel + '</span>\
            <span>' + item.prazo + '</span>\
          </div>\
          <div class="actions-cell">\
            ' + actionBtn(ICONS.edit, 'Editar', 'editCheckItem(' + gi + ')') + '\
            ' + actionBtn(ICONS.trash, 'Eliminar', 'deleteCheckItem(' + gi + ')', 'btn-del') + '\
          </div>\
        </div>';
    });

    if (shown > 0) {
      const doneInGroup = items.filter(function(item) { return item.concluido; }).length;
      groupsHTML += '\
        <div class="check-group">\
          <div class="check-group-title">\
            ' + areaTag(area) + ' ' + area + '\
            <span class="check-progress" style="color:' + (doneInGroup === items.length ? 'var(--green)' : 'var(--text-muted)') + '">' + doneInGroup + '/' + items.length + '</span>\
          </div>' + itemsHTML + '</div>';
    }
  });

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Checklist Geral</div>\
        <div class="page-desc">' + totalDone + ' de ' + totalAll + ' itens concluidos (' + pct(totalDone, totalAll) + '%)</div>\
      </div>\
      ' + addBtnHTML('Adicionar Item', 'addCheckItem()') + '\
    </div>\
    <div class="table-card">\
      <div class="table-header">\
        <span class="table-title">Items de Verificacao</span>' + filterHTML + '\
      </div>' + groupsHTML + '</div>';

  const badge = document.getElementById('check-badge');
  if (badge) badge.textContent = totalAll - totalDone;
}

function toggleCheck(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  DATA.checklist[i].concluido = !DATA.checklist[i].concluido;
  saveData();
  renderChecklist(currentFilter.checklist);
  updateSidebarStats();
}

function editCheckItem(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const item = DATA.checklist[i];
  openModal('Editar - ' + item.item, [
    { key: 'area', label: 'Area', type: 'select', options: CHECKLIST_AREAS, value: item.area },
    { key: 'item', label: 'Item', value: item.item },
    { key: 'detalhe', label: 'Detalhe', value: item.detalhe },
    { key: 'responsavel', label: 'Responsavel', value: item.responsavel },
    { key: 'prazo', label: 'Prazo', value: item.prazo }
  ], function(vals) {
    Object.assign(DATA.checklist[i], vals);
    saveData();
    renderChecklist(currentFilter.checklist);
    showToast('Item actualizado');
  });
}

function addCheckItem() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar Item ao Checklist', [
    { key: 'area', label: 'Area', type: 'select', options: CHECKLIST_AREAS, value: CHECKLIST_AREAS[0] },
    { key: 'item', label: 'Item', placeholder: 'Nome do item' },
    { key: 'detalhe', label: 'Detalhe', placeholder: 'Descricao detalhada' },
    { key: 'responsavel', label: 'Responsavel', placeholder: 'Quem e responsavel' },
    { key: 'prazo', label: 'Prazo', placeholder: 'Ex: 2026-01-15' }
  ], function(vals) {
    if (!vals.item.trim()) return showToast('Nome do item obrigatorio');
    vals.concluido = false;
    DATA.checklist.push(vals);
    saveData();
    renderChecklist(currentFilter.checklist);
    updateSidebarStats();
    showToast('Item adicionado');
  });
}

function deleteCheckItem(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar "' + DATA.checklist[i].item + '" do checklist?', function() {
    DATA.checklist.splice(i, 1);
    saveData();
    renderChecklist(currentFilter.checklist);
    updateSidebarStats();
    showToast('Item eliminado');
  });
}

// ══════════════════════════════════════════
// EQUIPAS
// ══════════════════════════════════════════
function renderEquipas() {
  const el = document.getElementById('page-equipas');

  let html = '<div class="team-grid">';
  DATA.equipas.forEach(function(eq, i) {
    const c = TEAM_COLORS[i % TEAM_COLORS.length];
    const initials = eq.equipa.substring(0, 2).toUpperCase();

    html += '\
      <div class="team-card">\
        <div class="team-top">\
          <div class="team-avatar" style="background:' + c + '30;color:' + c + '">' + initials + '</div>\
          <div>\
            <div class="team-name">' + eq.equipa + '</div>\
            <div class="team-resp">' + eq.responsavel + '</div>\
          </div>\
          <div style="margin-left:auto;display:flex;align-items:center;gap:8px">\
            ' + statusBadge(eq.estado) + '\
            ' + actionBtn(ICONS.edit, 'Editar', 'editEquipa(' + i + ')') + '\
            ' + actionBtn(ICONS.trash, 'Eliminar', 'deleteEquipa(' + i + ')', 'btn-del') + '\
          </div>\
        </div>\
        <div class="team-tasks">' + eq.tarefas + '</div>\
        <div style="font-size:11px;color:var(--text-muted);margin-bottom:12px">' + eq.obs + '</div>\
        <div class="team-footer">\
          <span style="color:var(--text-muted)">' + ICONS.clock + ' ' + eq.prazo + '</span>\
          <div class="status-switcher">' + statusButtons(i, eq.estado, 'changeEquipaStatus') + '</div>\
        </div>\
      </div>';
  });
  html += '</div>';

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Controlo de Equipas</div>\
        <div class="page-desc">' + DATA.equipas.length + ' equipas operacionais</div>\
      </div>\
      ' + addBtnHTML('Adicionar Equipa', 'addEquipa()') + '\
    </div>' + html;
}

function changeEquipaStatus(i, status) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  DATA.equipas[i].estado = status;
  saveData();
  renderEquipas();
  showToast('Status da equipa actualizado');
}

function editEquipa(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const eq = DATA.equipas[i];
  openModal('Editar - ' + eq.equipa, [
    { key: 'equipa', label: 'Nome da Equipa', value: eq.equipa },
    { key: 'responsavel', label: 'Responsavel', value: eq.responsavel, placeholder: 'Nome do coordenador' },
    { key: 'tarefas', label: 'Tarefas', type: 'textarea', value: eq.tarefas },
    { key: 'prazo', label: 'Prazo', value: eq.prazo },
    { key: 'estado', label: 'Estado', type: 'select', options: STATUS_OPTIONS, value: eq.estado },
    { key: 'obs', label: 'Observacoes', type: 'textarea', value: eq.obs }
  ], function(vals) {
    Object.assign(DATA.equipas[i], vals);
    saveData();
    renderEquipas();
    showToast('Equipa actualizada');
  });
}

function addEquipa() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar Equipa', [
    { key: 'equipa', label: 'Nome da Equipa', placeholder: 'Ex: Marketing Digital' },
    { key: 'responsavel', label: 'Responsavel', placeholder: 'Nome do coordenador' },
    { key: 'tarefas', label: 'Tarefas', type: 'textarea', placeholder: 'Lista de tarefas' },
    { key: 'prazo', label: 'Prazo', placeholder: 'Ex: 2026-02-15' },
    { key: 'estado', label: 'Estado', type: 'select', options: STATUS_OPTIONS, value: 'Pendente' },
    { key: 'obs', label: 'Observacoes', type: 'textarea' }
  ], function(vals) {
    if (!vals.equipa.trim()) return showToast('Nome da equipa obrigatorio');
    DATA.equipas.push(vals);
    saveData();
    renderEquipas();
    showToast('Equipa adicionada');
  });
}

function deleteEquipa(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar equipa "' + DATA.equipas[i].equipa + '"?', function() {
    DATA.equipas.splice(i, 1);
    saveData();
    renderEquipas();
    showToast('Equipa eliminada');
  });
}

// ══════════════════════════════════════════
// INSTITUICAO & PATROCINIO
// ══════════════════════════════════════════
function renderInstituicoes() {
  const el = document.getElementById('page-instituicoes');

  let html = '<div class="team-grid">';
  DATA.instituicoes.forEach(function(inst, i) {
    const c = TEAM_COLORS[i % TEAM_COLORS.length];
    const initials = inst.nomeInstituicao.substring(0, 2).toUpperCase();

    html += '\
      <div class="team-card">\
        <div class="team-top">\
          <div class="team-avatar" style="background:' + c + '30;color:' + c + '">' + initials + '</div>\
          <div style="flex:1">\
            <div class="team-name">' + inst.nomeInstituicao + '</div>\
            <div class="team-resp">' + inst.responsavel + '</div>\
          </div>\
          <div style="display:flex;align-items:center;gap:8px">\
            ' + actionBtn(ICONS.edit, 'Editar', 'editInstituicao(' + i + ')') + '\
            ' + actionBtn(ICONS.trash, 'Eliminar', 'deleteInstituicao(' + i + ')', 'btn-del') + '\
          </div>\
        </div>\
        <div style="margin-top:12px;font-size:12px;color:var(--text-muted);display:grid;gap:6px">\
          <div><strong>Contacto:</strong> ' + inst.contacto + '</div>\
          <div><strong>E-mail:</strong> ' + inst.email + '</div>\
          <div><strong>Tipo de Parceria:</strong> ' + inst.tipoParceria + '</div>\
          <div><strong>Representante Indicado:</strong> ' + inst.representanteIndicado + '</div>\
          <div><strong>Tarefas:</strong> ' + inst.tarefas + '</div>\
          <div><strong>Recomendacoes:</strong> ' + inst.recomendacoes + '</div>\
          <div><strong>Painel:</strong> ' + inst.painel + '</div>\
          <div><strong>Datas:</strong> ' + inst.datas + '</div>\
        </div>\
        <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);font-size:11px;color:var(--text-muted)">\
          <div><strong>Biografia:</strong> ' + inst.biografia + '</div>\
        </div>\
      </div>';
  });
  html += '</div>';

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Instituicao & Patrocinio</div>\
        <div class="page-desc">' + DATA.instituicoes.length + ' instituicoes e patrocinadores</div>\
      </div>\
      ' + addBtnHTML('Adicionar Instituicao', 'addInstituicao()') + '\
    </div>' + html;
}

function editInstituicao(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const inst = DATA.instituicoes[i];
  openModal('Editar - ' + inst.nomeInstituicao, [
    { key: 'nomeInstituicao', label: 'Nome da Instituicao', value: inst.nomeInstituicao },
    { key: 'responsavel', label: 'Responsavel', value: inst.responsavel },
    { key: 'contacto', label: 'Contacto', value: inst.contacto },
    { key: 'email', label: 'E-mail', type: 'email', value: inst.email },
    { key: 'tipoParceria', label: 'Tipo de Parceria', value: inst.tipoParceria },
    { key: 'representanteIndicado', label: 'Representante Indicado', value: inst.representanteIndicado },
    { key: 'tarefas', label: 'Tarefas', type: 'textarea', value: inst.tarefas },
    { key: 'recomendacoes', label: 'Recomendacoes', type: 'textarea', value: inst.recomendacoes },
    { key: 'logotipo', label: 'Logotipo (caminho)', value: inst.logotipo },
    { key: 'biografia', label: 'Biografia', type: 'textarea', value: inst.biografia },
    { key: 'painel', label: 'Painel', value: inst.painel },
    { key: 'fotografia', label: 'Fotografia (caminho)', value: inst.fotografia },
    { key: 'datas', label: 'Datas', value: inst.datas }
  ], function(vals) {
    Object.assign(DATA.instituicoes[i], vals);
    saveData();
    renderInstituicoes();
    showToast('Instituicao actualizada');
  });
}

function addInstituicao() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar Instituicao', [
    { key: 'nomeInstituicao', label: 'Nome da Instituicao', placeholder: 'Ex: Ministerio da Economia' },
    { key: 'responsavel', label: 'Responsavel', placeholder: 'Nome do responsavel' },
    { key: 'contacto', label: 'Contacto', placeholder: '+244 900 000 000' },
    { key: 'email', label: 'E-mail', type: 'email', placeholder: 'exemplo@instituicao.com' },
    { key: 'tipoParceria', label: 'Tipo de Parceria', placeholder: 'Ex: Patrocinador Principal' },
    { key: 'representanteIndicado', label: 'Representante Indicado', placeholder: 'Nome do representante' },
    { key: 'tarefas', label: 'Tarefas', type: 'textarea', placeholder: 'Lista de tarefas' },
    { key: 'recomendacoes', label: 'Recomendacoes', type: 'textarea', placeholder: 'Recomendacoes relevantes' },
    { key: 'logotipo', label: 'Logotipo (caminho)', placeholder: '/logos/exemplo.png' },
    { key: 'biografia', label: 'Biografia', type: 'textarea', placeholder: 'Descricao da instituicao' },
    { key: 'painel', label: 'Painel', placeholder: 'Painel onde participa' },
    { key: 'fotografia', label: 'Fotografia (caminho)', placeholder: '/fotos/exemplo.jpg' },
    { key: 'datas', label: 'Datas', placeholder: 'Ex: 2025-12-01 a 2026-02-15' }
  ], function(vals) {
    if (!vals.nomeInstituicao.trim()) return showToast('Nome da instituicao obrigatorio');
    DATA.instituicoes.push(vals);
    saveData();
    renderInstituicoes();
    showToast('Instituicao adicionada');
  });
}

function deleteInstituicao(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar instituicao "' + DATA.instituicoes[i].nomeInstituicao + '"?', function() {
    DATA.instituicoes.splice(i, 1);
    saveData();
    renderInstituicoes();
    showToast('Instituicao eliminada');
  });
}

// ══════════════════════════════════════════
// DOCUMENTOS
// ══════════════════════════════════════════
function renderDocs() {
  const el = document.getElementById('page-docs');

  let html = '';
  DATA.anexos.forEach(function(doc, i) {
    html += '\
      <div class="doc-item">\
        <div class="doc-icon">' + ICONS.pdf + '</div>\
        <div style="flex:1">\
          <div class="doc-name">' + doc.nome + '</div>\
          <div class="doc-path">' + doc.caminho + '</div>\
        </div>\
        <div class="actions-cell">\
          ' + actionBtn(ICONS.edit, 'Editar', 'editDoc(' + i + ')') + '\
          ' + actionBtn(ICONS.trash, 'Eliminar', 'deleteDoc(' + i + ')', 'btn-del') + '\
        </div>\
      </div>';
  });

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Documentos</div>\
        <div class="page-desc">' + DATA.anexos.length + ' ficheiros anexos</div>\
      </div>\
      ' + addBtnHTML('Adicionar Documento', 'addDoc()') + '\
    </div>' + html;
}

function editDoc(i) {
  if (!can('edit')) return showToast('Sem permissao para editar');
  const doc = DATA.anexos[i];
  openModal('Editar Documento', [
    { key: 'nome', label: 'Nome do Ficheiro', value: doc.nome },
    { key: 'caminho', label: 'Caminho / URL', value: doc.caminho }
  ], function(vals) {
    Object.assign(DATA.anexos[i], vals);
    saveData();
    renderDocs();
    showToast('Documento actualizado');
  });
}

function addDoc() {
  if (!can('add')) return showToast('Sem permissao para adicionar');
  openModal('Adicionar Documento', [
    { key: 'nome', label: 'Nome do Ficheiro', placeholder: 'Ex: Proposta_Comercial.pdf' },
    { key: 'caminho', label: 'Caminho / URL', placeholder: 'Ex: /docs/proposta.pdf' }
  ], function(vals) {
    if (!vals.nome.trim()) return showToast('Nome obrigatorio');
    DATA.anexos.push(vals);
    saveData();
    renderDocs();
    showToast('Documento adicionado');
  });
}

function deleteDoc(i) {
  if (!can('delete')) return showToast('Sem permissao para eliminar');
  confirmDelete('Eliminar "' + DATA.anexos[i].nome + '"?', function() {
    DATA.anexos.splice(i, 1);
    saveData();
    renderDocs();
    showToast('Documento eliminado');
  });
}

// ══════════════════════════════════════════
// SIDEBAR STATS
// ══════════════════════════════════════════
function updateSidebarStats() {
  const done = DATA.checklist.filter(function(c) { return c.concluido; }).length;
  const total = DATA.checklist.length;
  const p = pct(done, total);
  const el = document.getElementById('sidebar-progress');
  if (el) {
    el.innerHTML = '\
      <div class="sidebar-stat-label">Progresso Geral</div>\
      <div class="sidebar-stat-value">' + p + '%</div>\
      <div class="sidebar-stat-bar"><div class="sidebar-stat-fill" style="width:' + p + '%;background:' + pctColor(p) + '"></div></div>\
      <div class="sidebar-stat-label" style="font-size:10px">' + done + ' de ' + total + ' tarefas</div>';
  }
  const badge = document.getElementById('check-badge');
  if (badge) badge.textContent = total - done;
}

// ══════════════════════════════════════════
// USERS MANAGEMENT (admin only)
// ══════════════════════════════════════════
function renderUsers() {
  if (!can('manageUsers')) {
    document.getElementById('page-users').innerHTML = '<div class="page-header"><div class="page-title">Acesso Negado</div><div class="page-desc">Apenas administradores podem gerir utilizadores.</div></div>';
    return;
  }

  var el = document.getElementById('page-users');
  var users = getUsers();

  var rows = '';
  users.forEach(function(u, i) {
    var roleClass = 'role-' + u.role;
    var roleLabel = ROLE_LABELS[u.role] || u.role;
    var isSelf = currentUser && currentUser.username === u.username;

    rows += '<tr>\
      <td style="font-weight:500">' + u.nome + '</td>\
      <td><code style="font-size:12px;background:var(--bg);padding:2px 8px;border-radius:4px">' + u.username + '</code></td>\
      <td><code style="font-size:12px;background:var(--bg);padding:2px 8px;border-radius:4px">' + u.password.replace(/./g, '*') + '</code></td>\
      <td><span class="user-role-badge ' + roleClass + '">' + roleLabel + '</span></td>\
      <td class="actions-cell">\
        ' + actionBtn(ICONS.edit, 'Editar', 'editUser(' + i + ')') + '\
        ' + (isSelf ? '' : actionBtn(ICONS.trash, 'Eliminar', 'deleteUser(' + i + ')', 'btn-del')) + '\
      </td>\
    </tr>';
  });

  el.innerHTML = '\
    <div class="page-header" style="display:flex;justify-content:space-between;align-items:flex-start">\
      <div>\
        <div class="page-title">Gestao de Utilizadores</div>\
        <div class="page-desc">' + users.length + ' utilizadores registados</div>\
      </div>\
      <button class="btn btn-primary" onclick="addUser()">' + ICONS.plus + ' Adicionar Utilizador</button>\
    </div>\
    <div class="table-card">\
      <div class="table-header"><span class="table-title">Utilizadores</span></div>\
      <table>\
        <thead><tr><th>Nome</th><th>Utilizador</th><th>Senha</th><th>Perfil</th><th style="width:80px"></th></tr></thead>\
        <tbody>' + rows + '</tbody>\
      </table>\
    </div>\
    <div class="table-card" style="padding:20px">\
      <div class="chart-title" style="margin-bottom:12px">Permissoes por Perfil</div>\
      <table>\
        <thead><tr><th>Accao</th><th>Admin</th><th>Coordenador</th><th>Visualizador</th></tr></thead>\
        <tbody>\
          <tr><td>Visualizar dados</td><td>Sim</td><td>Sim</td><td>Sim</td></tr>\
          <tr><td>Editar dados</td><td>Sim</td><td>Sim</td><td style="color:var(--red)">Nao</td></tr>\
          <tr><td>Adicionar items</td><td>Sim</td><td>Sim</td><td style="color:var(--red)">Nao</td></tr>\
          <tr><td>Eliminar items</td><td>Sim</td><td style="color:var(--red)">Nao</td><td style="color:var(--red)">Nao</td></tr>\
          <tr><td>Gerir utilizadores</td><td>Sim</td><td style="color:var(--red)">Nao</td><td style="color:var(--red)">Nao</td></tr>\
          <tr><td>Repor dados originais</td><td>Sim</td><td style="color:var(--red)">Nao</td><td style="color:var(--red)">Nao</td></tr>\
        </tbody>\
      </table>\
    </div>';
}

function editUser(i) {
  if (!can('manageUsers')) return;
  var users = getUsers();
  var u = users[i];
  openModal('Editar Utilizador - ' + u.nome, [
    { key: 'nome', label: 'Nome Completo', value: u.nome },
    { key: 'username', label: 'Utilizador (login)', value: u.username },
    { key: 'password', label: 'Senha', value: u.password },
    { key: 'role', label: 'Perfil', type: 'select', options: ['admin', 'coord', 'viewer'], value: u.role }
  ], function(vals) {
    if (!vals.nome.trim() || !vals.username.trim() || !vals.password.trim()) return showToast('Preencha todos os campos');
    // Check duplicate username
    for (var j = 0; j < users.length; j++) {
      if (j !== i && users[j].username === vals.username) return showToast('Utilizador ja existe');
    }
    users[i] = vals;
    saveUsers(users);
    // Update current session if editing self
    if (currentUser.username === u.username) {
      currentUser = vals;
      localStorage.setItem(SESSION_KEY, JSON.stringify({ username: vals.username, role: vals.role, nome: vals.nome }));
      showApp();
    }
    renderUsers();
    showToast('Utilizador actualizado');
  });
}

function addUser() {
  if (!can('manageUsers')) return;
  openModal('Adicionar Utilizador', [
    { key: 'nome', label: 'Nome Completo', placeholder: 'Ex: Maria Silva' },
    { key: 'username', label: 'Utilizador (login)', placeholder: 'Ex: maria' },
    { key: 'password', label: 'Senha', placeholder: 'Min. 4 caracteres' },
    { key: 'role', label: 'Perfil', type: 'select', options: ['admin', 'coord', 'viewer'], value: 'viewer' }
  ], function(vals) {
    if (!vals.nome.trim() || !vals.username.trim() || !vals.password.trim()) return showToast('Preencha todos os campos');
    if (vals.password.length < 4) return showToast('Senha deve ter pelo menos 4 caracteres');
    var users = getUsers();
    for (var j = 0; j < users.length; j++) {
      if (users[j].username === vals.username) return showToast('Utilizador ja existe');
    }
    users.push(vals);
    saveUsers(users);
    renderUsers();
    showToast('Utilizador adicionado');
  });
}

function deleteUser(i) {
  if (!can('manageUsers')) return;
  var users = getUsers();
  if (currentUser.username === users[i].username) return showToast('Nao pode eliminar a propria conta');
  confirmDelete('Eliminar utilizador "' + users[i].nome + '"?', function() {
    users.splice(i, 1);
    saveUsers(users);
    renderUsers();
    showToast('Utilizador eliminado');
  });
}

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  if (checkSession()) {
    showApp();
  } else {
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('app-main').style.display = 'none';
    document.getElementById('login-user').focus();
  }
});
