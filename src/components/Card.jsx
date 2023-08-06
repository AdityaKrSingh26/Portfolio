import React from 'react'


function Card(props) {
    return (
        <div className='card'>
            <div className="image-container">
                <img src={props.image} alt="" />
            </div>
            <div className="text-info">
                <p>{props.title}</p>
            </div>
        </div>
    )
}

export default Card
