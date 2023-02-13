window.document.body.style.backgroundColor = 'black';

// Date
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

// recursion training
function countdown1(n) {
  return n < 1 ? [] : [n, ...countdown1(n - 1)];
}
console.log('==> countdown1(5)', countdown1(5));


// Only change code below this line
function countdown2(n) {
  if (n < 1) {
    return [];
  } else {
    const array = countdown2(n - 1);
    array.unshift(n);
    return array;
  }
}
console.log('==> countdown2(5)', countdown2(5));


// Only change code above this line


function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log('countup(5)', countup(5));

function rangeOfNumbers(startNum, endNum) {
  return endNum < startNum ?
    [] :
    [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log('rangeOfNumbers(1, 6)', rangeOfNumbers(1, 6));

function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}
console.log('sum([2, 3, 4], 2)', sum([2, 3, 4], 2));


function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
console.log('multiply([2, 3, 4], 2)', multiply([2, 3, 4], 2));

// debounce function implementation training

const label = document.createElement('label');
const input = document.createElement('input');
const p = document.createElement('p');
p.style.backgroundColor = 'white';
label.append(input);
document.body.append(label, p);


const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
};

input.addEventListener('input', debounce(() => {
  const value = input.value;
  p.innerText = value;
}, 300));

