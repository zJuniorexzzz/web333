<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🌙 MOON TIERLIST</title>
    <style>
        body {
            font-family: 'Courier New', monospace;
            background-color: #121212;
            color: #ffffff;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 800px;
            margin: 0 auto;
        }
        h1 {
            text-align: center;
            color: #6e00ff;
            margin-bottom: 30px;
        }
        #players-list {
            display: grid;
            gap: 15px;
        }
        .player-card {
            background: #1e1e1e;
            border-left: 4px solid #6e00ff;
            padding: 15px;
            border-radius: 8px;
        }
        .player-name {
            color: #6e00ff;
            font-weight: bold;
            margin: 0 0 5px 0;
        }
        .tier {
            margin: 5px 0;
        }
        .modality {
            display: inline-block;
            width: 80px;
            color: #aaa;
        }
        .tier-value {
            background: #333;
            padding: 2px 8px;
            border-radius: 4px;
        }
        .error {
            background: #ffebee;
            color: #d32f2f;
            padding: 15px;
            border-radius: 5px;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌙 MOON TIERLIST</h1>
        <div id="players-list"></div>
    </div>

    <script>
        // URL del JSON (asegúrate que sea pública)
        const JSON_URL = 'https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json?_=' + Date.now();

        // Función para mostrar jugadores (¡VERSIÓN CORREGIDA!)
        function showPlayers(players) {
            const container = document.getElementById('players-list');
            
            if (!players || !Array.isArray(players) {
                container.innerHTML = '<div class="error">Error: Datos no válidos</div>';
                return;
            }

            if (players.length === 0) {
                container.innerHTML = '<p>No hay jugadores registrados aún</p>';
                return;
            }

            // ¡ESTA ES LA PARTE CLAVE QUE ESTABA FALLANDO!
            container.innerHTML = players.map(player => {
                let tiersHTML = '';
                for (const [mod, tier] of Object.entries(player.tiers || {})) {
                    if (tier) {
                        tiersHTML += `
                            <div class="tier">
                                <span class="modality">${mod}:</span>
                                <span class="tier-value">${tier}</span>
                            </div>
                        `;
                    }
                }

                return `
                    <div class="player-card">
                        <div class="player-name">${player.mc_nick || 'Sin nick'}</div>
                        <div>Región: ${player.region || 'N/A'}</div>
                        ${tiersHTML}
                    </div>
                `;
            }).join('');
        }

        // Función para cargar datos
        async function loadPlayers() {
            try {
                console.log("Cargando datos...");
                const response = await fetch(JSON_URL);
                
                if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
                
                const players = await response.json();
                console.log("Datos recibidos:", players);
                
                showPlayers(players);
            } catch (error) {
                console.error("Error:", error);
                document.getElementById('players-list').innerHTML = `
                    <div class="error">
                        <p>Error al cargar datos: ${error.message}</p>
                        <button onclick="window.location.reload()">Recargar</button>
                    </div>
                `;
            }
        }

        // Iniciar carga
        loadPlayers();
        // Actualizar cada 2 segundos
        setInterval(loadPlayers, 2000);
    </script>
</body>
</html>
