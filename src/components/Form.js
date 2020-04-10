import React, { Component } from 'react'
import '../App.css'

// this is the gree edit box component

export class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            price: 0,
            imgurl:""
        }
    }
    handleChange = () => { //this needs to also clear the input boxes when clicked. 

    }
    addNewProduct = () => { // think this should be in app js then passed down as props but their compent tree has it here? 

    }
    render() {
        return (
            <div>
                Form.js
            </div>
        )
    }
}

export default Form
