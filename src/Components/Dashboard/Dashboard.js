import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './Dashboard.css'

import Form from '../Form/Form'
import Product from '../Product/Product'



class Dashboard extends Component {
    constructor() {
        super()

        this.state = {
            inventory: []
        }

        this.handleDeleteInventoryItem = this.handleDeleteInventoryItem.bind(this)
        this.handleOnAddToInventoryClick = this.handleOnAddToInventoryClick.bind(this)
        this.handleEditInventoryItem = this.handleEditInventoryItem.bind(this)
    }


    handleDeleteInventoryItem(id) {
        axios.delete(`/api/product/${id}`)
            .then((res) => {
                this.getProducts()
            })
            .catch((err) => console.log(err))
    }

    componentDidMount() {
        this.getProducts()
    }

    getProducts() {
        axios.get('/api/inventory')
            .then((products) => {
                this.setState({
                    inventory: products.data
                })
            })
            .catch((err) => console.log(err))
    }

    handleOnAddToInventoryClick(img_url, name, price) {
        const postObj = {
            img_url: img_url,
            name: name,
            price: price
        }

        axios.post('/api/product', postObj)
            .then((res) => {
                this.getProducts()
            })
            .catch((err) => console.log(err))
    }

    handleEditInventoryItem(product) {
        const putObj = {
            img_url: 'product.img_url',
            name: 'product.name',
            price: -2
            // price: product.price
        }

        console.log(`/api/product/${product.id}`)

        axios.put(`/api/product/${product.id}`, putObj)
        .then((res) => {
                console.log(putObj)
                this.getProducts()
            })
            .catch((err) => console.log(err))
    }

    render() {
        let displayInventory = this.state.inventory.map((product) => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    name={product.name}
                    price={product.price}
                    img_url={product.img_url}
                    handleDeleteInventoryItem={this.handleDeleteInventoryItem}
                    handleEditInventoryItem={this.handleEditInventoryItem}
                />
            )
        })

        return (
            <div className='parent'>
                <Switch>
                    <Route exact path='/' render={() => { return displayInventory }} />
                    {/* doing it this way because I have to use component */}
                    {/* otherwise I would use render */}
                    <Route exact path='/edit/:id' component={() => <Form />} />
                    <Route exact path='/add' component={() => <Form handleOnAddToInventoryClick={this.handleOnAddToInventoryClick} />} />
                </Switch>
            </div>
        )
    }
}

export default Dashboard