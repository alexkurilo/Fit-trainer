const initialState = {
    email:"",
    pass: "",
    name: ""
};

export default function currntUserSignInData (state = initialState, action){
    switch (action.type) {
        case "ENTRY_REQUEST":
            return  action.payload;

        default:
            return state;
    }
}