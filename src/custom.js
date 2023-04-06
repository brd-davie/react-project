window.addEventListener('load', () => {

  const openBtn = document.querySelector('.open-modal-btn');
  const closeBtn = document.querySelector('.close-modal-btn');
  const modalContainer = document.querySelector('.modal-container');

  openBtn.addEventListener('click', function () {
    modalContainer.style.display = "block";
    document.body.style.overflow = 'hidden';
    modalContainer.querySelector('iframe').src = 'https://www.youtube.com/embed/F5DMjhg3A6c';
  })

  closeBtn.addEventListener('click', function () {
    modalContainer.style.display = "none";
    modalContainer.querySelector('iframe').src = '';
    document.body.style.overflow = 'scroll';
  })

  // window.addEventListener('click', function (e) {
  //   if (e.target === modalContainer) {
  //     modalContainer.style.display = "none"
  //     modalContainer.querySelector('iframe').src = '';
  //   }
  // })

  const imgWrapper = document.querySelector('.c-gallery');
  const img = document.querySelector('.gallery-img');

  const toggleFullScreen = () => {
    img.requestFullscreen()
  }

  imgWrapper.addEventListener('click', toggleFullScreen);
})


