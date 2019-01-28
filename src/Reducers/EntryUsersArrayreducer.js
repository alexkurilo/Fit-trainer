const initialState = [{
    email: "",
    pass: ""
}];

export default function usersArray (state = initialState, action){
    switch (action.type) {
        case "ENTRY_USERS_ARRAY":
            return  [...action.payload];

        default:
            return state;
    }
}