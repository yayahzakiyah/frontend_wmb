import { MENU_SHOW_FB } from "../../../app/constants";

export function showMenuByFB(food, bev) {
    return {
        type: MENU_SHOW_FB,
        payload:{
            food,
            bev
        }
    }
    
}