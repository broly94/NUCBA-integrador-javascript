//Pintar productos en marketplace/
export const BicicletasPrintIndex = (estado, divColumn, cantidad) => {

	const { bicicletas } = estado;

		const bicicletasx2 = bicicletas.filter((bicicleta, index) => index < cantidad);

		bicicletasx2.forEach((bici) => {
            const { nombre, marca, color, imagen, composicion, rodado, precio} = bici;
			divColumn.innerHTML += `
            <div class="card card-productos d-flex justify-content-center">
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
                    <p class="card-text text-center fs-1 p-3">$${precio}</p>
                    <a href="#" class="btn btn-outline-secondary">Añadir al carrito</a>
                </div>
            </div>`;
		});
};
