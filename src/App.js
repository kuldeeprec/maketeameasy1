import './App.css';
import Navbar from './pages/Navbar';
import Footer from './components/Footer';
import Bat from './pages/Bat';
import Checkout from './pages/Checkout';
import Ball from './pages/Ball';
import Kit from './pages/Kit';
import Order from './pages/Order';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Forgot from './pages/Forgot';
import Index from './pages/Index';
import Slug from './pages/product/Slug';
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () =>  {
  const [cart, setCart] = useState({})
  const [lin1, setLin1] = useState("")
  const [subTotal, setSubTotal] = useState(0)
  useEffect(() => {
      try {
        if(localStorage.getItem("cart")){
          setCart(JSON.parse(localStorage.getItem("cart")))
          saveCart(JSON.parse(localStorage.getItem("cart")))
        }
      } catch (error) {
         console.log(error)
         localStorage.clear()
      }
  }, [])
  const saveCart = (myCart) => {
    localStorage.setItem("cart",JSON.stringify(myCart));
    let subt = 0;
    let keys = Object.keys(myCart);
    for(let i=0;i<keys.length;i++)
    {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
  }
  const addToCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty + qty
    }
    else
    {
      newCart[itemCode] = {qty: 1, price, name, size,variant}
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const removeFromCart = (itemCode, qty, price, name, size, variant) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty - qty
    }
    if(newCart[itemCode]["qty"]<=0)
    {
      delete newCart[itemCode];
    }
    setCart(newCart)
    saveCart(newCart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})
  }
  const buyNow = (itemCode, qty, price, name, size, variant) => {
    let newCart = {itemCode: {qty: 1, price, name, size, variant}};
    setCart(newCart)
    saveCart(newCart)
    console.log(newCart)
  }
  
  const clLink = (myLin) =>{
    localStorage.removeItem('lin')
    localStorage.setItem("lin", myLin);
    setLin1(localStorage.getItem("lin"))
    console.log(lin1, "Yes")
  }
  useEffect(() => {
      setLin1(localStorage.getItem("lin"));
  },[]);
  return (
     <BrowserRouter>
     <Navbar cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}/>
     <Routes>
        <Route path="/" element={<Index />}>
          
        </Route>
        <Route path="/bat" element={<Bat />}>
          
        </Route>
        <Route path="/ball" element={<Ball clLink={clLink}/>}>
          
        </Route>
        <Route path="/kit" element={<Kit />}>
        
        </Route>
        <Route path={`/${lin1}/:userId`} element={<Slug buyNow={buyNow} cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}/>}>
        
        </Route>
        <Route path="/checkout" element={<Checkout cart={cart} addToCart={addToCart} removeFromCart={removeFromCart}
      clearCart={clearCart} subTotal={subTotal}/>}>
        
        </Route>
        <Route path="/order" element={<Order />}>
        
        </Route>
        <Route path="/login" element={<Login />}>
        
        </Route>
        <Route path="/signup" element={<Signup />}>
        
        </Route>
        <Route path="/forgot" element={<Forgot />}>
        
        </Route>
    </Routes>
     <Footer />
     </BrowserRouter>
  );
}

export default App;
