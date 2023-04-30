  // const imgWrapper = document.querySelector('.c-gallery');
  // const img = document.querySelector('.gallery-img');

  // const toggleFullScreen = () => {
  //   img.requestFullscreen()
  // }

  // imgWrapper.addEventListener('click', toggleFullScreen);

//hamburger
document.addEventListener("DOMContentLoaded", () => {

  if(('#custom-hamburger').length > 0){
    const menuBtn = document.querySelector('#custom-hamburger');
    const menuDropdown = document.querySelector('#menu-dropdown');
    const menuItems = document.querySelectorAll('#menu-dropdown li a');

      menuBtn.addEventListener('click', () => {
        menuDropdown.classList.toggle('hidden');
      });

      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          menuDropdown.classList.add('hidden');
        });
      });
  }
})