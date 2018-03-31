var btn = document.getElementById('btn');
var menu = document.querySelector('.menu');
btn.addEventListener('click', showHide);
function showHide() {
  menu.classList.toggle('header_menu_active');
}