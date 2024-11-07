import React from 'react'

const ProductList = ({product,addCart}) => {
  return (
    <div className="col-md-6 card" style={{width: '18rem'}}>
 
  <div className="card-body">
    <h5 className="card-title">{product.name}</h5>
    <p className="card-text">
        Price : {product.price} <br/>
        Quantity : {product.quantity}
    </p>
    <button className="btn btn-primary" onClick={()=> addCart(product.id)}>Add Cart</button>
  </div>
</div>
  )
}

export default ProductList