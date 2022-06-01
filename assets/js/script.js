const time = 3000;
const images = document.getElementsByClassName('slide__image');
const max = images.length;
let currentImageIndex = 0;
const btnMobile = document.getElementById('btnMobile');

function menuMobile() {
  const container = document.getElementById('container');

  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}
btnMobile.addEventListener('click', menuMobile);

function nextImage() {
  images[currentImageIndex].classList.remove('selected');
  currentImageIndex++;

  if (currentImageIndex >= max) {
    currentImageIndex = 0;
  }
  images[currentImageIndex].classList.add('selected');
}

function startSlide() {
  setInterval(() => {
    //troca de imagem ao decorrer do tempo definido (time)
    nextImage();
  }, time);
}
window.addEventListener('load', startSlide);
