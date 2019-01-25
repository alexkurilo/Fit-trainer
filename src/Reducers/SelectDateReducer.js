const initialState = '';

export default function selectDate (state = initialState, action){
    switch (action.type) {
        case 'SELECT_DATE':
            return action.payload;

        default:
            return state;
    }
}