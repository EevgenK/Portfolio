import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import 'normalize.css';
import './js/headerModal.js';

import './js/workTogetther';
import './js/faq.js';
import './js/myProjects';
import './js/themeColorToggle.js';
import { parseReviews } from './js/reviews.js';

// DARK MODE

// const darkModeBtn = document.querySelector('.dark-mode-btn');

// darkModeBtn.addEventListener('click', function() {
//   // Переключаем класс для темной темы
//   darkModeBtn.classList.toggle('dark-mode-active');

//   // Дополнительно: можно переключать темную тему на всем сайте
//   document.body.classList.toggle('dark-mode');
// });

parseReviews();
