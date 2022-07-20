import { pintarProductosInicio } from './pintarIntroProductos.js';
import { navAsideProductos, navSelectProductos } from './navProductos.js';
import { filtroProductosSelect, filtroProductosInput } from './filtrosProductos.js';
import { indexCarrito } from "../carrito/index.js";

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
    
    //Pintar productos aside
    navAsideProductos(navAside, divColumn, estado);

    //Pintar productos selectProductos mobile
    navSelectProductos(divColumn, estado);

    //Carrito de compras
    indexCarrito(divColumn);
    
}

export {
    indexProductos,
}