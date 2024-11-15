import React from 'react'
import { Link } from 'react-router-dom'
const Nav = () => {
  const category=["mens","womens","kids"];
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className='nav-item'> <Link to="/" className='nav-link'> Home </Link></li>
        <li className='nav-item'> <Link to="/about-us" className='nav-link'> About Us </Link></li>
        <li className='nav-item'> <Link to="/services" className='nav-link'> Services </Link></li>
        <li className='nav-item'> <Link to="/gallery" className='nav-link'> Gallery </Link></li>
        <li className='nav-item'> <Link to="/contact" className='nav-link'> Contact Us </Link></li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {category.map((cat,ind)=> 
               <li key={ind}><Link className="dropdown-item" to={`/catproducts/${cat}`}> {cat}</Link></li>
            )}
          </ul>
        </li>
      </ul>
    </nav>
  )
}

export default Nav