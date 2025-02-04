import iconPath from '../img/sprite.svg';
import imgFirst from '../img/pj-1-min.jpg';
import imgFirstX from '../img/pj-1@2x-min.jpg';
import imgSecond from '../img/pj-2-min.jpg';
import imgSecondX from '../img/pj-2@2x-min.jpg';
import imgThird from '../img/pj-3-min.jpg';
import imgThirdX from '../img/pj-3@2x-min.jpg';
import imgFour from '../img/pj-4-min.jpg';
import imgFourX from '../img/pj-4@2x-min.jpg';
import imgFive from '../img/pj-5-min.jpg';
import imgFiveX from '../img/pj-5@2x-min.jpg';
import imgSix from '../img/pj-6-min.jpg';
import imgSixX from '../img/pj-6@2x-min.jpg';
import imgSeven from '../img/pj-7-min.jpg';
import imgSevenX from '../img/pj-7@2x-min.jpg';
import imgEight from '../img/pj-8-min.jpg';
import imgEightX from '../img/pj-8@2x-min.jpg';
import imgNine from '../img/pj-9-min.jpg';
import imgNineX from '../img/pj-9@2x-min.jpg';
import imgTen from '../img/pj-10-min.jpg';
import imgTenX from '../img/pj-10@2x-min.jpg';
import { nanoid } from 'nanoid';
const refs = {
  projectsList: document.querySelector('.projects-list'),
};

export const fullProjects = [
  {
    id: 5,
    title: 'Phone book organizer',
    stacks: 'Html, СSS, React, Redux, JSON Web Token (JWT), Material UI',
    link: 'https://organizer-black.vercel.app/',
    src: imgFive,
    srcset: imgFiveX,
  },
  {
    id: 4,
    title: 'movies-overviews, service for search movies and their overviews',
    stacks: 'React, JavaScript, CSS, Git',
    link: 'https://movies-overview-woad.vercel.app/',
    src: imgFour,
    srcset: imgFourX,
  },
  {
    id: 3,
    title: 'Qitchen Sushi-bar web site',
    stacks: 'React, JavaScript, CSS, Git',
    link: 'https://sushi-bar-eta.vercel.app/',
    src: imgThird,
    srcset: imgThirdX,
  },
  {
    id: 2,
    title: '3d modeling&printing web-service',
    stacks: 'Html, JavaScript, SASS, Git',
    link: 'https://eevgenk.github.io/team-project-10g/',
    src: imgSecond,
    srcset: imgSecondX,
  },
  {
    id: 1,
    title: 'web studio web-service',
    stacks: 'Html, JavaScript, BAM, SASS, Git',
    link: 'https://eevgenk.github.io/goit-markup-hw-08/',
    src: imgFirst,
    srcset: imgFirstX,
  },

  // {
  //   id: 6,
  //   title: 'chego jewelry website',
  //   stacks: 'React, JavaScript, Node JS, Git',
  //   link: 'https://github.com/Evhenii18/Our-group-js-project',
  //   src: imgSix,
  //   srcset: imgSixX,
  // },
  // {
  //   id: 7,
  //   title: 'energy flow webservice ',
  //   stacks: 'React, JavaScript, Node JS, Git',
  //   link: 'https://github.com/Evhenii18/Our-group-js-project',
  //   src: imgSeven,
  //   srcset: imgSevenX,
  // },
  // {
  //   id: 8,
  //   title: 'fruitbox online store',
  //   stacks: 'React, JavaScript, Node JS, Git',
  //   link: 'https://github.com/Evhenii18/Our-group-js-project',
  //   src: imgEight,
  //   srcset: imgEightX,
  // },
  // {
  //   id: 9,
  //   title: 'English excellence webservice ',
  //   stacks: 'React, JavaScript, Node JS, Git',
  //   link: 'https://github.com/Evhenii18/Our-group-js-project',
  //   src: imgNine,
  //   srcset: imgNineX,
  // },
  // {
  //   id: 10,
  //   title: 'starlight studio landing page',
  //   stacks: 'React, JavaScript, Node JS, Git',
  //   link: 'https://github.com/Evhenii18/Our-group-js-project',
  //   src: imgTen,
  //   srcset: imgTenX,
  // },
];
console.dir(refs.projectsList);
export const smoothScroll = num => {
  let cardHeight =
    refs.projectsList.firstElementChild.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * num,
    behavior: 'smooth',
  });
};

export const renderProjects = num => {
  const step = 3;
  let markup = '';
  fullProjects.slice(num, num + step).map(project => {
    markup += `<li class="projects-item">
      <img
         src="${project.src}"
         srcset="${project.srcset}"
        alt="project image"
        class="project-img"
      />
      <p class="project-stacks">${project.stacks}</p>
      <div class="projects-box">
        <h3 class="projects-title">${project.title}</h3>
        <a class="projects-link" target="_blank" href="${project.link}"
          >visit
          <svg class="contacts-icon" width="24" height="24">
            <use href="${iconPath}#icon-visit-arrow"></use>
          </svg>
        </a>
      </div>
    </li>`;
  });

  refs.projectsList.insertAdjacentHTML('beforeend', markup);
};
// check
