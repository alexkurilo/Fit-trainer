const initialState = '';

export default function selectDate (state = initialState, action){
    switch (action.type) {
        case 'SELECT_DATE':
            console.log(state);
            console.log(action.payload);
            //state.push(action.payload);
            return action.payload;

        default:
            return state;
    }
}