// Dummy data for market caps
const companies = [
    { name: "Company A", marketCap: 100 },
    { name: "Company B", marketCap: 150 },
    { name: "Company C", marketCap: 200 },
    { name: "Company D", marketCap: 50 }
    // Add more companies as needed
];

let companyAMarketCap = 100; // in billions
let companyBMarketCap = 150; // in billions
let score = [0, 0, 0, 0]; // Initialize scores for 4 players
let timeLeft = 10; // Time in seconds
let timerInterval; // To store the interval function
let currentPlayer = 1; // Initialize to player 1

// Function to toggle between players
function togglePlayers() {
    currentPlayer = (currentPlayer % 4) + 1;
    // Update the display to highlight the current player
    for (let i = 1; i <= 4; i++) {
        const playerScore = document.getElementById(`player${i}Score`);
        if (i === currentPlayer) {
            playerScore.style.fontWeight = "bold";
        } else {
            playerScore.style.fontWeight = "normal";
        }
    }
}


// Function to check the user's guess and update the score
function checkGuess(guess) {
    clearInterval(timerInterval);
    const isCorrect = (guess === "higher" && companyAMarketCap < companyBMarketCap) ||
        (guess === "lower" && companyAMarketCap > companyBMarketCap);

    if (isCorrect) {
        document.getElementById("result").textContent = "Correct!";
        score[currentPlayer - 1]++;
        streak++;  // Increase the streak for a correct guess
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again!";
        streak = 0;  // Reset the streak to zero for an incorrect guess
    }

    togglePlayers(); // Toggle to the next player
    setNewCompanies();
    startTimer();
}

