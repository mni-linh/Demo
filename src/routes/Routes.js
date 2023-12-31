import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Courses from '../pages/Courses'
import Contact from '../pages/Contact'
import Stories from '../pages/Stories'
import Checkout from '../pages/Checkout'

const Routes = () => {
    return (
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/catalog/:slug' component={Product}/>
            <Route path='/catalog' component={Catalog}/>
            <Route path='/cart' component={Cart} />
            <Route path='/courses' component={Courses} />
            <Route path='/contact' component={Contact} />
            <Route path='/stories' component={Stories} />
            <Route path='/checkout' component={Checkout} />
        </Switch>
    )
}

export default Routes
