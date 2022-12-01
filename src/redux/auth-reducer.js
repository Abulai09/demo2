import { request } from "../dal/dal"

let initialState = {
    isAuth:false,
    email:null,
    id:null,
    login:null
}

let authUserAC = (email,id,login,isAuth) => ({type:"authUser",data:{email,id,login,isAuth}})

let authReducer = (state=initialState,action) => {
    switch(action.type){
        case 'authUser':
            return{
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export let authMeThunk = () => {
    return (dispatch) => {
        request.authMe().then( response => {
            if(response.data.resultCode===0){
                let {email,id,login} = response.data.data
                dispatch(authUserAC(email,id,login,true))
            }
        } )
    }
}

export default authReducer