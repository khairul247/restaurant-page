console.log('Webpack is working!');

import { loadHome } from './home';

function initializeWebsite() {
    loadHome(); // Load home page by default
    
    const homeButton = document.getElementById('home');
    const menuButton = document.getElementById('menu');
    const aboutButton = document.getElementById('about');
    
    homeButton.addEventListener('click', loadHome);
    menuButton.addEventListener('click', loadMenu);
    aboutButton.addEventListener('click', loadAbout);
}

initializeWebsite();

