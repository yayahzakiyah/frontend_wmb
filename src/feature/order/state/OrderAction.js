import { ADD_ORDER, CLEAR_ORDER } from "../../../app/constants";

export function addOrder(menu, qty){
    return {
        type: ADD_ORDER,
        payload: {
            menu,
            qty
        }
    }
}

export function clearOrder(){
    return{
        type: CLEAR_ORDER   
    }
}