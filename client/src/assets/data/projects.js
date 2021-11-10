import { v4 as uuidv4 } from 'uuid';
import tutienda from '../images/latienda.png';
import portfolio from '../images/portafolio.png';


const projects = [
  {
    id: uuidv4(),
    name: 'Tu Tienda',
    desc:
      'An E-comerce full stack developed on the MERN Stack',
    img: tutienda,
    git: 'https://github.com/Doblepe/La-Tienda',
    link: 'https://www.linkedin.com/feed/update/urn:li:activity:6831484833517080576/',
  },
  {
    id: uuidv4(),
    name: 'Portafolio',
    desc:
      'This is the code for actual page.',
    img: portfolio,
    git: 'https://github.com/Doblepe/Portfolio/tree/master',
    link: "",
  },
  {
    id: uuidv4(),
    name: "Mock project",
    desc:
      'Here I am going to deploy an Angular & Ionic app ',
    img: tutienda,
    git: '',
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Mock project',
    desc:
      'I will deploy here mi blog made with Gatsby. It is going to have two color themes.',
    img: tutienda,
    git: '',
    link: '',
  },
];

export default projects;
