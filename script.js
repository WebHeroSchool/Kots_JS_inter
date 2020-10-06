const easyCheck = document.getElementById('easyCheck');
const midCheck = document.getElementById('midCheck');
const heavyCheck = document.getElementById('heavyCheck');
const easyLvl = document.getElementById('easyLvl');
const midLvl = document.getElementById('midLvl');
const heavyLvl = document.getElementById('heavyLvl');
const btn = document.getElementById('confirmBtn');
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const cardsIn = document.getElementById('cardsIn');
let lvl = 0;
let cardsInLine = 3;
let cardsLines = 1;
let cardsNumb = 3;

easyLvl.addEventListener('click', () => {
  lvl = 0;
  cardsNumb = 3;
  cardsInLine = 3;
  cardsLines = 1;
  easyCheck.classList.add('selected');
  midCheck.classList.remove('selected');
  heavyCheck.classList.remove('selected');
  cardsIn.classList.add('cardsIn1');
  cardsIn.classList.remove('cardsIn2');
});

midLvl.addEventListener('click', () => {
  lvl = 1;
  cardsNumb = 6;
  cardsInLine = 3;
  cardsLines = 2;
  easyCheck.classList.remove('selected');
  midCheck.classList.add('selected');
  heavyCheck.classList.remove('selected');
  cardsIn.classList.remove('cardsIn1');
  cardsIn.classList.add('cardsIn2');
});

heavyLvl.addEventListener('click', () => {
  lvl = 2;
  cardsNumb = 10;
  cardsInLine = 5;
  cardsLines = 2;
  easyCheck.classList.remove('selected');
  midCheck.classList.remove('selected');
  heavyCheck.classList.add('selected');
  cardsIn.classList.remove('cardsIn1');
  cardsIn.classList.add('cardsIn2');
});

btn.addEventListener('click', startGame(event));

function startGame() {
  return function() {
    menu.classList.add('displayNone');
    game.classList.remove('displayNone');
    for (i = 0; i < cardsLines; i++) {
      const newLine = document.createElement('div');
      newLine.className = 'cardLine';
      let imgStringStart = `<img src="img/card.png" alt="Карта" class="game__card">`;
      let imgStringEnd = ``;
      for (j = 0; j < cardsInLine; j++) {
        imgStringEnd += imgStringStart;
      }
      newLine.innerHTML = `${imgStringEnd}`;
      cardsIn.append(newLine);
    }
  }
}
