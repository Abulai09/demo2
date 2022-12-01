import { combineReducers, createStore, applyMiddleware  } from "redux";
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk'
import appReducer from "./app-reducer";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    auth:authReducer,
    app:appReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store 
store.window=store