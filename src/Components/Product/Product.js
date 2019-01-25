import React from 'react'
import { Link } from 'react-router-dom'
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
                
                <button onClick={() => props.handleDeleteInventoryItem(props.product.id)}>
                    Delete
                </button>
                <Link to={`/edit/${props.product.id}`}>
                    <button onClick={() => props.handleEditInventoryItem(props.product)}>
                        Edit
                    </button>
                </Link>
                
            </div>
        </div>
    )
}

export default Product