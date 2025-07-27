const JSON_URL = 'https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json?_=' + Date.now();

// Función turbo para cargar jugadores
async function loadPlayers() {
    try {
        // Evitar caché con timestamp y forzar actualización
        const response = await fetch(`${JSON_URL}${Date.now()}`, {
            headers: {
                'Cache-Control': 'no-cache, no-store, must-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
        
        if (!response.ok) throw new Error("Error en la carga");
        
        const players = await response.json();
        updatePlayerList(players);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Renderizado super eficiente
function updatePlayerList(players) {
    const container = document.getElementById('players-list');
    
    // Optimización: Solo actualiza si hay cambios
    const currentPlayers = JSON.stringify(Array.from(container.children).map(el => el.dataset.id));
    const newPlayers = JSON.stringify(players.map(p => p.mc_nick));
    
    if (currentPlayers === newPlayers) return;

    container.innerHTML = players.map(player => `
        <div class="player-card" data-id="${player.mc_nick}">
            <div class="player-header">
                <span class="player-name">${player.mc_nick}</span>
                <span class="player-region ${player.region?.toLowerCase() || ''}">${player.region || '?'}</span>
            </div>
            <div class="tiers">
                ${Object.entries(player.tiers)
                    .filter(([_, tier]) => tier)
                    .map(([mod, tier]) => `
                        <div class="tier">
                            <span class="modality">${mod}</span>
                            <span class="tier-value ${tier.toLowerCase()}">${tier}</span>
                        </div>`
                    ).join('')}
            </div>
        </div>`
    ).join('');
}

// Nuclear: Actualización cada 1 segundo + carga inicial
loadPlayers();
setInterval(loadPlayers, 1000);

// Efecto visual de carga
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('players-list');
    container.innerHTML = '<div class="loading-spinner"></div>';
});
