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
    },
    {
        exercisesName: "Exersise #6",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #7",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #8",
        measurementType: "meters"
    },
    {
        exercisesName: "Exersise #9",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #10",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #11",
        measurementType: "meters"
    },
    {
        exercisesName: "Exersise #12",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #13",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #14",
        measurementType: "meters"
    },
    {
        exercisesName: "Exersise #15",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #16",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #17",
        measurementType: "meters"
    },
    {
        exercisesName: "Exersise #18",
        measurementType: "minutes"
    },
    {
        exercisesName: "Exersise #19",
        measurementType: "kilogramms"
    },
    {
        exercisesName: "Exersise #20",
        measurementType: "meters"
    }
];

export default function currentEditExercisesRequest (state = [], action){
    let target;
    switch (action.type) {
        case "SET_EXERCISES":
            return [...action.payload];

        case "CHANGE_EDIT_EXERCISE_NAME":
            state[action.payload[1]].exercisesName = action.payload[0];
            return [...state];

        case 'CHANGE_EDIT_MEASUREMENT_TYPE':
            state[action.payload[1]].measurementType = action.payload[0];
            return [...state];

        case "CLICK_BUTTON_EDIT_EXERCISES":

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
            };
            return [...state];

        case 'ADD_NEW_EXERCISE':
            return [...state, action.payload];

        default:
            return [...state];
    }
}