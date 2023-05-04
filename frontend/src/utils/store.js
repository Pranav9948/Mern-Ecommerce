import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { ProductListReducer } from "../Redux/Reducers/ProductsReducers";
import {ProductDetailsReducer} from "../Redux/Reducers/ProductDetailsReducer";
import {AddCart} from '../Redux/Reducers/cartReducers'





const reducer = combineReducers({

  productList:ProductListReducer,
  productDetails:ProductDetailsReducer,
  CartReducer:AddCart,

  
});


const cartItemsFromLocalStorage=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]


const initialState = [{
  
  CartReducer:cartItemsFromLocalStorage
}
];

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;