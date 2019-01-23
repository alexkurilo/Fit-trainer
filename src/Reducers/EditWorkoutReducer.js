const initialState = [
    {
        id: 0,
        date: 20190101,
        exercises: [
            {
                exercisesName: "Exercise #1",
                numberInList: 0,
                measurementType: "kilogramms",
                measurement: 1,
                repeats: 1
            },
            {
                exercisesName: "Exercise #2",
                numberInList: 1,
                measurementType: "meters",
                measurement: 2,
                repeats: 2
            },
            {
                exercisesName: "Exercise #3",
                numberInList: 2,
                measurementType: "minutes",
                measurement: 3,
                repeats: 3
            }
        ]
    },
    {
        id: 1,
        date: 20190102,
        exercises:[
            {
                exercisesName: "Exercise #4",
                numberInList: 3,
                measurementType: "kilogramms",
                measurement: 4,
                repeats: 4
            },
            {
                exercisesName: "Exercise #5",
                numberInList: 4,
                measurementType: "meters",
                measurement: 5,
                repeats: 5
            }
        ]
    },
    {
        id: 2,
        date: 20190103,
        exercises:[
            {
                exercisesName: "Exercise #6",
                numberInList: 5,
                measurementType: "minutes",
                measurement: 6,
                repeats: 6
            },
            {
                exercisesName: "Exercise #7",
                numberInList: 6,
                measurementType: "kilogramms",
                measurement: 7,
                repeats: 7
            },
            {
                exercisesName: "Exercise #8",
                numberInList: 7,
                measurementType: "meters",
                measurement: 8,
                repeats: 8
            },
            {
                exercisesName: "Exercise #9",
                numberInList: 8,
                measurementType: "minutes",
                measurement: 9,
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

        case "FILL_NEW_STRING_WORKOUT":
            state[action.payload[2]].exercisesName = action.payload[0];
            state[action.payload[2]].number = action.payload[1];
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
                state[action.payload]=state[action.payload-1];
                state[action.payload-1]=target;
            }
            rewriteId(state);
            return  [...state];

        case "NEW_WORKOUT_REQUEST_BOTTOM":
            if (action.payload < state.length-1){
                target = state[action.payload];
                state[action.payload]=state[action.payload+1];
                state[action.payload+1]=target;
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