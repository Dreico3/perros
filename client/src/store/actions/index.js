//todas estas acciones son temporales 
//deben tomarse como ejemplo nada mas
export function addLastName(apellido) {
    return {
        type: 'ADD_LASTNAME',
        apellido
    }
}
export function agregarTitulo(titulo){
    return {
        type: 'ADD_TITLE',
        titulo
    }
}

export function agregarpelicula({titulo,imagen,sinopsis}){
    return {
        type: 'ADD_MOVIE',
        titulo:titulo,
        imagen:imagen,
        sinopsis:sinopsis
    }
}

export function agregarSinopsis(sinopsis){
    return {
        type: 'ADD_SINOPSIS',
        sinopsis
    }
}
export function agregarState(estado){
    return{
        type:'INITIAL',
        state:estado
    }
}
