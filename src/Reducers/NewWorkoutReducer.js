const initialState = [];

export default function currentNewWorkoutRequest (state = initialState, action){

    const rewriteId = (arr) => {
        arr.forEach((item, index)=> item.id = index);
    };

    switch (action.type) {
        case "ADD_NEW_STRING_NEW_WORKOUT":
            return  [...state, {id: state.length}];

        case "FILL_NEW_STRING_WORKOUT":
            state[action.payload[2]].exercisesName = action.payload[0];
            state[action.payload[2]].numberInList = action.payload[1];
            state[action.payload[2]].measurementType = action.payload[3];
            return  [...state];

        case "FILL_QUANTITY_REPEATS":
            +action.payload[0] <= 1 ? state[action.payload[1]].repeats = +1 : state[action.payload[1]].repeats = +action.payload[0];
            return  [...state];

        case "FILL_QUANTITY_MEASUREMENTS":
            +action.payload[0] <= 1 ? state[action.payload[1]].measurements = +1 : state[action.payload[1]].measurements = +action.payload[0];
            return  [...state];

        case "CLICK_BUTTON_NEW_WORKOUT":

            switch (action.payload[0]) {

                case "top":
                    if (action.payload[1] > 0){
                        [state[action.payload[1]-1], state[action.payload[1]]]=[state[action.payload[1]], state[action.payload[1]-1]];
                    };
                    break;

                case "bottom":
                    if (action.payload[1] < state.length-1){
                        [state[action.payload[1]], state[action.payload[1]+1]]=[state[action.payload[1]+1], state[action.payload[1]]];

                    };
                    break;

                case "delete":
                    state.splice(action.payload[1], 1);
                    break;

                default:
                    return state;
            };
            rewriteId(state);
            return [...state];

        case "CLEAR_NEW_WORKOUT":
            return  [];

        default:
            return [...state];
    }
}