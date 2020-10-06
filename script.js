const easyCheck = document.getElementById('easyCheck');
const midCheck = document.getElementById('midCheck');
const heavyCheck = document.getElementById('heavyCheck');
const easyLvl = document.getElementById('easyLvl');
const midLvl = document.getElementById('midLvl');
const heavyLvl = document.getElementById('heavyLvl');
const btn = document.getElementById('confirmBtn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
let lvl = 0;

easyLvl.addEventListener('click', () => {
  lvl = 0;
  easyCheck.classList.add('selected');
  midCheck.classList.remove('selected');
  heavyCheck.classList.remove('selected');
});
midLvl.addEventListener('click', () => {
  lvl = 1;
  easyCheck.classList.remove('selected');
  midCheck.classList.add('selected');
  heavyCheck.classList.remove('selected');
});
heavyLvl.addEventListener('click', () => {
  lvl = 2;
  easyCheck.classList.remove('selected');
  midCheck.classList.remove('selected');
  heavyCheck.classList.add('selected');
});

btn.addEventListener('click', startGame(event));

function startGame() {
  return function() {
    menu.classList.add('displayNone');
    game.classList.remove('displayNone');
    for (i = 0; i <= lvl; i++) {
      console.log(i);
      const newLine = document.createElement('div');
      newLine.className = 'cardLine';
      newLine.innerHTML = `<img src="img/card.png" alt="Карта" class="game__card">
      <img src="img/card.png" alt="Карта" class="game__card">
      <img src="img/card.png" alt="Карта" class="game__card">`;
      game.append(newLine);
    }
    if (lvl === 0) {
      game.classList.add('game_easy');
    } else if (lvl === 1) {
      game.classList.add('game_mid');
    } else {
      game.classList.add('game_heavy');
    }
  }
}
