import React, { Component } from 'react'
import axios from 'axios'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
//product is a functional componenent child of Dashboard.js

export class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      inventory:[]
    }
  }
  componentDidMount = () => {
    axios.get(`http://localhost:4007/api/products`).then(res => {
      this.setState({
        inventory: res.data
      })
      console.log('component did mount working?')
    })
  }
  addProducts = (product) => {
    axios.post(`http://localhost:4007/api/products`, product).then(res => {
      this.setState({
        inventory: res.data
      })
      console.log('add products working?')
    })
  }
  editProducts = (id, name, price, img) => {

  }
  deleteProduct = (id) => {
    axios.delete(`http://localhost:4007/api/products/${id}`).then(res => {
      this.setState({
        inventory: res.data
      })
    })
  }
  render() {
    console.log(this.state.inventory)
    return (
      <div>
        <Header/>
        <Dashboard/>
        <Form/>
      </div>
    )
  }
}

export default App
