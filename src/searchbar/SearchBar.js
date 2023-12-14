import './SearchBar.css'
import React from 'react'
import searchIcon from '../images/searchIcon.png'
function SearchBar(props) {
  return (
    <div>

        <div className=" input-group w-50 mx-auto mt-3 rounded">
            <input type="search" className="form-control rounded" placeholder="Search" onChange={(e)=>props.handleChange(e.target.value)} />
            <div className=" mx-1 p-1">
                <img id='search-logo' src={searchIcon} alt="Search" />
            </div>
        </div>
    </div>
  )
}

export default SearchBar