const initialState = [];

export default function currentNewWorkoutRequest (state = initialState, action){
    let target;
    switch (action.type) {
        case "ADD_NEW_STRING_WORKOUT":
            state.push(state.length);
            console.log(state);
            return  [...state];

        case "FILL_NEW_STRING_WORKOUT":
            //state.push(state.length);
            console.log(state.exercisesName);
            return  [...state];

        default:
            return [...state];
    }
}