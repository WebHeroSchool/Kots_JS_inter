const easyCheck = document.getElementById('easyCheck');
const midCheck = document.getElementById('midCheck');
const heavyCheck = document.getElementById('heavyCheck');
const easyLvl = document.getElementById('easyLvl');
const midLvl = document.getElementById('midLvl');
const heavyLvl = document.getElementById('heavyLvl');
const btn = document.getElementById('confirmBtn');
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

btn.addEventListener('click', startGame(lvl));

function startGame(level) {

}
