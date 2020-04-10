import '../App.css'
import Product from './Product'
import React from 'react'

// this will be the product container

function Dashboard(props) {
        // console.log(this.props.deleteProduct)
        const allProducts = props.products.map(product => {
            return (
              <Product
                key={product.id}
                product={product}
                deleteProduct={props.deleteProduct}
              />
            )
          })
        return (
            <div >
                {allProducts}
            </div>
        )
    }

export default Dashboard
