import '../App.css'
import Product from './Product'
import React, { Component } from 'react'

// this will be the product container

export class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: "",
            img: "",
            editing: false
        }
    }
    render() {
        // console.log(this.props.deleteProduct)
        const allProducts = this.props.products.map(product => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    deleteProduct={this.props.deleteProduct}
                />
            )
        })
        return (
            <div >
                {allProducts}
            </div>
        )
    }
}
export default Dashboard

