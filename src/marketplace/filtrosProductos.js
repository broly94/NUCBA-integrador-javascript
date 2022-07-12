export const filtroProductosSelect = (divColumn) => {
	const selectFiltro = document.getElementById("select-filtro");

	
	selectFiltro.addEventListener("change", (e) => {

		const valueSelect = e.target.value;
		
		const arrayNodos = Array.from(divColumn.childNodes).filter((element) => element.nodeName === "DIV");

		switch (valueSelect) {
			case "0":
				divColumn.innerHTML = "";
				const preciosOrdenadosMayor = arrayNodos.sort((a, b) => {
					const num1 = parseFloat(a.getAttribute("data-precio"));
					const num2 = parseFloat(b.getAttribute("data-precio"));
					if (num1 < num2) {
						return 1;
					}
					return 0;
				});
				console.log(preciosOrdenadosMayor)
				preciosOrdenadosMayor.map((elementos) => {
					//onsole.log(elementos.getAttribute("data-precio"))
					divColumn.appendChild(elementos);
				});
				break;

			case "1":
				divColumn.innerHTML = "";
				const preciosOrdenadosMenor = arrayNodos.sort((a, b) => {
					const num1 = parseFloat(a.getAttribute("data-precio"));
					const num2 = parseFloat(b.getAttribute("data-precio"));
					if (num1 > num2) {
						return 1;
					}
					return 0;
				});
				preciosOrdenadosMenor.map((elementos) => {
					console.log(elementos);
					divColumn.appendChild(elementos);
				});
				break;
		}
	});
};
