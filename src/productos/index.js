import { cardBicicletas } from './productos.draw.js';
/** Tags Html Aside */
const navAside = document.querySelectorAll('.nav-aside');
const linkBicicletas = document.getElementById('bicicletas');
const linkIndumentaria = document.getElementById('indumentaria');
const linkGadget = document.getElementById('gadget');
const linkTecnologia = document.getElementById('tecnologia');
/** Tags Html productos */
const divColumn = document.querySelector('.productos-column');

const indexProductos = (estado) => {

    for (const hijos of navAside) {

        hijos.addEventListener('click', (e) => {

            e.preventDefault();

            const arrayClasesMenuAside = Array.from(document.getElementById(e.target.id).classList);
            const arrayLinks = [linkBicicletas, linkIndumentaria, linkGadget, linkTecnologia]

            // Si se hace click en el menu del aside =  case;
            switch (e.target.id) {
                case 'bicicletas':
                    cardBicicletas(divColumn, estado);
                    if (!arrayClasesMenuAside.includes('disabled')) {
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
                    if (!arrayClasesMenuAside.includes('disabled')) {
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
                    if (!arrayClasesMenuAside.includes('disabled')) {
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
                    if (!arrayClasesMenuAside.includes('disabled')) {
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

export {
    indexProductos,
}