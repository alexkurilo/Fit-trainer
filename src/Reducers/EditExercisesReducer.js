const initialState = [
    {
        exercisesName: "Exersise #1",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #2",
        measurementType: "meters"
    },
    {
        exercisesName: "Exersise #3",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #4",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #5",
        measurementType: "meters"
    }
];

export default function currentEditExercisesRequest (state = initialState, action){
    let target;
    switch (action.type) {
        case "CHANGE_EDIT_EXERCISE_NAME":
            state[action.payload[1]].exercisesName = action.payload[0];
            return [...state];

        case 'CHANGE_EDIT_MEASUREMENT_TYPE':
            state[action.payload[1]].measurementType = action.payload[0];
            return [...state];

        case "EDIT_EXERCISES_REQUEST_TOP":
            if (action.payload > 0){
                target = state[action.payload];
                state[action.payload]=state[action.payload-1];
                state[action.payload-1]=target;
            }
            return  [...state];

        case "EDIT_EXERCISES_REQUEST_BOTTOM":
            //console.log(action.payload);
            if (action.payload < state.length-1){
                target = state[action.payload];
                state[action.payload]=state[action.payload+1];
                state[action.payload+1]=target;
            }
            console.log(state);
            return  [...state];

        case "EDIT_EXERCISES_REQUEST_DELETE":
            state.splice(action.payload, 1);
            console.log(state);
            return  [...state];

        default:
            return [...state];
    }
}