// Get references to player selection buttons
const twoPlayersButton = document.getElementById("twoPlayersButton");
const threePlayersButton = document.getElementById("threePlayersButton");
const fourPlayersButton = document.getElementById("fourPlayersButton");

// Player selection event listeners
twoPlayersButton.addEventListener("click", () => startGame(2));
threePlayersButton.addEventListener("click", () => startGame(3));
fourPlayersButton.addEventListener("click", () => startGame(4));

// Function to initialize the game with the selected number of players
function startGame(numPlayers) {
    // Remove the player selection screen
    const container = document.getElementById("container");
    container.innerHTML = "";

    // Initialize game variables based on the number of players
    let players = [];
    for (let i = 1; i <= numPlayers; i++) {
        players.push({ score: 0 });
    }

    initializeGame(players);
}

function initializeGame(players) {

}

