import React from 'react'
import { AiOutlineShoppingCart, AiOutlineCloseCircle, AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { MdAccountCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

const Navbar = (props) => {
  
  const toggleCart = () => {
         if(ref.current.classList.contains('translate-x-full')){
          ref.current.classList.remove('translate-x-full')
          ref.current.classList.add('translate-x-0')
         }
         else if(!ref.current.classList.contains('translate-x-full'))
         {
          ref.current.classList.remove('translate-x-0')
          ref.current.classList.add('translate-x-full')
         }
  }
  const ref = useRef()
  return (
    <>
    <div className="flex flex-col md:flex-row md:justify-start justify-between items-center py-1 shadow-xl sticky top-0 bg-white z-10">
       <div className="logo mx-5 my-1">
        <Link to="/" className="nav-link"><img width={200} height={30} src="/logo.png" alt="" /></Link>
       </div>
       <div className="nav">
        <ul className="flex items-center space-x-4 font-bold md:text-xl my-3">
          <Link to="/bat" className="nav-link hover:text-blue-700">
            <li>Bat</li>
            </Link>
          <Link className="nav-link hover:text-blue-700" to="/ball">
            <li>Ball</li>
            </Link>
          <Link to="/kit" className="nav-link hover:text-blue-700">
            <li>Kit</li>
            </Link>
        </ul>
       </div>
       <div className="cart absolute flex right-0 mx-5 top-4 cursor-pointer">
       <Link to="/login" className="link-dark"><MdAccountCircle className="text-xl md:text-4xl mx-2" /></Link>
       <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-4xl" />
       </div>
       <div ref={ref} className="sideCart overflow-y-scroll w-72 h-[100vh] absolute top-0 right-0 p-10 bg-blue-100 shadow-xl transform transition-transform translate-x-full">
       <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
       <span onClick={toggleCart} className="absolute top-0 right-0 cursor-pointer text-2xl text-blue-500"><AiOutlineCloseCircle /></span>
       {Object.keys(props.cart).length===0 && <div className="my-4">No Item in the Cart 
       Please add something for Checkout</div>}
          <ol>
          {Object.keys(props.cart).map((k)=>{return <li key={k}>
          <div className="item flex my-2">
          <div className="w-2/3 font-semibold p-2">1. {props.cart[k].name} - Good Choice</div>
          <div className="flex item-center font-semibold justify-center w-1/3 my-2"><AiOutlineMinusCircle className="my-2 cursor-pointer" onClick={()=>props.removeFromCart(k,1,props.cart[k].price,props.cart[k].name, props.cart[k].size,props.cart[k].varient)}/>
           <span className="mx-2 my-1">{props.cart[k].qty}</span><AiOutlinePlusCircle className="my-2 cursor-pointer" onClick={()=>props.addToCart(k,1,props.cart[k].price,props.cart[k].name, props.cart[k].size,props.cart[k].varient)} /></div>
          </div>
          </li>})}
          </ol>
        <Link to="/checkout"><button class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"><BsFillBagCheckFill className="mx-1 my-1" />Checkout</button></Link>
        <button onClick={props.clearCart} class="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Clear Cart</button>
       </div>
    </div>
     </>
  )
}

export default Navbar