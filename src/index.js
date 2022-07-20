import { getLocalStorage, seteLocalStorage } from './config/localStorage.js';
import { indexProductos } from './marketplace/index.js';

const App = () => {
    document.addEventListener('DOMContentLoaded', () => {
        const estado = getLocalStorage();
        seteLocalStorage();
        indexProductos(estado);

    })
}

App();

