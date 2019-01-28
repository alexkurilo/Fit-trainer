const initialState = {
    email:"",
    pass: "",
    name: "",
    id: ""
};

export default function currentUserSignInData (state = initialState, action){
    switch (action.type) {
        case "ENTRY_REQUEST":
            return  action.payload;

        default:
            return state;
    }

}