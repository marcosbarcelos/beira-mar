const time = 3000;
const images = document.getElementsByClassName('slide__image');
const max = images.length;
let currentImageIndex = 0;
const btnMobile = document.getElementById('btnMobile');
const loadingContainer = document.getElementById('loading');
const content = document.getElementById('content')

function loading() {
  setInterval(() => {
    loadingContainer.classList.add('hidden');
    content.classList.remove('hidden')
  }, time);
}
window.addEventListener('load', loading);

function menuMobile() {
  const container = document.getElementById('container');

  if (container.classList.contains('hidden')) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}
btnMobile.addEventListener('click', menuMobile);

function startSlide() {
  //troca de imagem ao decorrer do tempo definido (time)
  setInterval(() => {
    images[currentImageIndex].classList.remove('selected');
    currentImageIndex++;

    if (currentImageIndex >= max) {
      currentImageIndex = 0;
    }
    images[currentImageIndex].classList.add('selected');
  }, time);
}
window.addEventListener('load', startSlide);
