import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Form from './components/Form'
// import Product from './components/Product'

export default 
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/add' component={Form}/>
    </Switch>