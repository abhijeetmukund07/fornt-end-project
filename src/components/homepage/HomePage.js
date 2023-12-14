import './HomePage.css'
import React from 'react'
import { useContext } from 'react'
import {ProductsContext} from '../../context/ProductsContext'
import Card from '../card/Card'
import SearchBar from '../../searchbar/SearchBar'
import { useState } from 'react'
function HomePage() {
  

  let[allProducts] = useContext(ProductsContext)
  let [input,setInput] = useState("")
  let results = allProducts.filter( (userObj)=>{
    // console.log(userObj.category)
  
    return (userObj) && (userObj.title.toLowerCase().includes(input.toLowerCase()) || userObj.category.toLowerCase().includes(input.toLowerCase()) || userObj.description.toLowerCase().includes(input.toLowerCase()) )
  } )

  function handleChange(value){
    setInput(value)
  }
  console.log(allProducts)
  return (
  <div>
    <SearchBar handleChange = {handleChange}/>
    <div className='homepage-products-container'>
          <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            {
               results.map((productObj,index)=>(
                <Card id = {productObj.id} image = {productObj.image}  title = {productObj.title} description =  {productObj.description} />

                  // <Card image = {allProducts[index].image}  title = {allProducts[index].title} description =  {allProducts[index].description} />
               ))
            }

          </div>
    </div>
  </div>
  )
}

export default HomePage