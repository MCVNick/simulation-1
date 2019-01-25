import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            imageUrlInput: '',
            nameInput: '',
            priceInput: 0
        }
    }

    handleOnUrlInputChange(url) {
        console.log(url)
        this.setState({
            imageUrlInput: url
        })
    }

    handleOnNameInputChange(name) {
        console.log(name)
        this.setState({
            nameInput: name
        })
    }

    handleOnPriceInputChange(price) {
        console.log(price)
        this.setState({
            priceInput: price
        })
    }

    handleOnCancelClick() {
        this.setState({
            imageUrlInput: '',
            nameInput: '',
            priceInput: 0
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={(value) => this.handleOnUrlInputChange(value.target.value)} value={this.state.imageUrlInput} placeholder='url' />
                    <input onChange={(value) => this.handleOnNameInputChange(value.target.value)} value={this.state.nameInput} placeholder='name' />
                    <input type='number' onChange={(value) => this.handleOnPriceInputChange(value.target.value)} value={this.state.priceInput} placeholder='price' />
                    <button onClick={() => this.handleOnCancelClick()}>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form