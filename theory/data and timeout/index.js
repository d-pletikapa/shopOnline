// Date
window.document.body.style.backgroundColor = 'black';

console.dir(Date);
console.log(new Date(2021, 7, 24));
// timestamp
console.log(new Date(1629770400000));
console.log('get time', new Date(0).getTime());

console.log(new Date('August 24 2021 04:00'));
console.log(Date.now());
console.log(Date.parse('August 24 1812 04:00'));

const date = new Date();
console.log(date);
console.log(date.getTimezoneOffset());

console.table({
  'число месяца': date.getDate(),
  'день недели (0-воскресенье)': date.getDay(),
  'год': date.getFullYear(),
  'месяц': date.getMonth(),
  'час': date.getHours(),
  'минута': date.getMinutes(),
  'секунда': date.getSeconds(),
  'миллисекунда': date.getMilliseconds(),
});

date.setDate(15);
date.setFullYear(2025);
date.setMonth(12);
date.setHours(9);
date.setMinutes(10);

date.setMonth(date.getMonth() + 6);

const option = {
  timeZone: 'Asia/Omsk',
  weekday: 'short',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
};
console.log('==> date', date);
console.log(date.toLocaleString('ru', option));
console.log(date.toLocaleString('en', option));
console.log(date.toLocaleString('fr', option));
console.log(date.toLocaleString('es', option));
console.log(date.toLocaleString('ja', option));
console.log(date.toLocaleString('ko', option));
