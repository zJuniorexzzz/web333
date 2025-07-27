// URL DIRECTA con timestamp para evitar caché (no más proxies)
const JSON_URL = `https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json?t=${Date.now()}`;

// Función DEBUG para ver TODO en consola
async function loadPlayers() {
  console.log("🔍 Iniciando carga de datos...");
  
  try {
    const response = await fetch(JSON_URL);
    console.log("🔧 Estado de la respuesta:", response.status);
    
    if (!response.ok) {
      throw new Error(`Error HTTP: ${response.status}`);
    }

    const data = await response.text();
    console.log("📦 Datos crudos recibidos:", data);
    
    const players = JSON.parse(data);
    console.log("🎮 Jugadores parseados:", players);

    if (!Array.isArray(players)) {
      throw new Error("El archivo JSON no es un array válido");
    }

    updatePlayerList(players);
  } catch (error) {
    console.error("💥 ERROR CRÍTICO:", error);
    document.getElementById('players-list').innerHTML = `
      <div class="error">
        <p>💀 ERROR GRAVE: ${error.message}</p>
        <button onclick="window.location.reload()">¡RECARGAR!</button>
      </div>
    `;
  }
}

// Actualización AGRESIVA cada 2 segundos
loadPlayers();
setInterval(loadPlayers, 2000);
