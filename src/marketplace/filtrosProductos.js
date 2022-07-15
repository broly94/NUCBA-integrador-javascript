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
		if(e.key === "Enter"){
			e.preventDefault();
			const arrayNodos = Array.from(divColumn.childNodes).filter((element) => element.nodeName === "DIV");
			const productosFiltrados = arrayNodos.filter((producto) => {
				console.log(producto);
			})
			console.log(productosFiltrados);
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
		if (tipo === "decrement"){
			if (num1 > num2) return 1;
		}
		return -1;
	});
}
