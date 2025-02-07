import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Header from './Header'
import Reviews from './Reviews'
import About from './About'
import Products from './Products'
import Home from '../Home'
import Productdetails from './Productdetails'
const router = () => {
    
  return (
    <div>
        
<Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/reviews'element={<Reviews/>}></Route>
    <Route path='/about'element={<About/>}></Route>
    <Route path='/product'element={<Products/>}></Route>
    <Route path='/product/:id' element={<Productdetails/>}></Route>
</Routes>
    </div>
  )
}

export default router