import { createStore } from "redux";
import { rootReducer } from "./rootReducer";

export const setupStore = () => {
    return createStore(rootReducer())
}