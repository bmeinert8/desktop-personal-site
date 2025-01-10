import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';




const theme_set = (toggled) => {
  document.getElementById('style-windows').disabled = toggled;
  document.getElementById('style-mac').disabled = !toggled;
  localStorage.setItem('theme-toggled', toggled ? '1' : '');
}

const themeToggle = () => {
  theme_set(!document.getElementById('style-windows').disabled);
}

theme_set(localStorage.getItem('theme-toggled'));

const forgotPassword = () => {
  alert('Type whatever you\'d like, or just press the arrow to sign in!');
}