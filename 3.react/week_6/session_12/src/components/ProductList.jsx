import React from 'react'
import { Link } from 'react-router-dom'
const ProductList = ({product,delPro}) => {
  return (
    <div className="col-md-4 card" style={{width: '18rem'}}>
  <img src={product.image} className="card-img-top" alt="..." width={200} height={150}/>
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
        Price : Rs.{product.price}
    </p>
    <button className="btn btn-danger" onClick={()=> delPro(product.id)}>Delete </button>
    <Link to={`/edit-product/${product.id}`} className="btn btn-primary"> Edit</Link>
  </div>
</div>
  )
}

export default ProductList