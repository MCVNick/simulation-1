import React from 'react'
import './Product.css'

function Product(props) {
    return (
        <div>
            {props.img_url}
            {props.name}
            {props.price}
        </div>
    )
}

export default Product