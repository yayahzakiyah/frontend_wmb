import { CLEAR_ORDER, ADD_ORDER } from "../../../app/constants";

const orderInitialState = {
    orderMenus: [],
    total: 0
}

export function orderReducer(state= orderInitialState, action) {
    switch (action.type) {
        case ADD_ORDER:
            const newOrderMenus = [...state.orderMenus, action.payload.orderMenu]
            let total = 0;
            for (let order of newOrderMenus){
                total += (order.qty * order.menu.price)
            }
            return {...orderInitialState, orderMenus: newOrderMenus, total:total}
        case CLEAR_ORDER:
            return {...orderInitialState, orderMenus:[], total:0}
        default:
           return state
    }
}