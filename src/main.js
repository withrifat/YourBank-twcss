
// for dark mode code
document.documentElement.classList.remove('dark');
document.getElementById('switch').addEventListener('click', function () {
  document.documentElement.classList.toggle('dark');
});
