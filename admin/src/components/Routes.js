import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Products from '../pages/Products'
import Orders from '../pages/Orders'
import Analytics from '../pages/Analytics'
import AddProductDetail from '../pages/AddProductDetail'
import AddOrderDetail from '../pages/AddOrderDetail'


const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard}/>
            <Route path='/customers' component={Customers}/>
            <Route path='/products' component={Products}/>
            <Route path='/orders' component={Orders}/>
            <Route path='/analytics' component={Analytics}/>
            <Route path='/edit-product/:id' component={AddProductDetail}/>
            <Route path='/edit-order/:id' component={AddOrderDetail}/>

        </Switch>
    )
}

export default Routes
