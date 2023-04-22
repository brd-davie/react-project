  // const imgWrapper = document.querySelector('.c-gallery');
  // const img = document.querySelector('.gallery-img');

  // const toggleFullScreen = () => {
  //   img.requestFullscreen()
  // }

  // imgWrapper.addEventListener('click', toggleFullScreen);

//hamburger
// document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.svg-label');
  const menuDropdown = document.querySelector('.dropdown-content');
  const menuItems = document.querySelectorAll('.dropdown-content li a');

  if (menuBtn){
    menuBtn.addEventListener('click', () => {
      console.log("clicked")
      menuDropdown.classList.toggle('hidden');
    });
  }

  if (menuItems){
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        menuDropdown.classList.add('hidden');
      });
    });
  }
// });