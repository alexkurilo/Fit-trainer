const initialState = [
    {
        id: 0,
        date: "20190201",
        exercises: [
            {
                id: 0,
                exercisesName: "Exercise #1",
                numberInList: 0,
                measurementType: "kilogramms",
                measurements: 1,
                repeats: 1
            },
            {
                id: 1,
                exercisesName: "Exercise #2",
                numberInList: 1,
                measurementType: "meters",
                measurements: 2,
                repeats: 2
            },
            {
                id: 2,
                exercisesName: "Exercise #3",
                numberInList: 2,
                measurementType: "minutes",
                measurements: 3,
                repeats: 3
            }
        ]
    },
    {
        id: 1,
        date: "20190203",
        exercises:[
            {
                id: 0,
                exercisesName: "Exercise #4",
                numberInList: 3,
                measurementType: "kilogramms",
                measurements: 4,
                repeats: 4
            },
            {
                id: 1,
                exercisesName: "Exercise #5",
                numberInList: 4,
                measurementType: "meters",
                measurements: 5,
                repeats: 5
            }
        ]
    },
    {
        id: 2,
        date: "20190205",
        exercises:[
            {
                id: 0,
                exercisesName: "Exercise #6",
                numberInList: 5,
                measurementType: "minutes",
                measurements: 6,
                repeats: 6
            },
            {
                id: 1,
                exercisesName: "Exercise #7",
                numberInList: 6,
                measurementType: "kilogramms",
                measurements: 7,
                repeats: 7
            },
            {
                id: 2,
                exercisesName: "Exercise #8",
                numberInList: 7,
                measurementType: "meters",
                measurements: 8,
                repeats: 8
            },
            {
                id: 3,
                exercisesName: "Exercise #9",
                numberInList: 8,
                measurementType: "minutes",
                measurements: 9,
                repeats: 9
            }
        ]
    }
];

export default function currentWorkoutWithDate (state = [], action){

    const rewriteId = (arr) => {
        arr.forEach((item, index)=> item.id = index);
    };

    switch (action.type) {
        case "SET_WORKOUTS":
            return [...action.payload];

        case "CREATE_NEW_WORKOUT":
            return  [...state, {id: state.length, date: action.payload[0], exercises: action.payload[1]}];

        case "ADD_NEW_STRING_EDIT_WORKOUT":
            return  [...state, {id: state.length}];

        case "CHANGE_NAME_AND_TYPE":
            state[action.payload[2]].exercises[action.payload[1]].exercisesName = action.payload[0];
            state[action.payload[2]].exercises[action.payload[1]].measurementType = action.payload[3];
            state[action.payload[2]].exercises[action.payload[1]].numberInList = +action.payload[4];
            return  [...state];

        case "CHANGE_REPEATS":
            +action.payload[0] <= 1 ? state[action.payload[2]].exercises[action.payload[1]].repeats = +1 : state[action.payload[2]].exercises[action.payload[1]].repeats = +action.payload[0];
            return  [...state];
        
        case "CHANGE_MEASUREMENTS":
            +action.payload[0] <= 1 ? state[action.payload[2]].exercises[action.payload[1]].measurements = +1 : state[action.payload[2]].exercises[action.payload[1]].measurements = +action.payload[0];
            return  [...state];

        case "CLICK_BUTTON_EDIT_WORKOUT":

            switch (action.payload[0]) {

                case "top":
                    if (action.payload[1] > 0){
                        [state[action.payload[2]].exercises[action.payload[1]-1], state[action.payload[2]].exercises[action.payload[1]]]=[state[action.payload[2]].exercises[action.payload[1]],state[action.payload[2]].exercises[action.payload[1]-1]];
                    };
                    break;

                case "bottom":
                    if (action.payload[1] < state[action.payload[2]].exercises.length-1){
                        [state[action.payload[2]].exercises[action.payload[1]], state[action.payload[2]].exercises[action.payload[1]+1]]=[state[action.payload[2]].exercises[action.payload[1]+1],state[action.payload[2]].exercises[action.payload[1]]];
                    };
                    break;

                case "delete":
                    state[action.payload[2]].exercises.splice(action.payload[1], 1);
                    break;

                default:
                    return state;
            };
            rewriteId(state[action.payload[2]].exercises);
            return [...state];

        case "ADD_NEW_STRING_EXERCISE":
            state[action.payload].exercises.push({
                id: state.length-1,
                exercisesName: "Entered some exercise, pleace.",
                measurementType: "",
                measurements: 1,
                repeats: 1
            });
            return  [...state];

        case "SAVE_WORKOUT":
            console.log(state);
            console.log(action.payload);
            return  [...state];

        case "ADD_WORKOUT":
            console.log(state);
            console.log(action.payload);
            state[state.length-1].date = action.payload[0];
            state[state.length-1].exercises = action.payload[1];
            return  [...state];
                        
        default:
            return [...state];
    }
}