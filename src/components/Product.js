import React from 'react'
import '../App.css'


// this is displaying all of our products. create divs and stuff here.
// we are importing this is Dashboard.js

function Product(props) {
    // console.log(this.props.product)
    return (
        <div className="parent-product-container">
            <div className="product-container">
                <img
                    className="product-image"
                    src={props.product.img} />
                <div className="name-price-buttons-of-products">
                    <h4
                        className="product-name">
                        {props.product.name}
                    </h4>
                    <br></br>
                    <h4 className="product-price">
                        ${props.product.price}
                    </h4>
                    <br></br>
                    <button onClick={() => props.deleteProduct(props.product.id)}>Delete</button>
                    <button>Edit</button>
                </div>
            </div>
        </div>
    )
}

export default Product