const initialState = {
    breeds:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_DOG':
            return{
                ...state,
                nombre:action.nombre,
                raza:action.raza,
            }
        default:
            return state;
    }
}

export default rootReducer;