//Pintar productos en marketplace/
export const pintarProductosInicio = (estado, divColumn, cantidad) => {
	pintarBicicletas(estado, divColumn, cantidad);
};

const pintarBicicletas = (estado, divColumn, cantidad) => {
	const allArray = [];

	const { bicicletas, indumentaria, gadget, tecnologia } = estado;

	const bicicletasx2 = bicicletas.filter(
		(bicicleta, index) => index < cantidad,
	);
	const indumentariax2 = indumentaria.filter(
		(indumentaria, index) => index < cantidad,
	);
	const gadgetx2 = gadget.filter((gadget, index) => index < cantidad);

	const tecnologiax2 = tecnologia.filter(
		(tecnologia, index) => index < cantidad,
	);

	const productos = allArray.concat(
        indumentariax2,
		gadgetx2,
		bicicletasx2,
		tecnologiax2,
	);

	productos.forEach((prod) => {
		const { nombre, color, imagen, composicion, precio } =
			prod;
		divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center" data-precio="${Number.parseFloat(precio).toFixed(3)}">

                <img class="card-img-top"
                src="${imagen}"
                alt="Card image">
                <div class="card-body justify-content-center">
                    <h4 class="card-title">${nombre}</h4>
                    <ul>
                        <li>Color: ${color}</li>
                        <li>Composicion: ${composicion}</li>
                    </ul>
                    <p class="card-text text-center fs-1 p-3">$${Number.parseFloat(
						precio,
					).toFixed(3)}</p>

                    <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                </div>

            </div>`;
	});
};
