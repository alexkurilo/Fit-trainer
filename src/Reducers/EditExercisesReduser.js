const initialState = [
    {
        exercisesName: "Exersise #1",
        measurementType: "kg"
    },
    {
        exercisesName: "Exersise #2",
        measurementType: "m"
    },
    {
        exercisesName: "Exersise #3",
        measurementType: "min"
    },
    {
        exercisesName: "Exersise #4",
        measurementType: "kg"
    },
    {
        exercisesName: "Exersise #5",
        measurementType: "m"
    },
    {
        exercisesName: "Exersise #6",
        measurementType: "min"
    }
];

export default function currentEditExercisesRequest (state = initialState, action){
    let target;
    switch (action.type) {
        case "EDIT_EXERCISES_REQUEST_TOP":
            if (action.payload > 0){
                target = state[action.payload];
                state[action.payload]=state[action.payload-1];
                state[action.payload-1]=target;
            }
            return  [...state];

        case "EDIT_EXERCISES_REQUEST_BOTTOM":
            if (action.payload < state.length-1){
                target = state[action.payload];
                state[action.payload]=state[action.payload+1];
                state[action.payload+1]=target;
            }
            return  [...state];

        case "EDIT_EXERCISES_REQUEST_DELETE":
            state.splice(action.payload, 1);
            console.log(state);
            return  [...state];

        default:
            return state;
    }
}