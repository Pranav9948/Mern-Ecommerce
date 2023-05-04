import {ADD_CART_ITEM} from '../Constants/ProductConstants'
import axios from 'axios'


export const CartAction=(id,qty)=>async(dispatch,getState)=>{

    const {data}=await axios.get(`/api/Products/productsDetails/${id}`)

    const {productDetails}=data

    console.log("234",productDetails)

    dispatch(
        {
            type:ADD_CART_ITEM,
            payload:{

                product:productDetails._id,
                name:productDetails.name,
                image:productDetails.image,
                price:productDetails.price,
           countInStock:productDetails.countInStock,
                qty
            }
        }
    )


    localStorage.setItem('cartItems',JSON.stringify(getState().CartReducer.cartItems))

    
}