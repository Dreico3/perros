const initialState= {
    state:[]
};

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'ADD_DOG':
            return{
                ...state,
                nombre:action.nombre,
                raza:action.raza,
            }
        case 'INITIAL':
            return{
                ...state,
                state:action.state,
            }
        default:
            return state;
    }
}

export default rootReducer;