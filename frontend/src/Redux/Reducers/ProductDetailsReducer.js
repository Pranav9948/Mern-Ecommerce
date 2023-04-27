
import {PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS,PRODUCT_DETAILS_FAIL} from '../Constants/ProductConstants'

export const ProductDetailsReducer=(state={ProductDetails:[]},action)=>{

    switch(action.type){

        case PRODUCT_DETAILS_REQUEST:

           return {loading:true,ProductDetails:[]}

           case PRODUCT_DETAILS_SUCCESS:

             return { loading:false, ProductDetails:action.payload}

             case PRODUCT_DETAILS_FAIL:

             return { loading:false, Error:action.payload}

             default:

             return state


    }



}