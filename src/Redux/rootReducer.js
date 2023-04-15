import { combineReducers } from "redux";
import burgerReducer from '../OrderBurger/burgerReducer'

const rootReducer = combineReducers ({
    stateBurger: burgerReducer,
})

export default rootReducer