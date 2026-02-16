// ============================================
// VARIABLES GLOBALES Y CONFIGURACIÓN
// ============================================
const CONFIG = {
    splitTierMode: false,
    topBackgrounds: true,
    animationsEnabled: true,
    performanceMode: true,
    playersPerPage: 30,
    useRAF: true
};

const PLAYERS_JSON_URL = 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/players.json';
const CHEATERLIST_JSON_URL = 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/cheaterlist.json';
const BLACKLIST_JSON_URL = 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/blacklist.json';
const STAFF_JSON_URL = 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/staff.json';

const rankBelts = {
    1: 'https://pvptiers.com/icons/leafs/rank1.png',
    2: 'https://pvptiers.com/icons/leafs/rank2.png',
    3: 'https://pvptiers.com/icons/leafs/rank3.png'
};

const roleIcons = {
    Owner: 'https://images-ext-1.discordapp.net/external/O6XBQTzS_mqDb5VvEuLSYcvWbqqapgMiSQOu_2zXuuo/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1390818426339201044.webp?format=webp&width=76&height=86',
    Manager: 'https://images-ext-1.discordapp.net/external/yPVZJoqg75y_MPqPstrNHizH8oBUHgTppm2Ieq84L7k/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103384033792020.webp?format=webp&width=83&height=86',
    Admin: 'https://images-ext-1.discordapp.net/external/jwIQozKPWnx-vQODBIQ4fXjGJMGr4FmESlcaEo3FgEc/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103380300861490.webp?format=webp&width=83&height=86',
    "Discord Mod": 'https://images-ext-1.discordapp.net/external/-q_KHB1ctJFRxENs1r6Vg-TCgU-QftW2nGjg6ba79Pg/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103385007001701.webp?format=webp&width=70&height=86',
    "Discord Helper": 'https://cdn.discordapp.com/emojis/1373854824738590760.webp?size=96',
    "Head Tester": 'https://cdn.discordapp.com/emojis/1404282239570808903.webp?size=96',
    "Senior Tester": 'https://images-ext-1.discordapp.net/external/nvrdl6R0LIc7BFp_n_PkQVDRrZBchFoY1mJ4bV1TIJs/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103375758688256.webp?format=webp&width=86&height=86',
    "Verified Tester": 'https://images-ext-1.discordapp.net/external/25nU9_dcsC7OvOi8Tr6hCJXtmixScFxp5Vqc49KPTEI/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103379420057611.webp?format=webp&width=86&height=86'
};

const TIER_POINTS = {
    LT5: 1, HT5: 2, LT4: 3, HT4: 4, LT3: 6, HT3: 10, LT2: 20, HT2: 30, LT1: 45, HT1: 60
};

const TITLE_RANKS = [
    { min: 0, max: 4, title: 'ᴄɪᴇʀᴠᴏ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/ciervo.png' },
    { min: 5, max: 9, title: 'ᴀᴘʀᴇɴᴅɪᴢ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/aprendiz.png' },
    { min: 10, max: 19, title: 'ɢᴜᴇʀʀᴇʀᴏ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/guerrero.png' },
    { min: 20, max: 29, title: 'ᴄᴀᴍᴘᴇᴏɴ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/campeon.png' },
    { min: 30, max: 49, title: 'ʜᴇʀᴏᴇ ᴇᴘɪᴄᴏ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/heroe_epico.png' },
    { min: 50, max: Infinity, title: 'ʟᴜɴᴀʀ ᴅᴇɪᴛʏ', icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/lunar_deidad.png' }
];

const SPECIAL_RANKS = {
    owner: { name: 'ᴏᴡɴᴇʀ', icon: 'https://images-ext-1.discordapp.net/external/O6XBQTzS_mqDb5VvEuLSYcvWbqqapgMiSQOu_2zXuuo/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1390818426339201044.webp', users: ['Arzkhz'] },
    head_tester: { name: 'ʜᴇᴀᴅ ᴛᴇꜱᴛᴇʀ', icon: 'https://cdn.discordapp.com/emojis/1404282239570808903.webp', users: ['IdeasOrejas'] },
    senior_tester: { name: 'ꜱᴇɴɪᴏʀ ᴛᴇꜱᴛᴇʀ', icon: 'https://images-ext-1.discordapp.net/external/nvrdl6R0LIc7BFp_n_PkQVDRrZBchFoY1mJ4bV1TIJs/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103375758688256.webp', users: ['cl0wnyy', 'kjkjkjkjasdasdas', 'Mxorlyy', 'HolyNexx'] },
    verified_tester: { name: 'ᴠᴇʀɪꜰɪᴇᴅ ᴛᴇꜱᴛᴇʀ', icon: 'https://images-ext-1.discordapp.net/external/25nU9_dcsC7OvOi8Tr6hCJXtmixScFxp5Vqc49KPTEI/%3Fsize%3D96/https/cdn.discordapp.com/emojis/1384103379420057611.webp', users: ['X_FanDeAleswq_X', 'i9qe', 'Iufed', 'Desbaneadx_', 'iEastKing', 'xExho', 'sNowTry_', 'MalbxroRojo', 'wxlz_'] },
    discord_helper: { name: 'ᴅɪꜱᴄᴏʀᴅ ʜᴇʟᴘᴇʀ', icon: 'https://cdn.discordapp.com/emojis/1373854824738590760.webp', users: ['LuisSigmaBoyFa', 'wxlz_', 'ImMayy', 'elhakki', 'zAlexander666'] }
};

// ============================================
// VARIABLES DE ESTADO
// ============================================
let players = [];
let cheaterlist = [];
let blacklist = [];
let staff = [];
let filteredPlayers = [];
let currentDisplayMode = 'all';
let currentPage = 1;
let lastScrollTop = 0;
let isScrolling = false;
let playerViews = {};

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================
function loadViewsFromStorage() {
    try {
        const stored = localStorage.getItem('moonTierlist_views');
        playerViews = stored ? JSON.parse(stored) : {};
    } catch (error) {
        console.error('Error cargando vistas:', error);
        playerViews = {};
    }
}

function saveViewsToStorage() {
    try {
        localStorage.setItem('moonTierlist_views', JSON.stringify(playerViews));
    } catch (error) {
        console.error('Error guardando vistas:', error);
    }
}

function incrementPlayerViews(nick) {
    if (!nick) return 0;
    if (!playerViews[nick]) playerViews[nick] = 0;
    playerViews[nick] += 1;
    saveViewsToStorage();
    return playerViews[nick];
}

function getPlayerViews(nick) {
    return playerViews[nick] || 0;
}

function smoothAnimation(element, property, targetValue, duration = 300) {
    if (!CONFIG.useRAF || !CONFIG.animationsEnabled) {
        element.style[property] = targetValue;
        return;
    }
    const startValue = parseFloat(getComputedStyle(element)[property]) || 0;
    const startTime = performance.now();
    function animate(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeOutCubic(progress);
        const currentValue = startValue + (targetValue - startValue) * eased;
        element.style[property] = currentValue + (property === 'opacity' ? '' : 'px');
        if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function easeOutCubic(x) {
    return 1 - Math.pow(1 - x, 3);
}

function updateActiveCategory(clickedElement) {
    document.querySelectorAll('.category-wrapper').forEach(cat => cat.classList.remove('active'));
    if (clickedElement) clickedElement.classList.add('active');
    else {
        let firstCat = document.querySelector('.category-wrapper');
        if (firstCat) firstCat.classList.add('active');
    }
}

function getSpecialRank(nick) {
    if (!nick) return null;
    const lowerNick = nick.toLowerCase().trim();
    for (const [key, rank] of Object.entries(SPECIAL_RANKS)) {
        if (rank.users.some(user => user.toLowerCase().trim() === lowerNick)) {
            return { key: key, name: rank.name, icon: rank.icon };
        }
    }
    return { key: 'member', name: 'ᴜꜱᴜᴀʀɪᴏ', icon: 'https://cdn.discordapp.com/emojis/1367510228605866104.webp?size=96' };
}

function lockScroll() {
    document.body.classList.add('modal-open');
    lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
}

function unlockScroll() {
    document.body.classList.remove('modal-open');
    window.scrollTo(0, lastScrollTop);
}

// ============================================
// FUNCIONES DE CARGA DE DATOS
// ============================================
async function loadListData(url) {
    try {
        let response = await fetch(url);
        if (!response.ok) throw new Error('Error al cargar datos');
        return await response.json();
    } catch (error) {
        console.error(`Error loading data from ${url}:`, error);
        return [];
    }
}

function calculatePoints(tiers) {
    return Object.entries(tiers || {}).reduce((total, [tier, value]) => {
        return total + (TIER_POINTS[value] || 0);
    }, 0);
}

function getTitleByPoints(points) {
    for (let rank of TITLE_RANKS) {
        if (points >= rank.min && points <= rank.max) return rank;
    }
    return TITLE_RANKS[TITLE_RANKS.length - 1];
}

// ============================================
// FUNCIONES DE VISUALIZACIÓN
// ============================================
function displayPlayers(playerArray, page = 1, scrollToTop = false) {
    const container = document.getElementById('players-list');
    if (!playerArray || !playerArray.length) {
        container.innerHTML = '<div class="error">😅 No se encontraron jugadores</div>';
        return;
    }
    const sorted = [...playerArray].sort((a, b) => {
        let pointsA = a.puntos ?? calculatePoints(a.tiers);
        let pointsB = b.puntos ?? calculatePoints(b.tiers);
        return pointsB - pointsA;
    });
    const totalPages = Math.ceil(sorted.length / CONFIG.playersPerPage);
    currentPage = Math.max(1, Math.min(page, totalPages));
    const start = (currentPage - 1) * CONFIG.playersPerPage;
    const end = start + CONFIG.playersPerPage;
    const pagePlayers = sorted.slice(start, end);
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();
    pagePlayers.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-card';
        const points = player.puntos ?? calculatePoints(player.tiers);
        const title = getTitleByPoints(points);
        const globalRank = start + index + 1;
        const miniBox = document.createElement('div');
        miniBox.className = 'player-mini-box';
        const posDiv = document.createElement('div');
        posDiv.className = 'player-position';
        posDiv.textContent = globalRank;
        const avatarContainer = document.createElement('div');
        avatarContainer.className = 'player-avatar-container';
        const avatarImg = document.createElement('img');
        avatarImg.className = 'player-avatar';
        avatarImg.src = `https://render.crafty.gg/3d/bust/${encodeURIComponent(player.mc_nick.trim())}?format=webp&width=128&height=128`;
        avatarImg.onerror = function () { this.src = 'https://mc-heads.net/avatar/MHF_Steve/64'; };
        avatarContainer.appendChild(avatarImg);
        miniBox.appendChild(posDiv);
        miniBox.appendChild(avatarContainer);
        if (globalRank <= 3) {
            const beltContainer = document.createElement('div');
            beltContainer.className = 'rank-belt-container';
            const beltImg = document.createElement('img');
            beltImg.className = 'rank-belt';
            beltImg.src = rankBelts[globalRank];
            beltImg.alt = `Cinturón Top ${globalRank}`;
            beltContainer.appendChild(beltImg);
            miniBox.appendChild(beltContainer);
        }
        const infoDiv = document.createElement('div');
        infoDiv.className = 'player-info';
        const nameDiv = document.createElement('div');
        nameDiv.className = 'player-name';
        nameDiv.textContent = player.mc_nick;
        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'player-details';
        const regionSpan = document.createElement('span');
        regionSpan.className = 'region-box';
        if (player.region) {
            regionSpan.textContent = player.region;
            if (player.region.toLowerCase() === 'na') regionSpan.classList.add('na');
            else if (player.region.toLowerCase() === 'sa') regionSpan.classList.add('sa');
            else if (player.region.toLowerCase() === 'eu') regionSpan.classList.add('eu');
        } else regionSpan.textContent = '-';
        const titleDiv = document.createElement('div');
        titleDiv.className = 'player-title';
        const titleIcon = document.createElement('img');
        titleIcon.className = 'player-title-icon';
        titleIcon.src = title.icon;
        titleIcon.alt = title.title;
        titleIcon.onerror = function () { this.style.display = 'none'; titleSpan.textContent = title.title + ' 🏆'; };
        const titleSpan = document.createElement('span');
        titleSpan.className = 'player-title-text';
        titleSpan.textContent = title.title;
        titleDiv.appendChild(titleIcon);
        titleDiv.appendChild(titleSpan);
        const tierContainer = document.createElement('div');
        tierContainer.className = 'tier-container';
        const categories = ['nethpot', 'crystal', 'uhc', 'sword', 'mace', 'diapot'];
        categories.forEach(cat => {
            const tierValue = player.tiers?.[cat] || '-';
            const tierBadge = document.createElement('div');
            tierBadge.className = 'tier-badge';
            const tierIcon = document.createElement('img');
            if (cat === 'all') tierIcon.src = 'https://pvptiers.com/icons/tiers/overall.png';
            else if (cat === 'nethpot') tierIcon.src = 'https://mctiers.com/tier_icons/nethop.svg';
            else if (cat === 'crystal') tierIcon.src = 'https://mctiers.com/tier_icons/vanilla.svg';
            else if (cat === 'sword') tierIcon.src = 'https://mctiers.com/tier_icons/sword.svg';
            else if (cat === 'uhc') tierIcon.src = 'https://mctiers.com/tier_icons/uhc.svg';
            else if (cat === 'mace') tierIcon.src = 'https://mctiers.com/tier_icons/mace.svg';
            else if (cat === 'diapot') tierIcon.src = 'https://mctiers.com/tier_icons/pot.svg';
            tierIcon.alt = cat;
            const tierText = document.createElement('span');
            tierText.textContent = tierValue;
            tierBadge.appendChild(tierIcon);
            tierBadge.appendChild(tierText);
            tierContainer.appendChild(tierBadge);
        });
        const pointsSpan = document.createElement('span');
        pointsSpan.className = 'points-box';
        pointsSpan.textContent = (points || '0') + ' ᴘᴜɴᴛᴏꜱ';
        detailsDiv.appendChild(regionSpan);
        detailsDiv.appendChild(titleDiv);
        detailsDiv.appendChild(tierContainer);
        detailsDiv.appendChild(pointsSpan);
        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(detailsDiv);
        card.appendChild(miniBox);
        card.appendChild(infoDiv);
        card.addEventListener('click', () => { showPlayerInfo(player, globalRank); });
        card.style.animationDelay = index * 0.1 + 's';
        fragment.appendChild(card);
    });
    container.appendChild(fragment);
    if (totalPages > 1) {
        const paginationDiv = document.createElement('div');
        paginationDiv.className = 'pagination';
        const prevBtn = document.createElement('button');
        prevBtn.textContent = '← Anterior';
        prevBtn.disabled = currentPage === 1;
        prevBtn.addEventListener('click', () => { displayPlayers(playerArray, currentPage - 1, true); });
        const pageSpan = document.createElement('span');
        pageSpan.className = 'pagination-info';
        pageSpan.textContent = `Página ${currentPage} de ${totalPages}`;
        const nextBtn = document.createElement('button');
        nextBtn.textContent = 'Siguiente →';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.addEventListener('click', () => { displayPlayers(playerArray, currentPage + 1, true); });
        paginationDiv.appendChild(prevBtn);
        paginationDiv.appendChild(pageSpan);
        paginationDiv.appendChild(nextBtn);
        container.appendChild(paginationDiv);
        if (scrollToTop) {
            setTimeout(() => {
                const navbarHeight = document.getElementById('navbar').offsetHeight;
                window.scrollTo({ top: container.offsetTop - navbarHeight - 20, behavior: 'smooth' });
            }, 100);
        }
    }
}

function displayTesterMonth() {
    const grid = document.getElementById('tester-grid');
    grid.innerHTML = '';
    const testers = [
        { nick: '9Nexilf', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ɴᴏᴠɪᴇᴍʙʀᴇ', tests: '53 tests' },
        { nick: 'wDtap', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ꜱᴇᴘᴛɪᴇᴍʙʀᴇ', tests: '52 tests' },
        { nick: 'SilavaNotPrime', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ᴀɢᴏꜱᴛᴏ', tests: '60 tests' },
        { nick: 'ManolitoElCrack', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ᴊᴜʟɪᴏ', tests: '132 tests' },
        { nick: 'wDtap', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ᴊᴜɴɪᴏ', tests: '87 tests' },
        { nick: 'Fershino', month: 'ᴛᴇꜱᴛᴇʀ ᴅᴇʟ ᴍᴇꜱ-ᴍᴀʏᴏ', tests: '62 tests' }
    ];
    testers.forEach((t, i) => {
        let card = document.createElement('div');
        card.className = 'tester-card';
        card.style.animationDelay = i * 0.1 + 's';
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.innerHTML = `
            <div class="tester-header"><div class="tester-month-text">${t.month}</div></div>
            <div class="tester-content">
                <img src="https://render.crafty.gg/3d/bust/${encodeURIComponent(t.nick.trim())}?format=webp&width=128&height=128" class="tester-avatar" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/64'">
                <div class="tester-name">${t.nick}</div>
                <div class="tester-info">
                    <div class="tester-tests-label">ᴄᴀɴᴛɪᴅᴀᴅ ᴅᴇ ᴛᴇꜱᴛꜱ:</div>
                    <div class="tester-tests-value">${t.tests}</div>
                </div>
            </div>
        `;
        grid.appendChild(card);
        setTimeout(() => {
            card.style.animation = 'buttonLoad 0.5s ease-out forwards';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, i * 100 + 100);
    });
}

async function displayCheaterlist() {
    const container = document.getElementById('cheater-list');
    container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Cargando cheaterlist...</p></div>';
    try {
        const data = [
            { mc_nick: 'XxjoshuaxX_97', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '11/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'SavageDead', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '17/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'elgorditon', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '25/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'SopitaDeSemen67', razon: 'ᴄʜᴇᴀᴛꜱ + ᴀʟᴛɪɴɢ', fecha: '5/1/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'facusadee', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '14/10/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'deadforcm', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '10/9/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'N1njaXxX_', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '4/9/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Sebastian_2', razon: 'ᴄʜᴇᴀᴛꜱ + ᴀʟᴛɪɴɢ', fecha: '26/8/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'SkibidiDopDop2', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '26/08/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: '_Wax__', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '16/08/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: '99Kszz', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '16/08/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'daviiman', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '14/08/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'BestAmericaCheat', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '7/7/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'matisito15', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '21/6/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'itzSlowwzz', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '25/5/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'iFortrex', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '17/10/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'yCaaponee_', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '15/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'ChicoRuso1', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '30/10/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'FaildedToLT5', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '18/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'wTennessee', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '22/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Rackiez', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '23/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Saakuji', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '27/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'TheValtrackx', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '27/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'SnowSilent', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '30/11/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Phadiego0308', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '6/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'farfadox2323', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '7/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'GrummTT', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '7/2/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Ninecryyy', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '7/2/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: '23Mateeooo', razon: 'ᴄʜᴇᴀᴛꜱ', fecha: '14/2/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' }
        ];
        if (!data.length) {
            container.innerHTML = '<div class="error">😅 No hay jugadores en la cheaterlist</div>';
            return;
        }
        data.sort((a, b) => {
            function parseDate(dateStr) {
                if (!dateStr) return new Date(0);
                let [d, m, y] = dateStr.split('/').map(Number);
                return new Date(y, m - 1, d);
            }
            return parseDate(b.fecha) - parseDate(a.fecha);
        });
        container.innerHTML = '';
        data.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'cheater-player';
            div.style.animationDelay = index * 0.1 + 's';
            div.style.opacity = '0';
            div.style.transform = 'translateX(-20px)';
            div.innerHTML = `
                <img src="https://render.crafty.gg/3d/bust/${encodeURIComponent(item.mc_nick.trim())}?format=webp&width=128&height=128" class="cheater-avatar" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/64'">
                <div class="cheater-info">
                    <div class="cheater-name">${item.mc_nick}</div>
                    <div class="info-box">
                        <div class="info-row"><span class="info-label">ʀᴀᴢᴏ́ɴ:</span><span class="info-value">${item.razon}</span></div>
                        <div class="info-row"><span class="info-label">ꜰᴇᴄʜᴀ:</span><span class="info-value">${item.fecha}</span></div>
                        <div class="info-row"><span class="info-label">ᴅᴜʀᴀᴄɪᴏ́ɴ:</span><span class="info-value">${item.duracion}</span></div>
                    </div>
                </div>
            `;
            container.appendChild(div);
            setTimeout(() => {
                div.style.animation = 'buttonLoadHorizontal 0.5s ease-out forwards';
                div.style.opacity = '1';
                div.style.transform = 'translateX(0)';
            }, index * 100 + 100);
        });
    } catch (error) {
        console.error('Error displaying cheaterlist:', error);
        container.innerHTML = '<div class="error">💀 Error al cargar la cheaterlist</div>';
    }
}

async function displayBlacklist() {
    const container = document.getElementById('blacklist-list');
    container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Cargando sanciones...</p></div>';
    try {
        const data = [
            { mc_nick: 'DinastiiaCT', razon: 'ᴀʟᴛɪɴɢ', fecha: '1/2/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'SopitaDeSemen67', razon: 'ᴀʟᴛɪɴɢ', fecha: '6/1/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'Funas', razon: 'ᴀʟᴛɪɴɢ', fecha: '3/1/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'fantasy18_', razon: 'ʀᴏʙᴏ ᴅᴇ ᴄᴜᴇɴᴛᴀꜱ', fecha: '3/1/2026', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'ImNotAlx_', razon: 'ʀᴏʙᴏ ᴅᴇ ᴄᴜᴇɴᴛᴀꜱ', fecha: '5/12/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' },
            { mc_nick: 'izhunder', razon: 'ꜱᴜᴘʟᴀɴᴛᴀᴄɪóɴ ᴅᴇ ɪᴅᴇɴᴛɪᴅᴀᴅ ᴇɴ ᴍúʟᴛɪᴘʟᴇꜱ ᴏᴄᴀꜱɪᴏɴᴇꜱ + ᴀʟᴛɪɴɢ', fecha: '25/9/2025', duracion: 'ᴘᴇʀᴍᴀɴᴇɴᴛᴇ' }
        ];
        if (!data.length) {
            container.innerHTML = '<div class="error">😅 No hay sanciones registradas</div>';
            return;
        }
        data.sort((a, b) => {
            function parseDate(dateStr) {
                if (!dateStr) return new Date(0);
                let [d, m, y] = dateStr.split('/').map(Number);
                return new Date(y, m - 1, d);
            }
            return parseDate(b.fecha) - parseDate(a.fecha);
        });
        container.innerHTML = '';
        data.forEach((item, index) => {
            let div = document.createElement('div');
            div.className = 'blacklist-player';
            div.style.animationDelay = index * 0.1 + 's';
            div.style.opacity = '0';
            div.style.transform = 'translateX(-20px)';
            div.innerHTML = `
                <img src="https://render.crafty.gg/3d/bust/${encodeURIComponent(item.mc_nick.trim())}?format=webp&width=128&height=128" class="blacklist-avatar" onerror="this.src='https://mc-heads.net/avatar/MHF_Steve/64'">
                <div class="blacklist-info">
                    <div class="blacklist-name">${item.mc_nick}</div>
                    <div class="info-box">
                        <div class="info-row"><span class="info-label">ʀᴀᴢᴏ́ɴ:</span><span class="info-value">${item.razon}</span></div>
                        <div class="info-row"><span class="info-label">ꜰᴇᴄʜᴀ:</span><span class="info-value">${item.fecha}</span></div>
                        <div class="info-row"><span class="info-label">ᴅᴜʀᴀᴄɪᴏ́ɴ:</span><span class="info-value">${item.duracion}</span></div>
                    </div>
                </div>
            `;
            container.appendChild(div);
            setTimeout(() => {
                div.style.animation = 'buttonLoadHorizontal 0.5s ease-out forwards';
                div.style.opacity = '1';
                div.style.transform = 'translateX(0)';
            }, index * 100 + 100);
        });
    } catch (error) {
        console.error('Error displaying blacklist:', error);
        container.innerHTML = '<div class="error">💀 Error al cargar las sanciones</div>';
    }
}

async function displayStaff() {
    const container = document.getElementById('staff-list');
    container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Cargando staff...</p></div>';
    try {
        const timeoutPromise = new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout al cargar staff')), 5000));
        const data = await Promise.race([loadListData(STAFF_JSON_URL), timeoutPromise]);
        if (!data || data.length === 0) {
            container.innerHTML = '<div class="error">😅 No hay miembros en el staff</div>';
            return;
        }
        container.innerHTML = '';
        const roleMapping = {
            owner: 'Owner',
            manager: 'Manager',
            admin: 'Admin',
            'discord mod': 'Discord Mod',
            'discord helper': 'Discord Helper',
            'head tester': 'Head Tester',
            'senior tester': 'Senior Tester',
            'verified tester': 'Verified Tester'
        };
        const memberRoles = {};
        data.forEach(item => {
            let nick = item.mc_nick;
            if (!memberRoles[nick]) {
                memberRoles[nick] = { mc_nick: nick, roles: new Set() };
            }
            if (item.rank && typeof item.rank === 'string') {
                item.rank.split(',').map(r => r.trim()).forEach(role => {
                    let lowerRole = role.toLowerCase();
                    let mappedRole = roleMapping[lowerRole] || role.charAt(0).toUpperCase() + role.slice(1).toLowerCase();
                    memberRoles[nick].roles.add(mappedRole);
                });
            }
        });
        const roleOrder = ['Owner', 'Manager', 'Admin', 'Discord Mod', 'Discord Helper', 'Head Tester', 'Senior Tester', 'Verified Tester'];
        const rolesGrouped = {};
        Object.values(memberRoles).forEach(member => {
            member.roles.forEach(role => {
                if (!rolesGrouped[role]) rolesGrouped[role] = [];
                rolesGrouped[role].push(member);
            });
        });
        roleOrder.forEach(roleName => {
            const roleDiv = document.createElement('div');
            roleDiv.className = 'staff-role';
            roleDiv.style.opacity = '0';
            roleDiv.style.transform = 'translateY(20px)';
            const roleTitle = document.createElement('h3');
            roleTitle.className = 'role-title';
            const roleIcon = document.createElement('img');
            roleIcon.className = 'role-icon';
            roleIcon.src = roleIcons[roleName] || '';
            roleIcon.alt = roleName;
            roleTitle.appendChild(roleIcon);
            const roleSpan = document.createElement('span');
            if (roleName === 'Owner') roleSpan.textContent = 'ᴏᴡɴᴇʀ';
            else if (roleName === 'Manager') roleSpan.textContent = 'ᴍᴀɴᴀɢᴇʀ';
            else if (roleName === 'Admin') roleSpan.textContent = 'ᴀᴅᴍɪɴ';
            else if (roleName === 'Discord Mod') roleSpan.textContent = 'ᴅɪꜱᴄᴏʀᴅ ᴍᴏᴅ';
            else if (roleName === 'Discord Helper') roleSpan.textContent = 'ᴅɪꜱᴄᴏʀᴅ ʜᴇʟᴘᴇʀ';
            else if (roleName === 'Head Tester') roleSpan.textContent = 'ʜᴇᴀᴅ ᴛᴇꜱᴛᴇʀ';
            else if (roleName === 'Senior Tester') roleSpan.textContent = 'ꜱᴇɴɪᴏʀ ᴛᴇꜱᴛᴇʀ';
            else if (roleName === 'Verified Tester') roleSpan.textContent = 'ᴠᴇʀɪꜰɪᴇᴅ ᴛᴇꜱᴛᴇʀ';
            else roleSpan.textContent = roleName.toLowerCase();
            roleTitle.appendChild(roleSpan);
            roleDiv.appendChild(roleTitle);
            const membersDiv = document.createElement('div');
            membersDiv.className = 'role-members';
            const membersList = rolesGrouped[roleName] || [];
            if (membersList.length === 0) {
                let noneDiv = document.createElement('div');
                noneDiv.className = 'none-member';
                noneDiv.textContent = 'none';
                membersDiv.appendChild(noneDiv);
            } else {
                membersList.forEach(member => {
                    let memberDiv = document.createElement('div');
                    memberDiv.className = 'staff-member';
                    memberDiv.style.opacity = '0';
                    memberDiv.style.transform = 'translateY(10px)';
                    let avatar = document.createElement('img');
                    avatar.className = 'staff-avatar';
                    avatar.src = `https://render.crafty.gg/3d/bust/${encodeURIComponent(member.mc_nick.trim())}?format=webp&width=128&height=128`;
                    avatar.onerror = function () { this.src = 'https://mc-heads.net/avatar/MHF_Steve/64'; };
                    let nameSpan = document.createElement('span');
                    nameSpan.className = 'staff-name';
                    nameSpan.textContent = member.mc_nick;
                    memberDiv.appendChild(avatar);
                    memberDiv.appendChild(nameSpan);
                    membersDiv.appendChild(memberDiv);
                    setTimeout(() => {
                        memberDiv.style.animation = 'buttonLoad 0.3s ease-out forwards';
                        memberDiv.style.opacity = '1';
                        memberDiv.style.transform = 'translateY(0)';
                    }, 100);
                });
            }
            roleDiv.appendChild(membersDiv);
            container.appendChild(roleDiv);
            setTimeout(() => {
                roleDiv.style.animation = 'buttonLoad 0.5s ease-out forwards';
                roleDiv.style.opacity = '1';
                roleDiv.style.transform = 'translateY(0)';
            }, 100);
        });
    } catch (error) {
        console.error('Error displaying staff:', error);
        container.innerHTML = '<div class="error">💀 Error al cargar el staff</div>';
    }
}

function animateCategoryButtons() {
    try {
        document.querySelectorAll('.category-wrapper').forEach((btn, index) => {
            setTimeout(() => {
                btn.style.animation = CONFIG.animationsEnabled ? 'buttonLoad 0.5s ease-out forwards' : 'none';
                btn.style.animationDelay = index * 0.1 + 's';
            }, 3000 + index * 100);
        });
    } catch (error) {
        console.error('Error animating category buttons:', error);
    }
}

function animateNavButtons() {
    try {
        document.querySelectorAll('.nav-btn').forEach((btn, index) => {
            setTimeout(() => {
                btn.style.animation = CONFIG.animationsEnabled ? 'buttonLoadHorizontal 0.5s ease-out forwards' : 'none';
                btn.style.animationDelay = index * 0.2 + 's';
            }, 3000 + index * 200);
        });
    } catch (error) {
        console.error('Error animating nav buttons:', error);
    }
}

function toggleTesterMonth() {
    try {
        let rankingTable = document.querySelector('.ranking-table');
        let categoriesContainer = document.querySelector('.categories-container');
        let testerContainer = document.getElementById('tester-month-container');
        let staffContainer = document.getElementById('staff-container');
        let cheaterContainer = document.getElementById('cheaterlist-container');
        let blacklistContainer = document.getElementById('blacklist-container');
        let staffMonthContainer = document.getElementById('staff-month-container');
        if (testerContainer.style.display === 'block') showMainView();
        else {
            testerContainer.style.display = 'block';
            rankingTable.style.display = 'none';
            categoriesContainer.style.display = 'none';
            staffContainer.style.display = 'none';
            cheaterContainer.style.display = 'none';
            blacklistContainer.style.display = 'none';
            staffMonthContainer.style.display = 'none';
            document.getElementById('back-btn').style.display = 'block';
            displayTesterMonth();
        }
    } catch (error) {
        console.error('Error toggling tester month:', error);
    }
}

function toggleStaffMonth() {
    try {
        let rankingTable = document.querySelector('.ranking-table');
        let categoriesContainer = document.querySelector('.categories-container');
        let staffMonthContainer = document.getElementById('staff-month-container');
        let staffContainer = document.getElementById('staff-container');
        let cheaterContainer = document.getElementById('cheaterlist-container');
        let blacklistContainer = document.getElementById('blacklist-container');
        let testerContainer = document.getElementById('tester-month-container');
        if (staffMonthContainer.style.display === 'block') showMainView();
        else {
            staffMonthContainer.style.display = 'block';
            rankingTable.style.display = 'none';
            categoriesContainer.style.display = 'none';
            staffContainer.style.display = 'none';
            cheaterContainer.style.display = 'none';
            blacklistContainer.style.display = 'none';
            testerContainer.style.display = 'none';
            document.getElementById('back-btn').style.display = 'block';
        }
    } catch (error) {
        console.error('Error toggling staff month:', error);
    }
}

function showMainView() {
    document.querySelector('.ranking-table').style.display = 'block';
    document.querySelector('.categories-container').style.display = 'flex';
    document.getElementById('staff-container').style.display = 'none';
    document.getElementById('cheaterlist-container').style.display = 'none';
    document.getElementById('blacklist-container').style.display = 'none';
    document.getElementById('tester-month-container').style.display = 'none';
    document.getElementById('staff-month-container').style.display = 'none';
    document.getElementById('back-btn').style.display = 'none';
}

function toggleStaffView() {
    try {
        let rankingTable = document.querySelector('.ranking-table');
        let categoriesContainer = document.querySelector('.categories-container');
        let staffContainer = document.getElementById('staff-container');
        let cheaterContainer = document.getElementById('cheaterlist-container');
        let blacklistContainer = document.getElementById('blacklist-container');
        let testerContainer = document.getElementById('tester-month-container');
        let staffMonthContainer = document.getElementById('staff-month-container');
        if (staffContainer.style.display === 'block') showMainView();
        else {
            staffContainer.style.display = 'block';
            rankingTable.style.display = 'none';
            categoriesContainer.style.display = 'none';
            cheaterContainer.style.display = 'none';
            blacklistContainer.style.display = 'none';
            testerContainer.style.display = 'none';
            staffMonthContainer.style.display = 'none';
            document.getElementById('back-btn').style.display = 'block';
            if (staff.length === 0) displayStaff();
        }
    } catch (error) {
        console.error('Error toggling staff view:', error);
    }
}

function toggleCheaterlist() {
    try {
        let rankingTable = document.querySelector('.ranking-table');
        let categoriesContainer = document.querySelector('.categories-container');
        let cheaterContainer = document.getElementById('cheaterlist-container');
        let staffContainer = document.getElementById('staff-container');
        let blacklistContainer = document.getElementById('blacklist-container');
        let testerContainer = document.getElementById('tester-month-container');
        let staffMonthContainer = document.getElementById('staff-month-container');
        if (cheaterContainer.style.display === 'block') showMainView();
        else {
            cheaterContainer.style.display = 'block';
            rankingTable.style.display = 'none';
            categoriesContainer.style.display = 'none';
            staffContainer.style.display = 'none';
            blacklistContainer.style.display = 'none';
            testerContainer.style.display = 'none';
            staffMonthContainer.style.display = 'none';
            document.getElementById('back-btn').style.display = 'block';
            if (cheaterlist.length === 0) displayCheaterlist();
        }
    } catch (error) {
        console.error('Error toggling cheaterlist:', error);
    }
}

function toggleBlacklist() {
    try {
        let rankingTable = document.querySelector('.ranking-table');
        let categoriesContainer = document.querySelector('.categories-container');
        let blacklistContainer = document.getElementById('blacklist-container');
        let staffContainer = document.getElementById('staff-container');
        let cheaterContainer = document.getElementById('cheaterlist-container');
        let testerContainer = document.getElementById('tester-month-container');
        let staffMonthContainer = document.getElementById('staff-month-container');
        if (blacklistContainer.style.display === 'block') showMainView();
        else {
            blacklistContainer.style.display = 'block';
            rankingTable.style.display = 'none';
            categoriesContainer.style.display = 'none';
            staffContainer.style.display = 'none';
            cheaterContainer.style.display = 'none';
            testerContainer.style.display = 'none';
            staffMonthContainer.style.display = 'none';
            document.getElementById('back-btn').style.display = 'block';
            if (blacklist.length === 0) displayBlacklist();
        }
    } catch (error) {
        console.error('Error toggling blacklist:', error);
    }
}

async function reloadPlayers() {
    try {
        let container = document.getElementById('players-list');
        if (!container) {
            console.error('Players list not found');
            return;
        }
        container.innerHTML = '<div class="loading"><div class="spinner"></div><p>Cargando jugadores...</p></div>';
        players = await loadListData(PLAYERS_JSON_URL);
        if (!players || players.length === 0) {
            container.innerHTML = '<div class="error">No se encontraron jugadores.</div>';
            return;
        }
        players.forEach(p => {
            if (p) {
                p.puntos = calculatePoints(p.tiers);
                p.premium = true;
            }
        });
        currentPage = 1;
        displayPlayers(players);
        updateActiveCategory(document.querySelector('.category-wrapper.active'));
    } catch (error) {
        console.error('Error:', error);
        let container = document.getElementById('players-list');
        if (container) {
            container.innerHTML = `<div class="error"><p>💀 Error: ${error.message}</p><button class="reload-btn" onclick="window.reloadPlayers()">RECARGAR</button></div>`;
        }
    }
}

function showPlayerInfo(player, rank) {
    let modal = document.getElementById('player-modal');
    if (!modal) { console.error('Modal not found'); return; }
    let skinImg = document.getElementById('player-skin-circle');
    let nickSpan = document.getElementById('player-nick-profile');
    let rankImg = document.getElementById('player-rank-image-profile');
    let rankTitleSpan = document.getElementById('player-rank-title-profile');
    let posSpan = document.getElementById('player-position-number');
    let pointsSpan = document.getElementById('player-points-profile');
    let tiersContainer = document.getElementById('player-tiers-container-profile');
    let viewCountSpan = document.getElementById('view-count-display');
    let playerNick = player.mc_nick;
    let specialRankContainer = document.getElementById('player-special-rank-container');
    let specialRankIcon = document.getElementById('player-special-rank-icon');
    let specialRankName = document.getElementById('player-special-rank-name');
    let totalPoints = player.puntos ?? calculatePoints(player.tiers);
    let title = getTitleByPoints(totalPoints);
    if (skinImg) {
        skinImg.src = `https://render.crafty.gg/3d/bust/${encodeURIComponent(player.mc_nick.trim())}?format=webp&width=256&height=256`;
        skinImg.onerror = function () { this.src = 'https://mc-heads.net/avatar/MHF_Steve/256'; };
    }
    if (nickSpan) nickSpan.textContent = player.mc_nick;
    if (rankImg) { rankImg.src = title.icon; rankImg.alt = title.title; }
    if (rankTitleSpan) rankTitleSpan.textContent = title.title;
    if (posSpan) posSpan.textContent = '#' + rank;
    if (pointsSpan) pointsSpan.textContent = '(' + totalPoints + ' ᴘᴜɴᴛᴏꜱ)';
    let views = incrementPlayerViews(playerNick);
    if (viewCountSpan) viewCountSpan.textContent = views;
    let special = getSpecialRank(playerNick);
    if (specialRankIcon && specialRankName) {
        specialRankIcon.src = special.icon;
        specialRankName.textContent = special.name;
    }
    if (tiersContainer) {
        tiersContainer.innerHTML = '';
        const tierIcons = {
            nethpot: 'https://mctiers.com/tier_icons/nethop.svg',
            crystal: 'https://mctiers.com/tier_icons/vanilla.svg',
            sword: 'https://mctiers.com/tier_icons/sword.svg',
            uhc: 'https://mctiers.com/tier_icons/uhc.svg',
            mace: 'https://mctiers.com/tier_icons/mace.svg',
            diapot: 'https://mctiers.com/tier_icons/pot.svg'
        };
        ['nethpot', 'crystal', 'sword', 'uhc', 'mace', 'diapot'].forEach(cat => {
            let item = document.createElement('div');
            item.className = 'tier-modal-item-horizontal';
            let icon = document.createElement('img');
            icon.className = 'tier-modal-icon-horizontal';
            icon.src = tierIcons[cat];
            icon.alt = cat;
            let valDiv = document.createElement('div');
            valDiv.className = 'tier-modal-value-horizontal';
            let tierVal = player.tiers?.[cat] || '-';
            valDiv.textContent = tierVal;
            if (tierVal === '-') valDiv.classList.add('none');
            item.appendChild(icon);
            item.appendChild(valDiv);
            tiersContainer.appendChild(item);
        });
    }
    lockScroll();
    modal.style.display = 'block';
    modal.style.opacity = '0';
    setTimeout(() => { modal.style.opacity = '1'; }, 10);
}

function closeModal() {
    document.getElementById('category-modal').style.display = 'none';
    unlockScroll();
}

function closePlayerModal() {
    let modal = document.getElementById('player-modal');
    if (!modal) return;
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        unlockScroll();
    }, 200);
}

function tierToNumber(tierStr) {
    if (!tierStr) return 0;
    let num = parseInt(tierStr.replace(/\D/g, '')) || 0;
    return num > 5 ? 5 : num;
}

function openCategoryModal(category, element) {
    updateActiveCategory(element);
    let playerModal = document.getElementById('player-modal');
    if (playerModal && playerModal.style.display === 'block') playerModal.style.display = 'none';
    let modal = document.getElementById('category-modal');
    let modalTitle = document.getElementById('modal-title');
    let tierTabs = document.getElementById('tier-tabs');
    const categoryNames = {
        all: 'ᴛᴏᴅᴏꜱ ʟᴏꜱ ᴊᴜɢᴀᴅᴏʀᴇꜱ',
        nethpot: 'ɴᴇᴛʜᴘᴏᴛ',
        crystal: 'ᴄʀʏꜱᴛᴀʟ',
        sword: 'ꜱᴡᴏʀᴅ',
        uhc: 'ᴜʜᴄ',
        mace: 'ᴍᴀᴄᴇ',
        diapot: 'ᴅɪᴀᴘᴏᴛ'
    };
    modalTitle.textContent = categoryNames[category] || 'ᴄᴀᴛᴇɢᴏʀɪᴀ';
    modal.dataset.category = category;
    tierTabs.innerHTML = '';
    if (category === 'all') tierTabs.style.display = 'none';
    else {
        tierTabs.style.display = 'flex';
        let tiers = ['all', '1', '2', '3', '4', '5'];
        tiers.forEach(t => {
            let tab = document.createElement('div');
            tab.className = 'tier-tab';
            if (t === 'all') tab.classList.add('active');
            tab.dataset.tier = t;
            if (t === 'all') tab.textContent = 'ᴛᴏᴅᴏꜱ';
            else tab.textContent = 'ᴛɪᴇʀ ' + t;
            tab.addEventListener('click', () => {
                document.querySelectorAll('.tier-tab').forEach(tab => tab.classList.remove('active'));
                tab.classList.add('active');
                showPlayersByTier(category, t);
            });
            tierTabs.appendChild(tab);
        });
    }
    showPlayersByTier(category, 'all');
    lockScroll();
    modal.style.display = 'block';
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.opacity = '1';
        modal.scrollTop = 0;
    }, 0);
}

function showPlayersByTier(category, tier) {
    let container = document.getElementById('tier-players');
    container.innerHTML = '';
    let filtered = players.filter(p => {
        if (category === 'all') return true;
        let playerTier = p.tiers?.[category];
        if (!playerTier) return false;
        if (tier === 'all') return true;
        return tierToNumber(playerTier) === parseInt(tier);
    }).sort((a, b) => {
        let pointsA = a.puntos ?? calculatePoints(a.tiers);
        let pointsB = b.puntos ?? calculatePoints(b.tiers);
        return pointsB - pointsA;
    });
    filtered.forEach((p, index) => {
        let div = document.createElement('div');
        div.className = 'tier-player';
        div.style.opacity = '0';
        div.style.transform = 'translateY(10px)';
        let avatar = document.createElement('img');
        avatar.className = 'tier-player-avatar';
        avatar.src = `https://render.crafty.gg/3d/bust/${encodeURIComponent(p.mc_nick.trim())}?format=webp&width=64&height=64`;
        avatar.onerror = () => avatar.src = 'https://mc-heads.net/avatar/MHF_Steve/64';
        let infoDiv = document.createElement('div');
        infoDiv.className = 'player-info';
        let nameSpan = document.createElement('span');
        nameSpan.textContent = p.mc_nick;
        let badgeSpan = document.createElement('span');
        badgeSpan.className = 'tier-badge-small';
        if (category !== 'all') badgeSpan.textContent = p.tiers?.[category] || '-';
        else badgeSpan.textContent = (p.puntos ?? calculatePoints(p.tiers)) + ' pts';
        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(badgeSpan);
        div.appendChild(avatar);
        div.appendChild(infoDiv);
        div.addEventListener('click', () => showPlayerInfo(p, index + 1));
        container.appendChild(div);
        setTimeout(() => {
            div.style.animation = 'buttonLoad 0.3s ease-out forwards';
            div.style.opacity = '1';
            div.style.transform = 'translateY(0)';
        }, index * 50);
    });
}

function selectPlatform(platform) {
    document.getElementById('platform-selector').style.display = 'none';
    const body = document.body;
    if (platform === 'pc') {
        body.classList.add('pc-version');
        document.getElementById('month-buttons-pc').style.display = 'flex';
        document.getElementById('month-buttons-mobile').style.display = 'none';
    } else if (platform === 'mobile') {
        body.classList.add('mobile-version');
        document.getElementById('month-buttons-pc').style.display = 'none';
        document.getElementById('month-buttons-mobile').style.display = 'flex';
    }
    initApp();
}

// ============================================
// INICIALIZACIÓN DE LA APLICACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('platform-selector').style.display = 'flex';
    document.getElementById('month-buttons-pc').style.display = 'none';
    document.getElementById('month-buttons-mobile').style.display = 'none';
});

function initApp() {
    try {
        window.scrollTo(0, 0);
        loadViewsFromStorage();

        // ===== CREAR CATEGORÍAS DINÁMICAMENTE =====
        const categoriesContainer = document.getElementById('categories-container');
        if (categoriesContainer) {
            // Limpiar contenedor (por si acaso)
            categoriesContainer.innerHTML = `
                <div class="section-buttons">
                    <button class="section-btn" id="discord-btn"><i class="fab fa-discord"></i> ᴅɪꜱᴄᴏʀᴅ</button>
                    <button class="section-btn" id="refresh-btn"><i class="fas fa-sync-alt"></i> ʀᴇᴄᴀʀɢᴀʀ</button>
                </div>
            `;
            
            const categories = [
                { id: 'all', name: 'ᴛᴏᴅᴏꜱ', img: 'https://pvptiers.com/icons/tiers/overall.png' },
                { id: 'nethpot', name: 'ɴᴇᴛʜᴘᴏᴛ', img: 'https://pvptiers.com/icons/tiers/neth_pot.png' },
                { id: 'crystal', name: 'ᴄʀʏꜱᴛᴀʟ', img: 'https://pvptiers.com/icons/tiers/crystal.png' },
                { id: 'sword', name: 'ꜱᴡᴏʀᴅ', img: 'https://pvptiers.com/icons/tiers/sword.png' },
                { id: 'uhc', name: 'ᴜʜᴄ', img: 'https://pvptiers.com/icons/tiers/uhc.png' },
                { id: 'mace', name: 'ᴍᴀᴄᴇ', img: 'https://pvptiers.com/icons/tiers/mace.png' },
                { id: 'diapot', name: 'ᴅɪᴀᴘᴏᴛ', img: 'https://pvptiers.com/icons/tiers/pot.png' }
            ];
            categories.forEach((cat, index) => {
                const wrapper = document.createElement('div');
                wrapper.className = `category-wrapper ${index === 0 ? 'active' : ''}`;
                wrapper.setAttribute('onclick', `window.openCategoryModal('${cat.id}', this)`);
                wrapper.innerHTML = `
                    <img src="${cat.img}" class="category-image">
                    <div class="category-circle">${cat.name}</div>
                `;
                categoriesContainer.appendChild(wrapper);
            });
        }

        // ===== CREAR ITEMS DEL INFO MODAL =====
        const titlesContent = document.getElementById('titles-content');
        if (titlesContent) {
            titlesContent.innerHTML = '<h3>ᴛɪᴛʟᴇꜱ ʀᴀɴɢᴏꜱ</h3>';
            const titles = [
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/ciervo.png', title: 'ᴄɪᴇʀᴠᴏ', desc: '-5 puntos | ʀᴀɴɢᴏ ɪɴɪᴄɪᴀʟ' },
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/aprendiz.png', title: 'ᴀᴘʀᴇɴᴅɪᴢ', desc: '5-9 ᴘᴜɴᴛᴏꜱ' },
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/guerrero.png', title: 'ɢᴜᴇʀʀᴇʀᴏ', desc: '10-19 ᴘᴜɴᴛᴏꜱ' },
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/campeon.png', title: 'ᴄᴀᴍᴘᴇᴏɴ', desc: '20-29 ᴘᴜɴᴛᴏꜱ' },
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/heroe_epico.png', title: 'ʜᴇʀᴏᴇ ᴇᴘɪᴄᴏ', desc: '30-49 ᴘᴜɴᴛᴏꜱ' },
                { icon: 'https://raw.githubusercontent.com/Arzkhz/moonTLEZ/main/lunar_deidad.png', title: 'ʟᴜɴᴀʀ ᴅᴇɪᴛʏ', desc: '50+ ᴘᴜɴᴛᴏꜱ' }
            ];
            titles.forEach(t => {
                const item = document.createElement('div');
                item.className = 'info-item';
                item.innerHTML = `
                    <img src="${t.icon}" class="info-item-icon">
                    <div class="info-item-text">
                        <div class="info-item-title">${t.title}</div>
                        <div class="info-item-description">${t.desc}</div>
                    </div>
                `;
                titlesContent.appendChild(item);
            });
        }
        
        const pointsContent = document.getElementById('points-content');
        if (pointsContent) {
            pointsContent.innerHTML = '<h3>ᴘᴜɴᴛᴏꜱ ᴘᴏʀ ᴛɪᴇʀ</h3>';
            const points = [
                { tier: 'ʟᴛ5', pts: '1 ᴘᴜɴᴛᴏ' },
                { tier: 'ʜᴛ5', pts: '2 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʟᴛ4', pts: '3 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʜᴛ4', pts: '4 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʟᴛ3', pts: '6 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʜᴛ3', pts: '10 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʟᴛ2', pts: '20 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʜᴛ2', pts: '30 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʟᴛ1', pts: '45 ᴘᴜɴᴛᴏꜱ' },
                { tier: 'ʜᴛ1', pts: '60 ᴘᴜɴᴛᴏꜱ' }
            ];
            points.forEach(p => {
                const item = document.createElement('div');
                item.className = 'info-item';
                item.innerHTML = `
                    <div class="info-item-text">
                        <div class="info-item-title">${p.tier}</div>
                        <div class="info-item-description">${p.pts}</div>
                    </div>
                `;
                pointsContent.appendChild(item);
            });
        }

        // ===== RE-ASIGNAR EVENT LISTENERS (por si se pierden al recargar) =====
        document.getElementById('refresh-btn')?.addEventListener('click', reloadPlayers);
        document.getElementById('tester-month-btn')?.addEventListener('click', toggleTesterMonth);
        document.getElementById('staff-month-btn')?.addEventListener('click', toggleStaffMonth);
        document.getElementById('tester-month-btn-mobile')?.addEventListener('click', toggleTesterMonth);
        document.getElementById('staff-month-btn-mobile')?.addEventListener('click', toggleStaffMonth);
        document.getElementById('back-btn')?.addEventListener('click', showMainView);
        document.getElementById('staff-btn')?.addEventListener('click', toggleStaffView);
        document.getElementById('cheater-btn')?.addEventListener('click', toggleCheaterlist);
        document.getElementById('blacklist-btn')?.addEventListener('click', toggleBlacklist);
        document.getElementById('discord-btn')?.addEventListener('click', () => {
            window.open('https://discord.gg/x3SKKqJzUg', '_blank');
        });

        const infoBtn = document.getElementById('info-btn');
        const infoModal = document.getElementById('info-modal');
        const closeInfo = document.getElementById('close-info-modal');
        if (infoBtn && infoModal) {
            infoBtn.addEventListener('click', () => {
                infoModal.style.display = 'block';
                lockScroll();
            });
        }
        if (closeInfo) {
            closeInfo.addEventListener('click', () => {
                infoModal.style.display = 'none';
                unlockScroll();
            });
        }

        const tabs = document.querySelectorAll('.info-tab');
        const tabContents = document.querySelectorAll('.info-tab-content');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                let tabId = tab.getAttribute('data-tab');
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                tab.classList.add('active');
                document.getElementById(tabId + '-content').classList.add('active');
            });
        });

        const searchInput = document.getElementById('search-input');
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    let query = e.target.value.trim();
                    if (!query) return;
                    let found = players.find(p => p.mc_nick.toLowerCase() === query.toLowerCase());
                    if (found) {
                        let sorted = [...players].sort((a, b) => {
                            let pa = a.puntos ?? calculatePoints(a.tiers);
                            let pb = b.puntos ?? calculatePoints(b.tiers);
                            return pb - pa;
                        });
                        let index = sorted.findIndex(p => p.mc_nick.toLowerCase() === query.toLowerCase());
                        if (index !== -1) {
                            showPlayerInfo(found, index + 1);
                            searchInput.value = '';
                            searchInput.blur();
                        }
                    } else {
                        alert('Jugador no encontrado');
                        searchInput.value = '';
                        searchInput.blur();
                    }
                }
            });
        }

        // ===== CARGAR DATOS INICIALES Y OCULTAR LOADER =====
        setTimeout(() => {
            let loader = document.querySelector('.loader');
            if (loader) {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    reloadPlayers();
                    animateCategoryButtons();
                    animateNavButtons();
                }, 500);
            }
        }, 2000);

    } catch (error) {
        console.error('Error in initApp:', error);
    }
}

// ============================================
// EXPONER TODAS LAS FUNCIONES AL ÁMBITO GLOBAL
// ============================================
window.openCategoryModal = openCategoryModal;
window.closeModal = closeModal;
window.closePlayerModal = closePlayerModal;
window.selectPlatform = selectPlatform;
window.reloadPlayers = reloadPlayers;
window.toggleTesterMonth = toggleTesterMonth;
window.toggleStaffMonth = toggleStaffMonth;
window.showMainView = showMainView;
window.toggleStaffView = toggleStaffView;
window.toggleCheaterlist = toggleCheaterlist;
window.toggleBlacklist = toggleBlacklist;
window.showPlayerInfo = showPlayerInfo;
