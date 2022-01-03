//todas estas acciones son temporales 
//deben tomarse como ejemplo nada mas

export function ordenarZA(estado){
    function SortArray(x, y){
        return y.name.localeCompare(x.name);
    }
    var s = estado.sort(SortArray);
    return {
        type: 'ORDER_ZA',
        state:s,
        order: true
    }
}

export function ordenarAZ(estado){
    function SortArray(x, y){
        return x.name.localeCompare(y.name);
    }
    var s = estado.sort(SortArray);
    return {
        type: 'ORDER_AZ',
        state:s,
        order: false
    }
}

export function agregarBusqueda(sear){
    return {
        type: 'ADD_SEARCH',
        search:sear
    }
}
export function agregarState(estado){
    return{
        type:'INITIAL',
        state:estado
    }
}
