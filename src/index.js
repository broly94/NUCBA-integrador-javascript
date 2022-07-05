import { getLocalStorage, seteLocalStorage } from './config/localStorage.js';
import { indexProductos } from './productos/index.js';

// Estado de LocalStorage

const App = () => {
    
    const estado = getLocalStorage();
    seteLocalStorage();
    indexProductos(estado);

}


App();

