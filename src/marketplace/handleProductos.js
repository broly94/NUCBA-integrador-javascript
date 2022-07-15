import {
	cardBicicletas,
	cardIndumentaria,
	cardGadget,
	cardTecnologia,
} from "./productos.draw.js";

import { cantidadResultados } from "./cantidadResultados.js";

const selectFiltro = document.getElementById("select-filtro");

const linkBicicletas = document.getElementById("bicicletas");
const linkIndumentaria = document.getElementById("indumentaria");
const linkGadget = document.getElementById("gadget");
const linkTecnologia = document.getElementById("tecnologia");

const arrayLinks = [
	linkBicicletas,
	linkIndumentaria,
	linkGadget,
	linkTecnologia,
];

export const handleProductos = (navAside, divColumn, estado) => {
	
	for (const hijos of navAside) {

		//console.log(hijos); //Descomentar para usar

		hijos.addEventListener("click", (e) => {
			e.preventDefault();

			// Si se hace click en el menu del aside =  case;
			switch (e.target.id) {
				case "bicicletas":
					//Resetea el div donde se pintan los productos
					divColumn.innerHTML = "";
					//Pinta los productos segun el link del aside que seleccione
					cardBicicletas(divColumn, estado);
					//Toggle active del aside y resetea el 
					asideActiveToggle(arrayLinks, e);
					//Resetea todos los filtros
					resetearFiltros(selectFiltro);
					break;

				case "indumentaria":
					divColumn.innerHTML = "";
					cardIndumentaria(divColumn, estado);
					asideActiveToggle(arrayLinks, e);
					resetearFiltros(selectFiltro);
					break;

				case "gadget":
					divColumn.innerHTML = "";
					cardGadget(divColumn, estado);
					asideActiveToggle(arrayLinks, e);
					resetearFiltros(selectFiltro);
					break;

				case "tecnologia":
					divColumn.innerHTML = "";
					cardTecnologia(divColumn, estado);
					asideActiveToggle(arrayLinks, e);
					resetearFiltros(selectFiltro);
					break;
			}
			
			//Pinta la cantidad de resultados devueltos segun la categoria que elija
			cantidadResultados(divColumn);
		});
	}
};

const asideActiveToggle = (arrayLinks, event) => {
	
	const arrayClassMenuAside = Array.from(document.getElementById(event.target.id).classList);

	if (!arrayClassMenuAside.includes("disabled")) {
		for (let i = 0; i < arrayLinks.length; i++) {
			if (!arrayLinks.includes("disabled")) {
				arrayLinks[i].classList.remove("disabled");
				arrayLinks[i].classList.remove(
					"background-aside",
				);
			}
			event.target.classList.add("disabled");
			event.target.classList.add("background-aside");
		}
	}

	
}

const resetearFiltros = (selectFiltro) => {
	selectFiltro.selectedIndex = 0;
}