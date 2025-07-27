// URL del JSON (¡asegúrate que sea pública!)
const JSON_URL = 'https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json?_=' + Date.now();

// ========================
// FUNCIÓN PARA MOSTRAR JUGADORES
// ========================
function updatePlayerList(players) {
    const container = document.getElementById('players-list');
    
    if (!players || players.length === 0) {
        container.innerHTML = '<p class="no-players">😅 No hay jugadores registrados aún</p>';
        return;
    }

    container.innerHTML = players.map(player => `
        <div class="player-card">
            <div class="player-header">
                <span class="player-name">${player.mc_nick || "Sin nick"}</span>
                <span class="player-region ${player.region?.toLowerCase() || ''}">${player.region || '?'}</span>
            </div>
            <div class="tiers">
                ${Object.entries(player.tiers || {})
                    .filter(([_, tier]) => tier)
                    .map(([mod, tier]) => `
                        <div class="tier">
                            <span class="modality">${mod}:</span>
                            <span class="tier-badge ${tier.toLowerCase()}">${tier}</span>
                        </div>`
                    ).join('')}
            </div>
        </div>
    `).join('');
}

// ========================
// FUNCIÓN PARA CARGAR DATOS
// ========================
async function loadPlayers() {
    try {
        console.log("🔍 Cargando datos...");
        const response = await fetch(JSON_URL);
        
        if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
        
        const players = await response.json();
        console.log("✅ Datos recibidos:", players);
        
        if (!Array.isArray(players)) throw new Error("El JSON no es un array");
        
        updatePlayerList(players);
    } catch (error) {
        console.error("💥 Error:", error);
        document.getElementById('players-list').innerHTML = `
            <div class="error">
                <p>💀 Error: ${error.message}</p>
                <button onclick="window.location.reload()">Recargar</button>
            </div>
        `;
    }
}

// ========================
// INICIAR CARGA AUTOMÁTICA
// ========================
loadPlayers(); // Carga inicial
setInterval(loadPlayers, 2000); // Actualizar cada 2 segundos
