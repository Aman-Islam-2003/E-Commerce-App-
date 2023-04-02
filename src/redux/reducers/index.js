import { combineReducers } from "redux";
import { Reducer,selectedProductReducer } from "./productReducer";

 const reducers=combineReducers({
    allProducts: Reducer,
    product: selectedProductReducer,
})

export default reducers;