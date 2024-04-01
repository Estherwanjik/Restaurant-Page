import {showHome} from './homepage.js';
import {showMenu} from './menupage.js';
import {showAbout} from './aboutpage.js';

function clearPage () {
    const contentDiv = document.getElementById('content');

    contentDiv.innerHTML = '';
}

function addButton (button, fn) {
    button.addEventListener('click', () => {
        clearPage();
        fn();
    });
}

showHome();

const homeButton = document.getElementById('home');
addButton(homeButton, showHome);

const menuButton = document.getElementById('menu');
addButton(menuButton, showMenu);

const aboutButton = document.getElementById('about');
addButton(aboutButton, showAbout);
