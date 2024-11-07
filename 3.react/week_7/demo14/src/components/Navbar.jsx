import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const count = useSelector(state=>state.counter.count)
  const cart = useSelector(state=>state.cart.cartData)
  const cartCount = cart.length
  // const [cartCount, setCartCount] = useState(0);
  // useEffect(()=>{
  //   if(localStorage.getItem('cart') !== null) {
  //     const cart = JSON.parse(localStorage.getItem('cart'));
  //     setCartCount(cart.length);
  //   }    
  // },[])
  
  return (<div className='mx-1'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-2">
      <Link className="navbar-brand" to="/">Redux</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <Link className="nav-item nav-link" to="/new-redux">Redux Toolkit Demo (count: {count})</Link>
          <Link className="nav-item nav-link" to="/products">Products</Link>
          <Link className="nav-item nav-link" to="/cart">Cart ({cartCount !== null ? cartCount : ""})</Link>
          <Link className="nav-item nav-link" to="/middleware">Middleware</Link>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar
