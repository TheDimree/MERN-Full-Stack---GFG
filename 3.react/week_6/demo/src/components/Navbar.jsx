import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My Project</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/class-components">Class Components</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/crud">Crud</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/exception">Error Handling</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/use-memo">useMemo</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/use-callback">useCallback</Link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>
  )
}
export default Navbar;