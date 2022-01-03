const initialState = {
    state: [],
    search: null,
    order: false
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ORDER_AZ':
            return {
                ...state,
                state: action.state,
                order: action.order
            }
        case 'ORDER_ZA':
            return {
                ...state,
                state: action.state,
                order: action.order
            }
        case 'INITIAL':
            return {
                ...state,
                state: action.state,
            }
        case 'ADD_SEARCH':
            return {
                ...state,
                search: action.search,
            }
        default:
            return state;
    }
}

export default rootReducer;