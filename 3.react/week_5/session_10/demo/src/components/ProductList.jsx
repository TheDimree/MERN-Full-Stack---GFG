import React from 'react';
import { Link } from 'react-router-dom';
const ProductList = ({product}) => {
    return (
        <div className="card" style={{width: '18rem'}}>
            <img src={product.thumbnail} className="card-img-top" alt="..." width={200} height={250}/>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p> Price : {product.price} <br/> 
                   Discount : {product.discountPercentage}% </p>
                <p className="card-text"> Quantity :{product.stock}</p>
                <button className="btn btn-primary">Add To Cart</button>
                <Link to={`/product-details/${product.id}`} className='btn btn-secondary'> More Details</Link>
            </div>
        </div>
    )
}
export default ProductList