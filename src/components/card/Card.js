import "./card.css"
import React from 'react'
import { Link } from 'react-router-dom'
function Card(props) {


  return (
    <div>
         <div>
    <div className="card p-3 product-card" style={{width: "15rem;"}}>
        <img className="card-img-top img-thumbnail thumbnail" src={props.image} alt='productimage' style={{height:"80px;", width:"80px;"}} />
        <div className="card-body">
            <h5 className="card-title title text-center">{props.title} </h5>
            {/* <p className="card-text">{props.description} </p> */}
            {/* <Link className='btn d-block mx-auto btn-primary'>Details</Link> */}
            <Link to={`${props.id}`} >
                <button className="redirect-button mt-1">Details</button>
            </Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Card