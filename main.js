import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

const time = dayjs().format('h:mm A');
const today = dayjs().format('MM/D/YYYY');
const macToday = dayjs().format('dd MMM D');

console.log(macToday)

document.querySelector('.js-nav-date')
  .innerHTML = 
  `
    <p>${time}</p>
    <p>${today}</p>
  `;

document.querySelector('.js-mac-date')
  .innerHTML = 
  `
    <p>${macToday}</p>
    <p>${time}</p>
  `;


