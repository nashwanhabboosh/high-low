const highScores = [];
const highScoresList = document.getElementById("highScores");

function updateLeaderboard(score) {
  highScores.push(score);
  highScores.sort((a, b) => b - a); // Sort scores in descending order
  highScores.splice(10); // Keep the top 10 scores

  highScoresList.innerHTML = highScores
    .map((score, index) => `<li>${index + 1}. Score: ${score}</li>`)
    .join("");
}
