import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import Work1 from './assets/project-1.jpeg';
import Work2 from './assets/project-2.jpg';
import Work3 from './assets/project-3.jpeg';
import Work4 from './assets/project-4.jpeg';
import Work5 from './assets/project-5.jpg';
import Work6 from './assets/project-6.jpg';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  // {
  //   id: 3,
  //   name: 'Portfolio',
  //   icon: <FaFolderOpen className='nav__icon' />,
  //   path: '/portfolio',
  // },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Dhruv',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Bandi',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '20 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Indian',
  },

  {
    id: 5,
    title: 'Freelance : ',
    description: 'Available',
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'India',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '+9191310XXXXX',
  },

  {
    id: 8,
    title: 'Langages : ',
    description: 'Hindi, English',
  },
  {
    id: 9,
    title: 'Email : ',
    description: 'dhruvbaXXXXX@gmail.com',
  },

];

export const stats = [
  {
    id: 1,
    no: '1+',
    title: 'Years of <br /> Experience',
  },

  {
    id: 2,
    no: '2+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '5+',
    title: 'Happy <br /> Customers',
  },

  {
    id: 4,
    no: '1+',
    title: ' Awards <br /> Won',
  },
];

export const resume = [
  {
    id: 1,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023',
    title: 'Web Developer: <span> Mini-Project </span>',
    desc: 'Front-End Developement of Medical - Website',
  },

  {
    id: 2,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 ',
    title: 'UI/UX Designer: <span> Mini-Project </span>',
    desc: 'Figma Design in a Medical Website',
  },

  {
    id: 3,
    category: 'experience',
    icon: <FaBriefcase />,
    year: '2023 ',
    title: 'TA: <span> Computer Programming</span>',
    desc: `Teacher's Assistant in LNM Institue of Technology `,
  },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2005 - 2013',
  //   title: 'Consultant: <span> Videohive </span>',
  //   desc: 'Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2018-2019',
    title: '10th School: <span> Choithram School Nipania , Indore (MP)</span>',
    desc: '93% in 10th Class ',
  },
  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2020-2021',
    title: '12th School: <span> Green Field Public School, Indore (MP)</span>',
    desc: '81% in 12th Class ',
  },



  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2021-2025',
    title: 'Bachelor Degree: <span> LNM Institute of Information Technology , Jaipur (Rajasthan)</span>',
    desc: 'CGPA: 7.27',
  },
];

export const skills = [
  {
    id: 1,
    title: 'Html',
    percentage: '65',
  },

  {
    id: 2,
    title: 'Javascript',
    percentage: '50',
  },

  {
    id: 3,
    title: 'Css',
    percentage: '70',
  },

  {
    id: 4,
    title: 'Flutter',
    percentage: '25',
  },

  {
    id: 5,
    title: 'Dart',
    percentage: '70',
  },

  {
    id: 6,
    title: 'SQL',
    percentage: '85',
  },

  {
    id: 7,
    title: 'React',
    percentage: '55',
  },
  {
    id:8,
    title:'DSA',
    percentage:'40',
  },

  {
    id:9,
    title:'DBMS',
    percentage:'75',
  },
  {
    id:10,
    title:'OS',
    percentage:'40',
  },
  {
    id:11,
    title:'AP',
    percentage:'35',
  },
  {
    id:12,
    title:'CP',
    percentage:'70',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Website Design',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React JS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Video Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Video',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Premium',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Landing Page',
    details: [
      {
        title: 'Project : ',
        desc: 'Website',
      },
      {
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        title: 'Language : ',
        desc: 'React JS, Node JS',
      },
      {
        title: 'Preview : ',
        desc: 'www.dribble.com',
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Photo Editing',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Photo',
      },
      {
        icon: <FiUser />,
        title: 'Client : ',
        desc: 'Dribble',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'Adobe Photoshop',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'www.dibble.com',
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
