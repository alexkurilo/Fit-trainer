const initialState = [];

export default function selectedDays (state = initialState, action){
    switch (action.type) {
        case 'ADD_SELECTED_DATE':
            state.push(action.payload);
            return [...state];

        default:
            return [...state];
    }
}