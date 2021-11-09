import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import tutienda from '../images/latienda.png';
import portfolio from '../images/portafolio.png';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

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
      'This is the code for these page.',
    img: portfolio,
    git: 'https://github.com/Doblepe/Portfolio/tree/master',
    link: '',
  },
  {
    id: uuidv4(),
    name: 'Coin Tracker',
    desc:
      'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
    img: CoinTrackerImg,
    git: 'https://github.com/Doblepe/La-Tienda',
    link: 'https://la-tienda.netlify.app/',
  },
  {
    id: uuidv4(),
    name: "Cavin's Portfolio",
    desc:
      'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
    img: CavinImg,
    git: 'https://github.com/Doblepe/La-Tienda',
    link: 'https://la-tienda.netlify.app/',
  },
  {
    id: uuidv4(),
    name: 'Tracking Soft',
    desc:
      'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
    img: ProjectImg,
    git: 'https://github.com/Doblepe/La-Tienda',
    link: 'https://la-tienda.netlify.app/',
  },
];

export default projects;
