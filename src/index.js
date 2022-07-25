import { getLocalStorage, seteLocalStorage } from './config/localStorage.js';
import { initMapa } from './mapa/index.js';
import { indexProductos } from './marketplace/index.js';

const App = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const url = window.location.pathname;
        const estado = getLocalStorage();
        seteLocalStorage();
        switch(url) {
            case '/index.html':
            initMapa();
            break;
            case '/':
            initMapa();
            break;
            case '/marketplace.html': 
            indexProductos(estado);
            break;
        }
    })
}

App();

