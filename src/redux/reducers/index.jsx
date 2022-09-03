import { combineReducers } from "redux";
import ProductsReducer from "./productslist";
import Products_Details_Reducer from "./ProductDetails";
import Category_Reducer from "./Category"
import Single_Category_Reducer from "./SingleCategory";
import Looding_Reducer from "./Looding";
const Reducers = combineReducers({
    ProductsReducer,
    Category_Reducer,
    Looding_Reducer,
    Single_Category_Reducer,
    Products_Details_Reducer
})
export default Reducers