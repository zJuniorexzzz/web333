const JSON_URL = `https://api.allorigins.win/get?url=${encodeURIComponent('https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json')}&timestamp=${Date.now()}`;

// Función BRUTAL para mostrar jugadores
function showPlayers(players) {
  const container = document.getElementById('players-list');
  
  if (!players.length) {
    container.innerHTML = '<p class="no-players">😴 No hay nadie registrado</p>';
    return;
  }

  container.innerHTML = players.map(player => `
    <div class="player-card" style="
      background: #1e1e1e;
      border-left: 4px solid #6e00ff;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
    ">
      <h3 style="margin: 0 0 10px 0; color: #6e00ff;">${player.mc_nick || 'Sin nick'}</h3>
      <p style="margin: 5px 0;"><strong>Región:</strong> ${player.region || 'N/A'}</p>
      <div>
        ${Object.entries(player.tiers || {})
          .filter(([_, tier]) => tier)
          .map(([mod, tier]) => `
            <p style="margin: 3px 0;">
              <span style="color: #aaa;">${mod}:</span>
              <span style="
                background: ${tier.includes('LT') ? '#ff5252' : '#4caf50'};
                padding: 2px 8px;
                border-radius: 4px;
                margin-left: 5px;
              ">${tier}</span>
            </p>`
          ).join('')}
      </div>
    </div>
  `).join('');
}

// Función QUE SÍ JALA para cargar datos
async function loadPlayers() {
  try {
    const response = await fetch(JSON_URL);
    const data = await response.json();
    
    if (!data.contents) throw new Error("No se pudo cargar el JSON");
    
    const players = JSON.parse(data.contents);
    console.log("🔥 Jugadores cargados:", players);
    showPlayers(players);
    
  } catch (error) {
    console.error("💥 ERROR:", error);
    document.getElementById('players-list').innerHTML = `
      <div style="
        background: #ffebee;
        color: #d32f2f;
        padding: 15px;
        border-radius: 5px;
        text-align: center;
      ">
        <p>💀 ERROR: ${error.message}</p>
        <button onclick="loadPlayers()" style="
          background: #d32f2f;
          color: white;
          border: none;
          padding: 8px 15px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        ">VOLVER A INTENTAR</button>
      </div>
    `;
  }
}

// INICIAMOS LA FIESTA
loadPlayers();
setInterval(loadPlayers, 1000); // Actualización CADA SEGUNDO
