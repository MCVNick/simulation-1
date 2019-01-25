import React from 'react'
import './Product.css'

function Product(props) {
    return (
        <div className='productItemParent'>
            <div className='productItem'>
                <div>
                    {props.img_url}
                    {props.name}
                    {props.price}
                </div>
                
                <button onClick={() => props.handleDeleteInventoryItem(props.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

export default Product