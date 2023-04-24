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

function mudaLocal(destino, titulo, texto, distancia, tempo, img) {
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


const ocupation = document.querySelector(`#ocupation`);
const name = document.querySelector('#name');
const info = document.querySelector('#info');
const nameImg = document.querySelector('#nameImg');

function mudaCrew(ocupacao, nome, informacao, imagem) {
  ocupation.innerText = ocupacao;
  name.innerText = nome;
  info.innerHTML = informacao;
  nameImg.src = imagem;
}

function ativaBola(id) {
  const balls = document.querySelectorAll('.ballsContainer div');
  balls.forEach(valor => valor.id === id ? valor.classList.add('ballActive') : valor.classList.remove('ballActive'));
}

document.addEventListener('click', e => {
  if (e.target.id === 'menu') ativaMenu();

  if (e.target.id === 'moon') {
    mudaLocal('Moon', 'Moon',
      'Moon See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites',
      '384,400 km', '3 days', './../assets/destination/image-moon.webp');
    colocaBorda(e.target.id);
  }
  if (e.target.id === 'mars') {
    mudaLocal('Mars', 'Mars',
      'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
      '225 mil. km', '9 months', './../assets/destination/image-mars.webp');
    colocaBorda(e.target.id);
  };

  if (e.target.id === 'europa') {
    mudaLocal('Europa', 'Europa',
      'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
      '628 mil. km', '3 years', './../assets/destination/image-europa.webp');
    colocaBorda(e.target.id);
  }

  if (e.target.id === 'titan') {
    mudaLocal('Titan', 'Titan',
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
      '1.6 bil. km', '7 years', './../assets/destination/image-titan.webp');
    colocaBorda(e.target.id);
  }

  if(e.target.id === 'ball1'){
    mudaCrew('Commander','Douglas Hurley',
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    './../assets/crew/image-douglas-hurley.webp');
    ativaBola(e.target.id);
  }

  if(e.target.id === 'ball2'){
    mudaCrew('Flight Engineer','Anousheh Ansari',
    'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    './../assets/crew/image-anousheh-ansari.webp');
    ativaBola(e.target.id);
  }

  if(e.target.id === 'ball3'){
    mudaCrew('Pilot','Victor Glover',
    'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    './../assets/crew/image-victor-glover.webp');
    ativaBola(e.target.id);
  }

  if(e.target.id === 'ball4'){
    mudaCrew('Mission Specialist','Mark Shuttleworth',
    'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    './../assets/crew/image-mark-shuttleworth.webp');
    ativaBola(e.target.id);
  }
})



