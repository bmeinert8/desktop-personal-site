import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const time = dayjs().format('h:mm A');
const today = dayjs().format('MM/D/YYYY');
console.log(today);
console.log(time);

document.querySelector('.js-nav-date')
  .innerHTML = 
  `<p>${time}</p>
  <p>${today}</p>`
