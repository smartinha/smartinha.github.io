const themeToggle = document.querySelector('.theme-toggle');
const savedTheme = localStorage.getItem('abbos-theme');
const form = document.querySelector('#contact-form');
const message = document.querySelector('#form-message');

function setTheme(theme) {
  document.body.classList.toggle('dark', theme === 'dark');
  themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

setTheme(savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

themeToggle.addEventListener('click', () => {
  const nextTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
  setTheme(nextTheme);
  localStorage.setItem('abbos-theme', nextTheme);
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  message.textContent = 'Thanks. Your note is ready to send when contact details are connected.';
  form.reset();
});

document.querySelector('#year').textContent = new Date().getFullYear();
