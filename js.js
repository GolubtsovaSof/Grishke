document.addEventListener('DOMContentLoaded', () => {
    const this_data = new Date("July 8, 2020 00:00:00");
    console.log(this_data)
    
    const daysVal = document.querySelectorAll('.time-count__days .time-count__val');
    const hoursVal = document.querySelectorAll('.time-count__hours .time-count__val');
    const minutesVal = document.querySelectorAll('.time-count__minutes .time-count__val');
    const secondsVal = document.querySelectorAll('.time-count__seconds .time-count__val');
  
    const daysText = document.querySelectorAll('.time-count__days .time-count__text');
    const hoursText = document.querySelectorAll('.time-count__hours .time-count__text');
    const minutesText = document.querySelectorAll('.time-count__minutes .time-count__text');
    const secondsText = document.querySelectorAll('.time-count__seconds .time-count__text');
  
    function declOfNum(number, titles) {  
        let cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }
  
    const timeCount = () => {
        let now = new Date();
        let leftUntil = now-this_data;
        
        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
        let seconds = Math.floor(leftUntil / 1000) % 60;
  
        daysVal[0].textContent = days;
        hoursVal[0].textContent =  hours;
        minutesVal[0].textContent = minutes;
        secondsVal[0].textContent = seconds;
  
        daysText[0].textContent = declOfNum(days, ['день', 'дня', 'дней']);
        hoursText[0].textContent = declOfNum(hours, ['час', 'часа', 'часов']);
        minutesText[0].textContent = declOfNum(minutes, ['минута', 'минуты', 'минут']);
        secondsText[0].textContent = declOfNum(seconds, ['секунда', 'секунды', 'секунд']);
    };
  
    timeCount();
    setInterval(timeCount, 1000);
  });
