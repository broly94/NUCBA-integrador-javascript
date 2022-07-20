export const cantidadResultados = (divColumn, marca = '') => {
    
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
    targetCantidadResultados.innerHTML += `${resultados.length} resultados encontrados ${marca}`
};
