import { getLocalStorage, seteLocalStorage } from './localStorage.js';
import { cardBicicletas } from './productos.controlador.js';

const data = getLocalStorage();

const imprimirProductos = () => {

    const navAside = document.querySelectorAll('.nav-aside');
    const divColumn = document.querySelector('.productos-column');

    const linkBicicletas = document.getElementById('bicicletas');
    const linkIndumentaria = document.getElementById('indumentaria');
    const linkGadget = document.getElementById('gadget');
    const linkTecnologia = document.getElementById('tecnologia');

    for (const hijos of navAside) {

        hijos.addEventListener('click', (e) => {
            e.preventDefault();

            const linkSeleccionado = Array.from(document.getElementById(e.target.id).classList);
            const arrayLinks = new Array(linkBicicletas, linkIndumentaria, linkGadget, linkTecnologia);

            switch (e.target.id) {
                case 'bicicletas':
                    cardBicicletas(divColumn, data);
                    if (!linkSeleccionado.includes('disabled')) {
                        for (let i = 0; i < arrayLinks.length; i++) {
                            if (!arrayLinks.includes('disabled')) {
                                arrayLinks[i].classList.remove('disabled');
                                arrayLinks[i].classList.remove('background-aside');
                            }
                            e.target.classList.add('disabled');
                            e.target.classList.add('background-aside');
                        }
                    }
                    break;
                case 'indumentaria':
                    if (!linkSeleccionado.includes('disabled')) {
                        for (let i = 0; i < arrayLinks.length; i++) {
                            if (!arrayLinks.includes('disabled')) {
                                arrayLinks[i].classList.remove('disabled');
                                arrayLinks[i].classList.remove('background-aside');
                            }
                            e.target.classList.add('disabled');
                            e.target.classList.add('background-aside');
                        }
                    }
                    break;
                case 'gadget':
                    if (!linkSeleccionado.includes('disabled')) {
                        for (let i = 0; i < arrayLinks.length; i++) {
                            if (!arrayLinks.includes('disabled')) {
                                arrayLinks[i].classList.remove('disabled');
                                arrayLinks[i].classList.remove('background-aside');
                            }
                            e.target.classList.add('disabled');
                            e.target.classList.add('background-aside');
                        }
                    }
                    break;
                case 'tecnologia':
                    if (!linkSeleccionado.includes('disabled')) {
                        for (let i = 0; i < arrayLinks.length; i++) {
                            if (!arrayLinks.includes('disabled')) {
                                arrayLinks[i].classList.remove('disabled');
                                arrayLinks[i].classList.remove('background-aside');
                            }
                            e.target.classList.add('disabled');
                            e.target.classList.add('background-aside');
                        }
                    }
                    break;
            }
        })
    }
}



const App = () => {

    seteLocalStorage();
    imprimirProductos();

}


App();

