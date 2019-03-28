const initialState = {
    digits: "",
    password: '5555',
    is_available: false,
    prohibited: false
};

const reducer = (state = initialState, action) => {
    console.log(state);
    switch (action.type) {
        case "INPUT":
            return {...state, digits: (state.digits + action.value).substring(0, 4)};
        case "DELETE":
            return {...state, digits: state.digits.substr(0, state.digits.length - 1)};
        case "COMPARE":
            let is_available = state.digits === state.password;
            let prohibited = state.digits !== state.password;
            return {...state, is_available: is_available, prohibited: prohibited};
        default:
            return state;
    }
};

export default reducer;