import { pintarProductosInicio } from './pintarIntroProductos.js';
import { handleProductos } from './handleProductos.js';
import { filtroProductosSelect, filtroProductosInput } from './filtrosProductos.js';

/** Tags Html Aside */
export const navAside = document.querySelectorAll('.nav-aside');
/** Tags Html productos */
export const divColumn = document.querySelector('.productos-column');

const indexProductos = (estado) => {

    //Pintar por primera vez en marketplace/productos main
    pintarProductosInicio(estado, divColumn, 1);

    //Filtrar productos por mayor o menor precio
    filtroProductosSelect(divColumn);

    //Filtrar productos mediante input por marca de producto
    filtroProductosInput(divColumn);
    
    //Pintar productos 
    handleProductos(navAside, divColumn, estado);
    
}

export {
    indexProductos,
}