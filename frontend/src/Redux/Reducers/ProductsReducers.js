import { PRODUCT_LIST_REQUEST,PRODUCT_LIST_SUCCESS,PRODUCT_LIST_FAIL } from "../Constants/ProductConstants"


export const ProductListReducer=(state={productz:[]},action)=>{

      switch(action.type){

          case PRODUCT_LIST_REQUEST:
            return { loading:true,productz:[]}

            case PRODUCT_LIST_SUCCESS:
                return { loading:false,productz:action.payload}

                
            case PRODUCT_LIST_FAIL:
                return { loading:false,error:action.payload}

                default:
                    return state

              
      }
     
}