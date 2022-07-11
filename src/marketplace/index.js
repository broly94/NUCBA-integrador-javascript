import { pintarProductosInicio } from './pintarIntroProductos.js';
import { linkProductos } from './aside/linkProductos.js';
import { filtroProductosSelect } from './filtrosProductos.js';
filtroProductosSelect
/** Tags Html Aside */
export const navAside = document.querySelectorAll('.nav-aside');
/** Tags Html productos */
export const divColumn = document.querySelector('.productos-column');

const indexProductos = (estado) => {

    //Pintar por primera vez en marketplace/productos main
    pintarProductosInicio(estado, divColumn, 2);

    //Pintar productos 
    linkProductos(navAside, divColumn, estado);
    
    filtroProductosSelect(divColumn);

}

export {
    indexProductos,
}