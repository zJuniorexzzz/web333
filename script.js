// URL con proxy para evitar CORS + cache
const JSON_URL = `https://api.allorigins.win/raw?url=${encodeURIComponent('https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json')}&nocache=${Date.now()}`;

async function loadPlayers() {
  try {
    console.log("Cargando datos desde:", JSON_URL); // Debug
    const response = await fetch(JSON_URL);
    
    if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
    
    const players = await response.json();
    console.log("Datos recibidos:", players); // Debug
    
    if (!Array.isArray(players)) throw new Error("El JSON no es un array");
    
    updatePlayerList(players);
  } catch (error) {
    console.error("Error crítico:", error);
    document.getElementById('players-list').innerHTML = `
      <div class="error">
        <p>⚠️ Error al cargar datos</p>
        <button onclick="location.reload()">Reintentar</button>
      </div>
    `;
  }
}

function updatePlayerList(players) {
  const container = document.getElementById('players-list');
  
  if (!players || players.length === 0) {
    container.innerHTML = '<p>No hay jugadores registrados aún.</p>';
    return;
  }

  container.innerHTML = players.map(player => `
    <div class="player-card">
      <h3>${player.mc_nick || "Sin nick"}</h3>
      <p><strong>Región:</strong> ${player.region || "N/A"}</p>
      <div class="tiers">
        ${Object.entries(player.tiers || {})
          .filter(([_, tier]) => tier)
          .map(([mod, tier]) => `
            <p><span class="modality">${mod}:</span> <span class="tier-badge ${tier.toLowerCase()}">${tier}</span></p>`
          ).join('')}
      </div>
    </div>
  `).join('');
}

// Iniciar carga cada 1 segundo
loadPlayers();
setInterval(loadPlayers, 1000);
