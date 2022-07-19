//Pintar productos en marketplace/
export const pintarProductosInicio = (estado, divColumn, cantidad) => {
	pintarBicicletas(estado, divColumn, cantidad);
};

const pintarBicicletas = (estado, divColumn, cantidad) => {

	const allArray = [];

	const { bicicletas, indumentaria, gadget, tecnologia } = estado;

	const numberBicicletas = bicicletas.filter(
		(bicicleta, index) => index < cantidad,
	);
	const numberIndumentaria = indumentaria.filter(
		(indumentaria, index) => index < cantidad,
	);
	const numberGadget = gadget.filter((gadget, index) => index < cantidad);

	const numberTecnologia = tecnologia.filter(
		(tecnologia, index) => index < cantidad,
	);

	const productos = allArray.concat(
        numberIndumentaria,
		numberGadget,
		numberBicicletas,
		numberTecnologia,
	);

	divColumn.innerHTML += `<h5 class="text-dark w-100 text-center p-4 text-uppercase h5 fs-3">Mas Vendidos</h5>`

	productos.forEach((prod) => {
		const { nombre, color, imagen, composicion, precio } =
			prod;
		divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center animate__animated animate__fadeIn" data-precio="${Number.parseFloat(precio).toFixed(3)}">

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
