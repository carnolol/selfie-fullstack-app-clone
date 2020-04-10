import React, { Component } from 'react'
import '../App.css'


// this is the green edit box component

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayImage: true,
            name: "",
            price: "",
            img: ""
        }
    }
    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    addNewProduct = () => { // clear input boxes also
        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            img: this.state.img
        }
        this.props.addProducts(newProduct)
        this.props.componentDidMount()
        this.setState({
            name:'',
            price:'',
            img:''
        })
    }
    handleEditProduct = () => {
        this.props.editProducts(this.props.product.id, )
    }
    render() {
        console.log(this.state)
        return (
            <div className="parent-add-inventory-container">
                <div className="add-inventory-container">
                    <img
                        alt="Img here"
                        className="add-img"
                        src={this.state.img}></img>
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
                    <button>Cancel</button>
                    <button onClick={this.addNewProduct}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form
