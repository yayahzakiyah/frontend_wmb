import { MENU_SHOW_FB } from "../../../app/constants";

const menuInitialState = {
    foods: [],
    bevs: []
}

export function menuReducer(state= menuInitialState, action) {
    switch (action.type) {
        case MENU_SHOW_FB:
            return {
                ...state,
                foods : [...action.payload.food],
                bevs: [...action.payload.bev]
            }
        default:
            return state
    }
}