import React from 'react'

export default function WorkItemInfo(props) {
    return (
        <div className="main--works--item--info">

            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="main--works--item--info--image--list">
                {props.images && props.images.map(img =>{
                    return <div className="work--item--image--container">
                        <img src={img} alt="app screenshot" className="work--item--image"/>
                    </div>
                })}
            </div>
        </div>
    )
}
