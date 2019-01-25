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

    render() {
        let displayInventory = this.state.inventory.map((product) => {
            return (
                <Product key={product.id} id={product.id} name={product.name} price={product.price} img_url={product.img_url} handleDeleteInventoryItem={this.handleDeleteInventoryItem}/>
            )
        })

        return (
            <div className='parent'>
                <Switch>
                    <Route exact path='/' render={() => { return displayInventory }} />
                    {/* doing it this way because I have to use component */}
                    {/* otherwise I would use render */}
                    <Route exact path='/edit/:id' component={() => <Form handleOnAddToInventoryClick={this.handleOnAddToInventoryClick} />} />
                    <Route exact path='/add' component={() => <Form handleOnAddToInventoryClick={this.handleOnAddToInventoryClick} />} />
                </Switch>
            </div>
        )
    }
}

export default Dashboard