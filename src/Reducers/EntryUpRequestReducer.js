const initialState = {
    email:"",
    pass: ""
};

export default function currntUserSignUpData (state = initialState, action){
    switch (action.type) {
        case "ENTRY_REQUEST_UP":
            return  action.payload;

        default:
            return state;
    }
}