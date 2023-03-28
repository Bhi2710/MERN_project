import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
// import Header from './components/Header';
import Products from './Pages/Products'
import Home from './Pages/Home';
import Electronic from './Pages/Electronic';
import Jewelery from './Pages/Jewelery';
import Mens from './Pages/Mens';
import Women from './Pages/Women';
import User from './Pages/User';
import { getProducts } from './redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Contact from './Pages/Contact';

function App() {

  const {products} = useSelector(state => state.getProducts)
  console.log(products)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/product' element={<Products data={products} />}/>
        <Route path='/electronic' element={<Electronic data={products}/>}/>
        <Route path='/jewelery' element={<Jewelery data={products}/>}/>
        <Route path='/mens' element={<Mens data={products}/>}/>
        <Route path='/womens' element={<Women data={products}/>}/>
        <Route path='/user' element={<User />}/>
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
