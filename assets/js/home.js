const loadingContainer = document.getElementById('loading');
const content = document.getElementById('content');
const time = 3000;
const images = document.getElementsByClassName('slide__image');
const max = images.length;
let currentImageIndex = 0;

function loading() {
  //adiciona display none na div de loading e remove da div principal após o conteúdo já ter carregado(em torno de 4s).
  setInterval(() => {
    loadingContainer.classList.add('hidden');
    content.classList.remove('hidden');
  }, 4000);
}
window.addEventListener('load', loading);

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
