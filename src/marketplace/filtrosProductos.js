import { cantidadResultados } from './cantidadResultados.js';
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

			const arrayLi = arrayAllLi.map( li => li.filter(elements => {
				const marcaLi = JSON.stringify(elements.getAttribute('data-marca')).replace(/['"]+/g, '').toLocaleLowerCase();
				const input = inputFiltroValue.toLocaleLowerCase();
				if(marcaLi === input) return elements;
			}));

			const cantidadLi = arrayLi.filter(element => element.length > 0);

			if (cantidadLi.length > 0) {
				divColumn.innerHTML = "";
				cantidadLi.map(element => {
					divColumn.appendChild(element[0].parentNode.parentNode.parentNode);
					cantidadResultados(divColumn);
				})
			}else {
				if(inputFiltroValue === '') {
					alertProductosNotFound.classList.remove('d-none');
					alertProductosNotFound.classList.add('d-block');
					alertProductosNotFound.innerHTML = `Debe completar el campo para buscar`;
				}else {
					alertProductosNotFound.classList.remove('d-none');
					alertProductosNotFound.classList.add('d-block');
					alertProductosNotFound.innerHTML = `No existe ${inputFiltroValue}`;
				}
				setTimeout(() => {
					alertProductosNotFound.classList.add('d-none');
				}, 3000)
			}
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
