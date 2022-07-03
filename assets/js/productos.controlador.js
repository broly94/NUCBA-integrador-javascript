export const cardBicicletas = (divColumn, { bicicletas }) => {
    
    if (bicicletas) {
        const bicicletasClean = bicicletas.filter((data, index) => bicicletas.indexOf(data) === index);
        bicicletasClean.forEach(bici => {
            const { imagen, marca, color, rodado } = bici;
            divColumn.innerHTML += `
            <div class="card card-productos justify-content-center">
                    <img class="card-img-top"
                    src="${imagen}"
                    alt="Card image">
                    <div class="card-body justify-content-center">
                        <h4 class="card-title">${marca}</h4>
                        <ul>
                            <li>Color: ${color}</li>
                            <li>Rodado: ${rodado}</li>
                        </ul>
                        <a href="#" class="btn btn-primary">Añadir al carrito</a>
                    </div>
            </div>
        `
        });
    }
}