export const cantidadResultados = (divColumn) => {
    
	const resultados = [];

    const arrayHijos = Array.from(divColumn.childNodes);
	
    for(let i of arrayHijos) {
        if(i.nodeName === 'DIV') {
            resultados.push(i);
        }
    }

	const targetCantidadResultados = document.getElementById(
		"cantidad-resultados",
	);
	targetCantidadResultados.innerHTML = '';
    targetCantidadResultados.innerHTML += `${resultados.length} Resultados`
    targetCantidadResultados.className = 'text-center m-3 p-3 fs-4 text-uppercase'
};
