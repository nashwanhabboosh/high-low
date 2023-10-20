// Dummy data for market caps
const companies = [
    {name: "Company A", marketCap: 100},
    {name: "Company B", marketCap: 150},
    {name: "Company C", marketCap: 200},
    {name: "Company D", marketCap: 50},
    // Add more companies as needed
];

let companyAMarketCap = 100; // in billions
let companyBMarketCap = 150; // in billions
let score = 0; // Initialize the score
let level = 1; // Initialize the level
let streak = 0; // Initialize the streak
let timeLeft = 10; // Time in seconds
let timerInterval; // To store the interval function


// Function to get a random company based on the current difficulty level
function getRandomCompany(difficulty) {
    let filteredCompanies = companies.filter(company => company.marketCap <= difficulty);
    return filteredCompanies[Math.floor(Math.random() * filteredCompanies.length)];
}

// Function to set new companies for the game round
function setNewCompanies() {
    const difficulty = 200 - (level * 10);
    const companyAData = getRandomCompany(difficulty);
    let companyBData = getRandomCompany(difficulty);
    while (companyAData === companyBData) {
        companyBData = getRandomCompany(difficulty);
    }

    companyAMarketCap = companyAData.marketCap;
    companyBMarketCap = companyBData.marketCap;

    document.getElementById("companyAMarketCap").textContent = `$${companyAMarketCap} billion`;
    document.getElementById("companyBMarketCap").textContent = `$${companyBMarketCap} billion`;
}


// Function to check the user's guess and update the score and level
function checkGuess(guess) {
    clearInterval(timerInterval);
    const isCorrect = (guess === "higher" && companyAMarketCap < companyBMarketCap) || 
                      (guess === "lower" && companyAMarketCap > companyBMarketCap);

    if (isCorrect) {
        document.getElementById("result").textContent = "Correct!";
        score++;
        level++;
        streak++;  // Increase the streak for a correct guess
    } else {
        document.getElementById("result").textContent = "Incorrect. Try again!";
        streak = 0;  // Reset the streak to zero for an incorrect guess
    }

    document.getElementById("score").textContent = score;
    document.getElementById("streak").textContent = streak;  // Update the streak display
    setNewCompanies();
    startTimer();
}

function startTimer() {
    // Reset the timer
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;

    // Clear any existing timer intervals
    clearInterval(timerInterval);

    // Start the timer
    timerInterval = setInterval(function() {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        // Time's up
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("result").textContent = "Time's up! Incorrect. Try again!";
            setNewCompanies(); // Set new companies for the next round
        }
    }, 1000);
}



// Set initial companies when the page loads
setNewCompanies();

// Attach event listeners to the buttons
document.getElementById("higherButton").addEventListener("click", () => checkGuess("higher"));
document.getElementById("lowerButton").addEventListener("click", () => checkGuess("lower"));
