// URL directa al archivo players.json en GitHub (asegúrate de que sea pública)
const JSON_URL = 'https://raw.githubusercontent.com/zJuniorexzzz/moonTLEZ/main/players.json';

async function loadPlayers() {
    try {
        const response = await fetch(JSON_URL);
        const players = await response.json();
        displayPlayers(players);
    } catch (error) {
        console.error("Error cargando datos:", error);
        document.getElementById('players-list').innerHTML = 
            '<p class="error">❌ No se pudieron cargar los datos. Intenta más tarde.</p>';
    }
}

function displayPlayers(players) {
    const container = document.getElementById('players-list');
    container.innerHTML = '';

    players.forEach(player => {
        const playerCard = document.createElement('div');
        playerCard.className = 'player-card';

        let tiersHTML = '';
        for (const [modality, tier] of Object.entries(player.tiers)) {
            if (tier) {
                tiersHTML += `<div class="tier"><strong>${modality}:</strong> ${tier}</div>`;
            }
        }

        playerCard.innerHTML = `
            <div class="player-name">${player.mc_nick}</div>
            <div class="player-region">${player.region || 'N/A'}</div>
            ${tiersHTML}
        `;

        container.appendChild(playerCard);
    });
}

// Cargar datos al abrir la página
document.addEventListener('DOMContentLoaded', loadPlayers);