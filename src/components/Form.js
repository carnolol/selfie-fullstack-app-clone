import React, { Component } from 'react'
import '../App.css'


// this is the green edit box component

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: "",
            img: "",
            editmode: true,
            currentProductId: null
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleCancel = () => {
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }
    handleAddNewProduct = () => { // clear input boxes also
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        this.props.addProducts(newProduct)
        this.props.componentDidMount()
        this.setState({
            name: '',
            price: '',
            img: ''
        })
    }
    // handleEditProduct = () => {
    //     const updatedProduct = {
    //         name: this.state.name,
    //         price: this.state.price,
    //         img: this.state.img
    //     }
    //     this.props.editProducts(this.props.product.id, updatedProduct)
    //     this.props.componentDidMount()
    // }
    componentDidUpdate = (prevProps) => {
        console.warn('prevProps', prevProps)
        console.warn('props', this.props.product)
        if(){
            
        }
        // this.setState({
        //     currentProductId: this.props.productId
        // })

    }
    render() {
        console.log(this.props.product)
        return (
            <div className="parent-add-inventory-container">
                <div className="add-inventory-container">
                    <img
                        alt="no img yet"
                        className="add-img"
                        src={this.state.img ? `${this.state.img}` : 'https://pvsmt99345.i.lithium.com/t5/image/serverpage/image-id/10546i3DAC5A5993C8BC8C?v=1.0'}></img>
                    <div className="add-inventory-children">
                        <p>
                            Image URL:
                        </p>
                        <input
                            name="img"
                            value={this.state.img}
                            onChange={e => this.handleChange(e)}>
                        </input>
                    </div>
                    <div className="add-inventory-children">
                        <p>
                            Product Name:
                        </p>
                        <input
                            name="name"
                            value={this.state.name}
                            onChange={e => this.handleChange(e)}>
                        </input>
                    </div>
                    <div className="add-inventory-children">
                        <p>
                            Price:
                        </p>
                        <input
                            name="price"
                            value={this.state.price}
                            onChange={e => this.handleChange(e)}>
                        </input>
                    </div>
                    <div className="form-buttons">
                        <button className="form-button"
                            onClick={this.handleCancel}
                        >Cancel
                        </button>
                        <button className="form-button"
                            onClick={this.handleAddNewProduct}>Add to Inventory
                         </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
