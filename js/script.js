function ativaMenu() {
  const ul = document.querySelector('.ulMenu');
  ul.classList.contains('ulActive') ? ul.classList.remove('ulActive') : ul.classList.add('ulActive');
}

const destinationName = document.querySelector('#destinationName');
const title = document.querySelector('#title');
const text = document.querySelector('#text');
const distance = document.querySelector('#distance');
const time = document.querySelector('#time');
const imgDestination = document.querySelector('#imgDestination');

function mudaLocal(destino, titulo, texto, distancia, tempo, img){
  destinationName.innerText = destino;
  title.innerText = titulo;
  text.innerText = texto;
  distance.innerText = distancia;
  time.innerText = tempo;
  imgDestination.src = img;
}

function colocaBorda(id) {
  const h1 = document.querySelectorAll('.destinationRight ul li h1');
  h1.forEach(valor => valor.id === id ? valor.classList.add('liActive') : valor.classList.remove('liActive'));
}

document.addEventListener('click', e => {
  if (e.target.id === 'menu') ativaMenu();

  if (e.target.id === 'moon') {
    mudaLocal('Moon','Moon',
    'Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites',
    '384,400 km', '3 days', './../assets/destination/image-moon.webp');
    colocaBorda(e.target.id);
  }
  if (e.target.id === 'mars') {
    mudaLocal('Mars','Mars',
    'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    '225 mil. km','9 months','./../assets/destination/image-mars.webp');
    colocaBorda(e.target.id);
  };

  if(e.target.id === 'europa'){
    mudaLocal('Europa','Europa',
    'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    '628 mil. km','3 years','./../assets/destination/image-europa.webp')
    colocaBorda(e.target.id);
  }

  if(e.target.id === 'titan'){
    mudaLocal('Titan','Titan',
    'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    '1.6 bil. km','7 years','./../assets/destination/image-titan.webp')
    colocaBorda(e.target.id);
  }
})



