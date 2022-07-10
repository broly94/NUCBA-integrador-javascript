import { cardBicicletas, cardIndumentaria, cardGadget, cardTecnologia } from "../productos.draw.js";

const linkBicicletas = document.getElementById('bicicletas');
const linkIndumentaria = document.getElementById('indumentaria');
const linkGadget = document.getElementById('gadget');
const linkTecnologia = document.getElementById('tecnologia');

export const linkProductos = (navAside, divColumn, estado) => {

	for (const hijos of navAside) {

		//console.log(hijos); //Descomentar para usar

		hijos.addEventListener("click", (e) => {
			e.preventDefault();

			const arrayClasesMenuAside = Array.from(
				document.getElementById(e.target.id).classList,
			);
			const arrayLinks = [
				linkBicicletas,
				linkIndumentaria,
				linkGadget,
				linkTecnologia,
			];

			// Si se hace click en el menu del aside =  case;
			switch (e.target.id) {
				case "bicicletas":
					divColumn.innerHTML = "";
					cardBicicletas(divColumn, estado);
					if (!arrayClasesMenuAside.includes("disabled")) {
						for (let i = 0; i < arrayLinks.length; i++) {
							if (!arrayLinks.includes("disabled")) {
								arrayLinks[i].classList.remove("disabled");
								arrayLinks[i].classList.remove(
									"background-aside",
								);
							}
							e.target.classList.add("disabled");
							e.target.classList.add("background-aside");
						}
					}
					break;
				case "indumentaria":
					divColumn.innerHTML = "";
					cardIndumentaria(divColumn, estado);
					if (!arrayClasesMenuAside.includes("disabled")) {
						for (let i = 0; i < arrayLinks.length; i++) {
							if (!arrayLinks.includes("disabled")) {
								arrayLinks[i].classList.remove("disabled");
								arrayLinks[i].classList.remove(
									"background-aside",
								);
							}
							e.target.classList.add("disabled");
							e.target.classList.add("background-aside");
						}
					}
					break;
				case "gadget":
					divColumn.innerHTML = "";
					cardGadget(divColumn, estado);
					if (!arrayClasesMenuAside.includes("disabled")) {
						for (let i = 0; i < arrayLinks.length; i++) {
							if (!arrayLinks.includes("disabled")) {
								arrayLinks[i].classList.remove("disabled");
								arrayLinks[i].classList.remove(
									"background-aside",
								);
							}
							e.target.classList.add("disabled");
							e.target.classList.add("background-aside");
						}
					}
					break;
				case "tecnologia":
					divColumn.innerHTML = "";
					cardTecnologia(divColumn, estado);
					if (!arrayClasesMenuAside.includes("disabled")) {
						for (let i = 0; i < arrayLinks.length; i++) {
							if (!arrayLinks.includes("disabled")) {
								arrayLinks[i].classList.remove("disabled");
								arrayLinks[i].classList.remove(
									"background-aside",
								);
							}
							e.target.classList.add("disabled");
							e.target.classList.add("background-aside");
						}
					}
					break;
			}
		});
	}
};
