const theme_set = (toggled) => {
  document.getElementById('style-windows').disabled = toggled;
  document.getElementById('style-mac').disabled = !toggled;
  localStorage.setItem('theme-toggled', toggled ? '1' : '');
}

const themeToggle = () => {
  theme_set(!document.getElementById('style-windows').disabled);
}

theme_set(localStorage.getItem('theme-toggled'));