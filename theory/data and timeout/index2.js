// timeout
window.document.body.style.backgroundColor = 'black';

// таймер вызова ф
const n1 = setTimeout((str) => {
  console.log(str);
}, 2000, 'yahoo');
console.log(n1);

// прервание таймер вызова ф
const n2 = setTimeout((str) => {
  console.log(str);
  clearTimeout(n1);
}, 1000, 'Ура');
console.log(n2);

// интервальный вызов
const n3 = setInterval((str) => {
  console.log(str);
}, 1500, 'Привет!');

// очистка - отмена интервала
setTimeout(() => {
  clearInterval(n3);
}, 4000);

// рекурсия с таймерами
let count = 0;
const timerId = setTimeout(function tick() {
  count++;
  console.log('yahoo2', count);
  if (count < 5) {
    setTimeout(tick, 4000);
  } else if (count < 10) {
    setTimeout(tick, 2000);
  } else if (count < 15) {
    setTimeout(tick, 1000);
  } // настроить внутри функции частоту срабатывания функции.
});

const timer = deadline => {
  const timerBlockHour = document.querySelector('.timer__block_hour');
  const timerBlockMin = document.querySelector('.timer__block_min');
  const timerBlockSec = document.querySelector('.timer__block_sec');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    // const dateStop = Date.parse(deadline);
    console.log('==> dateStop', dateStop);
    const dateNow = Date.now();
    console.log('==> dateNow', dateNow);
    const timeRemaining = dateStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60);
    // console.log('==> timeRemaining', timeRemaining / 1000 / 60 / 60 % 24); // когда нужно посчитать часы когда больше суток!
    return {
      timeRemaining,
      hours,
      minutes,
      seconds,
    };
  };
  const start = () => {
    const timer = getTimeRemaining();
    timerBlockHour.textContent = timer.hours;
    timerBlockMin.textContent = timer.minutes;
    timerBlockSec.textContent = timer.seconds;

    const intervalId = setTimeout(start, 1000);
    if (timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      timerBlockHour.textContent = '00';
      timerBlockMin.textContent = '00';
      timerBlockSec.textContent = '00';
    }
  };
  start();
};
timer('2023/02/08 18:00');

// eacher асинхронная функция через setTimeout (не забивает стек, а весит в webApi)

const eacher = (arr, callback) => {
  let count = 0;
  setTimeout(function eacherTimer() {
    callback(arr[count++]);
    if (count < arr.length) setTimeout(eacherTimer);
  });
};

const techs = ['JS', 'React', 'TS'];

eacher(techs, logTech => {
  console.log('eacher1', logTech);
});

eacher(techs, logTech => {
  console.log('eacher2', logTech);
});

const label = document.createElement('label');
const input = document.createElement('input');
const p = document.createElement('p');
p.style.backgroundColor = 'white';
label.append(input);
document.body.append(label, p);
input.addEventListener('input', () => {
  const value = input.value;
  setTimeout((value) => {
    p.innerText = value;
  }, 3000, value);
});
