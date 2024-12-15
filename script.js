document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');
  
  const startScreen = document.getElementById('start-screen');
  const charSelectScreen = document.getElementById('character-selection');
  const gameScreen = document.getElementById('game-screen');
  const startButton = document.getElementById('start-button');
  const playerNameInput = document.getElementById('player-name');
  const charCards = document.querySelectorAll('.card');
  const progressBar = document.getElementById('progress-bar');
  
  let playerName = '';
  let progress = 0;

  startButton.addEventListener('click', () => {
    playerName = playerNameInput.value.trim();
    if (!playerName) {
      alert('Please enter your name!');
      return;
    }
    console.log('Starting the game for player:', playerName);
    startScreen.classList.add('hidden');
    charSelectScreen.classList.remove('hidden');
  });

  charCards.forEach(card => {
    card.addEventListener('click', () => {
      console.log('Character selected:', card.dataset.character);
      charSelectScreen.classList.add('hidden');
      gameScreen.classList.remove('hidden');
    });
  });
});
