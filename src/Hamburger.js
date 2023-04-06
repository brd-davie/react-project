const menuDropdown = document.querySelector('.dropdown');
const menuItems = document.querySelectorAll('.dropdown-content li a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuDropdown.classList.remove('active');
  });
});
