export const filtroProductosSelect = (divColumn) => {

    const arrayPrecios = []

    for(let hijos of divColumn.childNodes){
        if(hijos.nodeName === 'DIV'){
            arrayPrecios.push(hijos.getAttribute('data-precio'))
        }
    }

    const selectFiltro = document.getElementById('select-filtro');
    
    selectFiltro.addEventListener('change', (e) => {
        
        const valueSelect = e.target.value;
        
        switch(valueSelect){
            case "0":
                const arrayNodos = Array.from(divColumn.childNodes).filter(element => element.nodeName === 'DIV');
                console.log(arrayNodos.reverse())
            break;

            case "1":
                console.log('selecciono menor')
            break
        }

    })
}