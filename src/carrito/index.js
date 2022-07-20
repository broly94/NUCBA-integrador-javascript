export const carrito = [];

export const indexCarrito = (divColumn) => {
    
    const divProductos = Array.from(divColumn.childNodes);

    const carritoCantidad = document.getElementById('carrito-cantidad');

    if(divProductos.length > 0) {

        const arrayNodos = Array.from(divColumn.childNodes).filter((element) => element.nodeName === "DIV");
        
        arrayNodos.map((element) => {
            const allAncord = element.lastElementChild.lastElementChild;
            allAncord.addEventListener("click", (e) => {
                e.preventDefault();
                //Aca se podria agregar al array carrito el id de los productos y luego en una pagina html
                //agregar los productos segun los id que haya en el array carrito.
                carrito.push(0)
                carritoCantidad.innerHTML = carrito.length;
            })
        });

    }

    
}