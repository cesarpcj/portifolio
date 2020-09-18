import React from 'react'

export default function workItem(props) {
    return (
        
       <div className="main--works--item">

            <div className="card" >
                <img className="card-img-top" src={props.img} alt="Card cap"/>
                <div className="main--works--item--card--body">
                    <h5 className="card-title brown--color">{props.title}</h5>
                    <p className="card-text white--color">{props.description}</p>
                    <a href="#" className="btn--card">Check</a>
                </div>
                
             </div>
       </div>
        
    )
}
