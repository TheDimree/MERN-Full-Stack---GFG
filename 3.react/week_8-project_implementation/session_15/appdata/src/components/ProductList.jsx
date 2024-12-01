import React from 'react'
import { Link } from 'react-router-dom'
const ProductList = ({product}) => {
  return (
    <div className='col-md-4'>
        <div className="card" style={{width: '18rem'}}>
  <img src={product.thumbnail} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <p className="card-text"> Price {product.price} </p>
    <Link to={`/product-details/${product.id}`} className="btn btn-primary">More Details..</Link>
  </div>
</div>
    </div>
  )
}

export default ProductList