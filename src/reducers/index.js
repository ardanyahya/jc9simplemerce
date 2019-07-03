import { combineReducers } from "redux";



const init = {
    id: '',
    username: '',
    message:''
}

const AuthReducer = (data = init, action) => {
    //if action.type sama dengan "Login_Success" maka do something
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {
                ...data,
                id: action.payload.id,
                username: action.payload.username
            }
        case "LOGOUT_SUCCESS":    
            return {
                ...data,
                id: '',
                username: ''
            }

        default:
            return data
            //data sama dengan init, init sama dengan id dan username
    }
}


export default combineReducers(
    {
        auth: AuthReducer //(id: '', username: '')
    }
)