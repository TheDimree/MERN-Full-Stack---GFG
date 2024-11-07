import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const {count}=useSelector(state=> state);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Redux Application</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/counter">Counter {count>0 && <span>({count}) </span>}</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar