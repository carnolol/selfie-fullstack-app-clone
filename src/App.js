import React, { Component } from 'react'
import axios from 'axios'
import routes from './routes'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
//product is a functional componenent child of Dashboard.js

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inventory: [],
      productIWantToEdit: 0
    }
  }
  componentDidMount = () => {
    axios.get(`/api/inventory`).then(res => {
      this.setState({
        inventory: res.data
      })
      // console.log('componentDidMount is WORKING!')
    })
  }
  addProducts = (newProduct) => {
    axios.post(`/api/products`, newProduct).then(res => {
      this.setState({
        inventory: res.data
      })
      console.log('add products working?')
      this.componentDidMount()
    })
  }
  editProducts = (id, updatedProduct) => {
    axios.put(`/api/products/${id}`, updatedProduct).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(error => console.log(`error w/ editProducts Frontend${error}`))
  }
  deleteProduct = (id) => {
    axios.delete(`/api/products/${id}`).then(res => {
      this.componentDidMount()
      console.log(res)
    })
  }
  productToEdit = (id) => {
    this.setState({
      productIWantToEdit: id
    })
  }
  render() {
    console.log('state of app.js', this.state.productIWantToEdit)
    return (
      <div className="master-div">
        <Header />
          <Dashboard
            products={this.state.inventory}
            componentDidMount={this.componentDidMount}
            productToEdit={this.productToEdit}
            deleteProduct={this.deleteProduct}
          />
          <Form
            products={this.state.inventory}
            componentDidMount={this.componentDidMount}
            addProducts={this.addProducts}
            productImEditing={this.state.productIWantToEdit}
            editProducts={this.editProducts} 
          />
          {/* {routes} */} 
      </div>
    )
  }
}

export default App
