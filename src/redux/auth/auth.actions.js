import { API } from "../../shared/services/api";

export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_OK = "LOGIN_USER_OK";
export const LOGIN_USER_ERROR = "LOGIN_USER_ERROR";
export const REGISTER_USER = "REGISTER_USER";
export const REGISTER_USER_OK = "REGISTER_USER_OK";
export const REGISTER_USER_ERROR = "REGISTER_USER_ERROR";
export const LOGOUT_USER = "LOGOUT_USER";
export const LOGOUT_USER_OK = "LOGOUT_USER_OK";
export const LOGOUT_USER_ERROR = "LOGOUT_USER_ERROR";
export const CHECKSESSION_USER = "CHECKSESSION_USER";
export const CHECKSESSION_USER_OK = "CHECKSESSION_USER_OK";
export const CHECKSESSION_USER_ERROR = "CHECKSESSION_USER_ERROR";

export const loginUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: LOGIN_USER});
    try {
        const result = await API.post("users/login", formdata)
        localStorage.setItem('token', result.data.token)
        dispatch({type: LOGIN_USER_OK, payload: result.data});
        navigate('/')
    } catch (error) {
        dispatch({type: LOGIN_USER_ERROR, payload: error.message});
    }
}

export const registerUser = (formdata, navigate) => async(dispatch) => {
    dispatch({type: REGISTER_USER});
    try {
        const result = await API.post("users/register", formdata)
        dispatch({type: REGISTER_USER_OK});
        navigate('/login')
    } catch (error) {
        dispatch({type: REGISTER_USER_ERROR, payload: error.message})
    }
}

export const logOut = (navigate) => async(dispatch) => {
    dispatch({type: LOGOUT_USER});
    try {
        const result = await API.post("users/logout")
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        dispatch({type: LOGOUT_USER_OK, payload: result.data.token});
        navigate('/login')
    } catch (error) {
        dispatch({type: LOGOUT_USER_ERROR, payload: error.message})
    }
}


export const checkSession = (token, navigate) => async(dispatch) => {
    dispatch({type: CHECKSESSION_USER})
    try {
        const result = await API.post("users/checksession")
        dispatch({type: CHECKSESSION_USER_OK, payload: {user: result.data, token: token}})
        navigate('/')
    } catch (error) {
        dispatch({type: CHECKSESSION_USER_ERROR})
        localStorage.removeItem('token');
        navigate('/login');
    }
}