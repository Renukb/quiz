const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = document.getElementById("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  console.log("Clicked the save button");
  e.preventDefault();

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);

  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(7);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
  console.log(highScores);
};
