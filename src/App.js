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
      productToEdit:0
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:4007/api/products`).then(res => {
      this.setState({
        inventory: res.data
      })
      // console.log('componentDidMount is WORKING!')
    })
  }
  addProducts = (product) => {
    axios.post(`http://localhost:4007/api/products`, product).then(res => {
      this.setState({
        inventory: res.data
      })
      console.log('add products working?')
      this.componentDidMount()
    })
  }
  editProducts = (id, updatedProduct) => {
    axios.put(`http://localhost:4007/api/products/${id}`, updatedProduct).then(res => {
      this.setState({
        inventory: res.data
      })
    }).catch(error => console.log(`error w/ editProducts Frontend${error}`))
  }
  deleteProduct = (id) => {
    axios.delete(`http://localhost:4007/api/products/${id}`).then(res => {
      this.componentDidMount()
      console.log(res)
      // this.setState({
      //   inventory: res.data
      // })
    })
  }
  productToEdit = (id) => {
    this.setState({
      productToEdit: id
    })
    console.log(id)
  }
  // productId = () => {
  //   const productId = this.state.inventory.map(product => product.id)
  //   console.log(productId)
  // }
  render() {
    const productId = this.state.inventory.map(product => product.id)
    const product = this.state.inventory.map(product => product)
    return (
      <div className="master-div">
        <Header />
        
          <Dashboard
            products={this.state.inventory}
            componentDidMount={this.componentDidMount}
            editProducts={this.editProducts}
            deleteProduct={this.deleteProduct}
          />
          <Form
            products={this.state.inventory}
            product={product}
            productId={productId}
            componentDidMount={this.componentDidMount}
            addProducts={this.addProducts}
            productToEdit={this.productToEdit}
            editProducts={this.editProducts} 
          />
      </div>
    )
  }
}

export default App
