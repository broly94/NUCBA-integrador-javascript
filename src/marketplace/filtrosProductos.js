import { cantidadResultados } from './cantidadResultados.js';
import { arrayLinks } from './handleProductos.js';

export const filtroProductosSelect = (divColumn) => {

	const selectFiltro = document.getElementById("select-filtro");

	selectFiltro.addEventListener("change", (e) => {

		const valueSelect = e.target.value;

		const arrayNodos = Array.from(divColumn.childNodes).filter((element) => element.nodeName === "DIV");

		switch (valueSelect) {
			case "0":
				divColumn.innerHTML = "";
				tipoFiltro(arrayNodos, "increment").map((elementos) => divColumn.appendChild(elementos));
				break;
			case "1":
				divColumn.innerHTML = "";
				tipoFiltro(arrayNodos, "decrement").map((elementos) => divColumn.appendChild(elementos));
				break;
		}
	});
};

export const filtroProductosInput = (divColumn) => {

	const inputFiltro = document.getElementById('input-filtro');

	inputFiltro.addEventListener('keypress', (e) => {

		if (e.key === "Enter") {

			e.preventDefault();

			const inputFiltroValue = document.getElementById('input-filtro').value;

			const arrayNodos = Array.from(divColumn.childNodes).filter((element) => element.nodeName === "DIV");

			const arrayAllLi = arrayNodos.map(producto => Array.from(producto.childNodes[3].childNodes[3].childNodes).filter(li => li.nodeName === 'LI'));

			const alertProductosNotFound = document.getElementById('productos-not-found');

			//Recorre los li y los filtra mediante el input
			const arrayLi = arrayAllLi.map( li => li.filter(elements => {
				const marcaLi = JSON.stringify(elements.getAttribute('data-marca')).replace(/['"]+/g, '').toLocaleLowerCase();
				const input = inputFiltroValue.toLocaleLowerCase();
				if(marcaLi === input) return elements;
			}));

			//Devuelve la cantidad de productos encontrados
			const cantidadLi = arrayLi.filter(element => element.length > 0);
			
			//si existe la marca colocada en el input
			if (cantidadLi.length > 0) {
				//Elimina lo que contenga el contenedor de productos
				divColumn.innerHTML = "";
				//Elimina el toggle del aside para poder seleccionar nuevamente el aside 
				for(let i = 0; i < arrayLinks.length; i++) {
					const arrayLinksClass = Array.from(arrayLinks[i].classList);
					if(arrayLinksClass.includes('disabled')){
						arrayLinks[i].classList.remove('disabled');
						arrayLinks[i].classList.remove('background-aside');
					}
				}
				//Recorre los productos encontrados 
				cantidadLi.map(element => {
					divColumn.appendChild(element[0].parentNode.parentNode.parentNode);
					cantidadResultados(divColumn);
				})

			//Si no existe la marca que manda el input
			} else {
				//Si el input llega vacio
				if(inputFiltroValue === '') {
					alertProductosNotFound.classList.remove('d-none');
					alertProductosNotFound.classList.add('d-block');
					alertProductosNotFound.innerHTML = `Debe completar el campo para buscar`;
					setTimeout(() => {
						alertProductosNotFound.classList.remove('animate__fadeIn');
						alertProductosNotFound.classList.add('animate__fadeOutDown');
					}, 3000)
				//Si el input llega lleno pero no existe la marca
				}else {
					alertProductosNotFound.classList.remove('d-none');
					alertProductosNotFound.classList.add('d-block');
					alertProductosNotFound.innerHTML = `No existe ${inputFiltroValue}`;
					setTimeout(() => {
						alertProductosNotFound.classList.remove('animate__fadeIn');
						alertProductosNotFound.classList.add('animate__fadeOutDown');
					}, 3000)
				}
				setTimeout(() => {
					alertProductosNotFound.classList.add('animate__fadeIn');
					alertProductosNotFound.classList.remove('animate__fadeOutDown');
					alertProductosNotFound.classList.add('d-none');
				}, 4000)
			}
			inputFiltro.value = "";
		}
	})
}

const tipoFiltro = (arrayNodos, tipo) => {
	return arrayNodos.sort((a, b) => {
		const num1 = parseFloat(a.getAttribute("data-precio"));
		const num2 = parseFloat(b.getAttribute("data-precio"));
		if (num1 === num2) return 0;
		if (tipo === "increment") {
			if (num1 < num2) return 1;
		}
		if (tipo === "decrement") {
			if (num1 > num2) return 1;
		}
		return -1;
	});
}
