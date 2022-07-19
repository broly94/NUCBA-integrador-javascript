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
			
			
			arrayNodos.map((producto) => {

				const arrayLi = Array.from(producto.childNodes[3].childNodes[3].childNodes).filter(li => li.nodeName === 'LI');
				console.log(arrayLi);
				const arrayMarcas = arrayLi.map(marca => {
					if (marca.getAttribute('data-marca') === inputFiltroValue) {
						if(marca){
							const productosFiltrados = marca.parentNode.parentNode.parentNode;
							//console.log(productosFiltrados)
							divColumn.appendChild(productosFiltrados);
							//console.log("Hay marca");
						}else {
							console.log("no hay marca")
						}
						
					}
				});
				//console.log(arrayMarcas)
				return arrayMarcas;
			
			})
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
