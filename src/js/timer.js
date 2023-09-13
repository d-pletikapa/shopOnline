export const timerInit = () => {
  const timer = (deadline) => {
    const timerBlock = document.querySelector('.timer');
    const timerBlockDay = document.querySelector(
        '.main__counter--day');
    const timerBlockHour = document.querySelector(
        '.main__counter--hour');
    const timerBlockMin = document.querySelector(
        '.main__counter--minute');
    const timerBlockSec = document.querySelector(
        '.main__counter--second');
  
    const dayText = document.querySelector('.main__text--day');
    const hourText = document.querySelector('.main__text--hour');
    const minuteText = document.querySelector('.main__text--minute');
    const secondText = document.querySelector('.main__text--second');
  
    const getUtcTime = (date, offsetUtc) => {
      const timeStamp = date.getTime();
      const offsetTime = date.getTimezoneOffset() * 6e4;
      const utcTime = timeStamp + offsetTime;
      const newDate = new Date(utcTime + (36e5 * offsetUtc));
      return newDate.getTime();
    };
  
    const getTimeLeft = () => {
      const timeStampStop = getUtcTime(new Date(deadline), 3);
      timerBlock.dataset.deadline = new Date(timeStampStop).toLocaleString();
      const timeStampNow = new Date().getTime();
      // const timeStampNow = getUtcTime(new Date(), 3);
      const timeRemaining = timeStampStop - timeStampNow;
      const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
      // console.log('==> days', days);
      const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
      // console.log('==> hours', hours);
      const minutes = Math.floor(timeRemaining / 1000 / 60 % 60);
      // console.log('==> minutes', minutes);
      const seconds = Math.floor(timeRemaining / 1000 % 60);
      // console.log('==> seconds', seconds);
      return {
        timeRemaining,
        days,
        hours,
        minutes,
        seconds,
      };
    };
  
    const localization = {
      ru: {
        day: ['день', 'дня', 'дней'],
        hour: ['час', 'часа', 'часов'],
        minute: ['минута', 'минуты', 'минут'],
        second: ['секунда', 'секунды', 'секунд'],
        get(num, type) {
          // const result = null;
          if (type === 'day') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.day[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.day[0];
                case 2:
                case 3:
                case 4:
                  return this.day[1];
                default:
                  return this.day[2];
              }
            }
          } else if (type === 'hour') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.hour[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.hour[0];
                case 2:
                case 3:
                case 4:
                  return this.hour[1];
                default:
                  return this.hour[2];
              }
            }
          } else if (type === 'minute') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.minute[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.minute[0];
                case 2:
                case 3:
                case 4:
                  return this.minute[1];
                default:
                  return this.minute[2];
              }
            }
          } else if (type === 'second') {
            const preLastDigit = num % 100 / 10;
            if (preLastDigit === 1 || num >= 10 && num <= 20) {
              return this.second[2];
            } else {
              switch (num % 10) {
                case 1:
                  return this.second[0];
                case 2:
                case 3:
                case 4:
                  return this.second[1];
                default:
                  return this.second[2];
              }
            }
          }
        },
      },
    };
  
    const renderNumbers = () => {
      const timer = getTimeLeft();
      timerBlockDay.textContent = `${timer.days}`;
      timerBlockHour.textContent = `${timer.hours}`;
      timerBlockMin.textContent = `${timer.minutes}`;
      timerBlockSec.textContent = `${timer.seconds}`;
    };
  
    const renderLocalization = () => {
      const timer = getTimeLeft();
      dayText.textContent = localization.ru.get(timer.days, 'day');
      // console.log('==> thisLocalization.day', thisLocalization.day);
      hourText.textContent = localization.ru.get(timer.hours, 'hour');
      // console.log('==> thisLocalization.hour', thisLocalization.hour);
      minuteText.textContent = localization.ru.get(timer.minutes, 'minute');
      // console.log('==> thisLocalization.min', thisLocalization.minute);
      secondText.textContent = localization.ru.get(timer.seconds, 'second');
    };
  
    const hideTimer = () => {
      timerBlock.style.display = 'none';
    };
    const checkForMode2 = () => {
      const timer = getTimeLeft();
      if (timer.timeRemaining <= 864e+5) {
        timerBlockDay.style.display = 'none';
        dayText.style.display = 'none';
        timerBlockSec.style.display = 'inline-block';
        secondText.style.display = 'inline-block';
      }
    };
    const init = () => {
      renderNumbers();
      renderLocalization();
      const timer = getTimeLeft();
      const interval = setTimeout(init, 1000);
      checkForMode2();
      if (timer.timeRemaining <= 0) {
        clearTimeout(interval);
        timerBlockDay.textContent = '00';
        timerBlockHour.textContent = '00';
        timerBlockMin.textContent = '00';
        timerBlockSec.textContent = '00';
  
        dayText.textContent = 'дней';
        hourText.textContent = 'часов';
        minuteText.textContent = 'минут';
        secondText.textContent = 'секунд';
        setTimeout(hideTimer, 3000);
      }
    };
    init();
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    const getAllTimerBlocks = document.querySelectorAll('[data-timer-deadline]');
    if (getAllTimerBlocks) {
      getAllTimerBlocks.forEach(elem => {
        elem.insertAdjacentHTML('afterbegin', `
  <p class="main__subtitle">До конца акции:</p>
    <time class="main__text-counter" datetime="${deadline}" aria-label="Акция истекает ${deadline}">
      <span class="main__counter main__counter--day" aria-labelledby="main__text--day"></span>
      <span class="main__text main__text--day" id="main__text--day"></span>
      <span class="main__counter main__counter--hour" aria-labelledby="main__text--hour"></span>
      <span class="main__text main__text--hour" id="main__text--hour"></span>
      <span class="main__counter main__counter--minute" aria-labelledby="main__text--minute"></span>
      <span class="main__text main__text--minute" id="main__text--minute"></span>
      <span class="main__counter main__counter--second" style="display: none" aria-labelledby="main__text--second"></span>
      <span class="main__text main__text--second" style="display: none" id="main__text--second"></span>
    </time>
        `);
      });
    }
    timer(deadline);
  });
  
  const deadline = '2024/02/10 14:53';
};
