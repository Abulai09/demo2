import { authMeThunk } from "./auth-reducer"

let initialState = {
    initialized:false
}

let setinitializedAC = () => ({type:"setinitialized"})

let appReducer = ( state=initialState, action) => {
    switch(action.type){
        case 'setinitialized':
            return{
                ...state,
                initialized:true
            }
        default:
            return state
    }
}

export let initializingThunk = ()=> {
    return (dispatch) => {
        let promise = dispatch(authMeThunk())
        Promise.all([promise]).then( ()=>{
            dispatch(setinitializedAC())
        } )
    }
}

export default appReducer