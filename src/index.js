console.log('Webpack is working!');

import loadHomePage from './home';
import './style.css';

document.addEventListener('DOMContentLoaded', () => {
    loadHomePage();

    document.getElementById('home').addEventListener('click', loadHomePage);
    document.getElementById('menu').addEventListener('click', () => {
        const content = document.getElementById('content');
        content.innerHTML = '<h1>Menu</h1><p>Our delicious menu will be listed here.</p>';
    });
});
