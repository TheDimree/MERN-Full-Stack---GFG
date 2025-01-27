import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Crud App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/addproduct">Add Product</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/exception">Error Handling</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usememo">useMemo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/usecallback">useCallback</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Nav