// Assuming 'eByClass' is a typo and it should be 'document.getElementsByClassName'
// This function will show the leaderboard when called
function showLeaderboard() {
  // Code to display the leaderboard goes here
  console.log('Leaderboard displayed');
}

// Adding event listener to the first element with the class 'leaderboard-button'
document.getElementsByClassName('leaderboard-button')[0].addEventListener('click', showLeaderboard);
