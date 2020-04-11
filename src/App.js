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
      inventory: []
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:4007/api/products`).then(res => {
      this.setState({
        inventory: res.data
      })
      console.log('componentDidMount is WORKING!')
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
      // this.setState({
      //   inventory: res.data
      // })
    })
  }
  render() {
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
            componentDidMount={this.componentDidMount}
            addProducts={this.addProducts}
            // editProducts={this.editProducts} 
          />
      </div>
    )
  }
}

export default App
