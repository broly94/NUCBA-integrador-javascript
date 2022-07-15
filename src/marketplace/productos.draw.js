export const cardBicicletas = (divColumn, { bicicletas }) => {
	if (bicicletas.length > 0) {
		const bicicletasClean = bicicletas.filter(
			(data, index) => bicicletas.indexOf(data) === index,
		);
		bicicletasClean.forEach((bici) => {
			const { nombre, marca, color, imagen, composicion, rodado, precio} = bici;
			divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center animate__animated animate__fadeIn" data-precio="${Number.parseFloat(precio).toFixed(3)}">
                    <img class="card-img-top"
                    src="${imagen}"
                    alt="Card image">
                    <div class="card-body justify-content-center">
                        <h4 class="card-title">${nombre} ${marca}</h4>
                        <ul>
                            <li>Color: ${color}</li>
                            <li>Composicion: ${composicion}</li>
                            <li>Rodado: ${rodado}</li>
                        </ul>
                        <p class="card-text">$${Number.parseFloat(precio).toFixed(3)}</p>
                        <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                    </div>
            </div>
        `;
		});
	} else {
		divColumn.innerHTML = `
            <h1 class="text-center h1 text-uppercase animate__animated animate__fadeIn">No hay productos</h1>
        `;
	}
};

export const cardIndumentaria = (divColumn, { indumentaria }) => {
	if (indumentaria.length > 0) {
		const indumentariaClean = indumentaria.filter(
			(data, index) => indumentaria.indexOf(data) === index,
		);
		indumentariaClean.forEach((indument) => {
			const { nombre, marca, color, imagen, composicion, precio } =
				indument;
			divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center animate__animated animate__fadeIn" data-precio="${Number.parseFloat(precio).toFixed(3)}">
                    <img class="card-img-top"
                    src="${imagen}"
                    alt="Card image">
                    <div class="card-body justify-content-center">
                        <h4 class="card-title">${nombre} ${marca}</h4>
                        <ul>
                            <li>Color: ${color}</li>
                            <li>Composicion: ${composicion}</li>
                        </ul>
                        <p class="card-text">$${Number.parseFloat(precio).toFixed(3)}</p>
                        <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                    </div>
            </div>
        `;
		});
	} else {
		divColumn.innerHTML = `
            <h1 class="text-center h1 text-uppercase animate__animated animate__fadeIn">No hay productos</h1>
        `;
	}
};

export const cardGadget = (divColumn, { gadget }) => {
    if (gadget.length > 0) {
		const gadgetClean = gadget.filter(
			(data, index) => gadget.indexOf(data) === index,
		);
		gadgetClean.forEach((gad) => {

			const { nombre, marca, color, imagen, composicion, precio } = gad;
			divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center animate__animated animate__fadeIn" data-precio="${Number.parseFloat(precio).toFixed(3)}">
                    <img class="card-img-top"
                    src="${imagen}"
                    alt="Card image">
                    <div class="card-body justify-content-center">
                        <h4 class="card-title">${nombre} ${marca}</h4>
                        <ul>
                            <li>Color: ${color}</li>
                            <li>Composicion: ${composicion}</li>
                        </ul>
                        <p class="card-text">$${Number.parseFloat(precio).toFixed(3)}</p>
                        <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                    </div>
            </div>
        `;
		});
	} else {
		divColumn.innerHTML = `
            <h1 class="text-center h1 text-uppercase animate__animated animate__fadeIn">No hay productos</h1>
        `;
	}
};

export const cardTecnologia = (divColumn, { tecnologia }) => {
    if (tecnologia.length > 0) {
		const tecnologiaClean = tecnologia.filter(
			(data, index) => tecnologia.indexOf(data) === index,
		);
		tecnologiaClean.forEach((tec) => {
            
			const { nombre, marca, color, imagen, composicion, precio } = tec;
			divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center animate__animated animate__fadeIn" data-precio="${Number.parseFloat(precio).toFixed(3)}">
                    <img class="card-img-top"
                    src="${imagen}"
                    alt="Card image">
                    <div class="card-body justify-content-center">
                        <h4 class="card-title">${nombre} ${marca}</h4>
                        <ul>
                            <li>Color: ${color}</li>
                            <li>Composicion: ${composicion}</li>
                        </ul>
                        <p class="card-text">$${Number.parseFloat(precio).toFixed(3)}</p>
                        <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                    </div>
            </div>
        `;
		});
	} else {
		divColumn.innerHTML = `
            <h1 class="text-center h1 text-uppercase animate__animated animate__fadeIn">No hay productos</h1>
        `;
	}
};
