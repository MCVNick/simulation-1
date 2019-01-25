import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
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

        this.getProducts = this.getProducts.bind( this )
    }

    componentDidMount() {
        console.log('calling')
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

    render() {
        let displayInventory = this.state.inventory.map((product) => {
            return (
                <Product key={product.id} name={product.name} price={product.price} img_url={product.img_url}/>
            )
        })

        return (
            <div>
                <Link to='/'>
                    <button onClick={this.getProducts}>
                        Dashboard
                    </button>
                </Link>
                <Link to='/add'>
                    <button>
                        Add Inventory
                    </button>
                </Link>

                <Switch>
                    <Route exact path='/' render={() => {return displayInventory}}/>
                    {/* doing it this way because I have to use component */}
                    {/* otherwise I would use render */}
                    <Route exact path='/edit/:id' component={() => <Form getProducts={this.getProducts}/>} />
                    <Route exact path='/add' component={() => <Form getProducts={this.getProducts}/>} />
                </Switch>
            </div>
        )
    }
}

export default Dashboard