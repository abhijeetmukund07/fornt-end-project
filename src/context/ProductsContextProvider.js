import React, { useState } from 'react'
import { ProductsContext } from './ProductsContext'
import { useEffect } from 'react'

function ProductsContextProvider({children}) {

    let[Products,setProducts] = useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((productsList)=>setProducts(productsList))
        .catch((err)=>console.error(err))
    },[])



  return (
    <div>
        <ProductsContext.Provider value={[Products,setProducts]}>
            {children}
        </ProductsContext.Provider>
    </div>
  )
}

export default ProductsContextProvider