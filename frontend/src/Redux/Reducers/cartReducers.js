import {ADD_CART_ITEM,REMOVE_CART_ITEM} from '../Constants/ProductConstants'

export const AddCart=(state={cartItems:[]},action)=>{

     switch(action.type){

     case ADD_CART_ITEM:
   
    const item=action.payload

    const existItem=state?.cartItems?.find((p)=>p.id===item.item.id)

    if(existItem){

        return{

            ...state,
            cartItems:state.cartItems.map((p)=>p.id===item.id ? item:p)
        }

    }

    else{

        return{

            ...state,
            cartItems:[...state.cartItems, item]
        }

        
    }

    default :
              return state

}

}


  