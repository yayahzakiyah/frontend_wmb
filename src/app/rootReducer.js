import { combineReducers } from "redux";
import { menuReducer } from "../feature/menu/state/MenuReducer";
import { orderReducer } from "../feature/order/state/OrderReducer";

export function rootReducer(){
    return combineReducers({
        menuReducer,
        orderReducer
    })
}