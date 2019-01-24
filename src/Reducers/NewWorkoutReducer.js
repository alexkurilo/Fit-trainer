const initialState = [];

export default function currentNewWorkoutRequest (state = initialState, action){
    let target;

    const rewriteId = (arr) => {
        for (let i = 0;  i < arr.length; i++){
            arr[i].id = i;
        }
    };

    switch (action.type) {
        case "ADD_NEW_STRING_WORKOUT":
            state.push(
                {
                    id: state.length,
                    // numberInList: 0,
                    // measurementType: "",
                    // measurements: 0,
                    // repeats:0
                });
                console.log(state);
            return  [...state];

        case "FILL_NEW_STRING_WORKOUT":
        console.log(action.payload);
            state[action.payload[2]].exercisesName = action.payload[0];
            state[action.payload[2]].numberInList = action.payload[1];
            state[action.payload[2]].measurementType = action.payload[3];
            return  [...state];

        case "FILL_QUANTITY_REPEATS":
            state[action.payload[1]].repeats = +action.payload[0];
            return  [...state];

        case "FILL_QUANTITY_MEASUREMENTS":
            state[action.payload[1]].measurements = +action.payload[0];
            return  [...state];

        case "NEW_WORKOUT_REQUEST_TOP":
            if (action.payload > 0){
                target = state[action.payload];
                state[action.payload] = state[action.payload-1];
                state[action.payload-1] = target;
            }
            rewriteId(state);
            return  [...state];

        case "NEW_WORKOUT_REQUEST_BOTTOM":
            if (action.payload < state.length-1){
                target = state[action.payload];
                state[action.payload] = state[action.payload+1];
                state[action.payload+1] = target;
            }
            rewriteId(state);
            return  [...state];

        case "NEW_WORKOUT_REQUEST_DELETE":
            state.splice(action.payload, 1);
            rewriteId(state);
            return  [...state];
            
        default:
            return [...state];
    }
}