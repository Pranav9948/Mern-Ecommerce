import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductListReducer } from "../Redux/Reducers/ProductsReducers";
import {ProductDetailsReducer} from "../Redux/Reducers/ProductDetailsReducer";





const reducer = combineReducers({

  productList:ProductListReducer,
  productDetails:ProductDetailsReducer

  
});



const initialState = {
  
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;