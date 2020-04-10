import React, { Component } from 'react'
import '../App.css'


// this is the green edit box component

class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            price: 0,
            img: ""
        }
    }
    handleChange = () => { //this needs to also clear the input boxes when clicked. 

    }
    addNewProduct = () => { // think this should be in app js then passed down as props but their compent tree has it here? 

    }
    render() {
        return (
            <div className="parent-add-inventory-container">
                <div className="add-inventory-container">
                    <img></img>
                    <p>
                        Image URL:
                        <input></input>
                    </p>
                    <p>
                        Product Name:
                        <input></input>
                    </p>
                    <p>
                        Price:
                        <input></input>
                    </p>
                    <button>Cancel</button>
                    <button>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form
