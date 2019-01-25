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

export default function currentWorkoutWithDate (state = initialState, action){
    let target;

    const rewriteId = (arr) => {
        for (let i = 0;  i < arr.length; i++){
            arr[i].id = i;
        }
    };

    switch (action.type) {
        case "ADD_NEW_STRING_WORKOUT":
            state.push({id: state.length});
            return  [...state];

        case "CHANGE_NAME_AND_TYPE":
            state[action.payload[2]].exercises[action.payload[1]].exercisesName = action.payload[0];
            state[action.payload[2]].exercises[action.payload[1]].measurementType = action.payload[3];
            state[action.payload[2]].exercises[action.payload[1]].numberInList = +action.payload[4];
            return  [...state];

        case "CHANGE_REPEATS":
            action.payload <= 1 ? state[action.payload[2]].exercises[action.payload[1]].repeats = +1 : state[action.payload[2]].exercises[action.payload[1]].repeats = +action.payload[0];
            return  [...state];
        
        case "CHANGE_MEASUREMENTS":
            action.payload <= 1 ? state[action.payload[2]].exercises[action.payload[1]].measurements = +1 : state[action.payload[2]].exercises[action.payload[1]].measurements = +action.payload[0];
            return  [...state];
        
        case "CHANGE_TOP":
            if (action.payload[0] > 0){
                target = Object.assign(state[action.payload[1]].exercises[action.payload[0]]);
                state[action.payload[1]].exercises[action.payload[0]] = state[action.payload[1]].exercises[action.payload[0]-1];
                state[action.payload[1]].exercises[action.payload[0]-1] = target;    
            }
            rewriteId(state[action.payload[1]].exercises);
            return  [...state];
        
        
        case "CHANGE_BOTTOM":
            if (action.payload[0] < state[action.payload[1]].exercises.length){
                target = Object.assign(state[action.payload[1]].exercises[action.payload[0]]);
                state[action.payload[1]].exercises[action.payload[0]] = state[action.payload[1]].exercises[action.payload[0]+1];
                state[action.payload[1]].exercises[action.payload[0]+1] = target;
            }
            rewriteId(state[action.payload[1]].exercises);
            return  [...state];
        
        case "DELETE_EXERCISE":
            state[action.payload[1]].exercises.splice(action.payload[0], 1);
            rewriteId(state[action.payload[1]].exercises);
            return  [...state];

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