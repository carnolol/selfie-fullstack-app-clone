import '../App.css'
import Product from './Product'
import React, { Component } from 'react'

// this will be the product container

export class Dashboard extends Component {
    render() {
        // console.log(this.props.deleteProduct)
        const allProducts = this.props.products.map(product => {
            return (
                <Product
                    key={product.id}
                    product={product}
                    productToEdit={this.props.productToEdit}
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

