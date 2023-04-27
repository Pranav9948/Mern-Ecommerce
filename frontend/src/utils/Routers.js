import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ProductDetailsPage from '../Pages/ProductDetailsPage'

const Routers = () => {


  return (

    <div>

<Routes>

      <Route
        path="/"
        element={
          
            <>
           
            <HomePage/> 
            </> 
          
        }
      />




<Route
        path="/productDetails/:id"
        element={
          
            <>
           
            <ProductDetailsPage/> 
            </> 
          
        }
      />




      </Routes>


    </div>

  )
}

export default Routers