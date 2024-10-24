import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({ product }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <Link to={`/product-detail/${product.id}`}>
                <img src={product.thumbnail} className="card-img-top" alt="dummy image" height={250} width={200} />
            </Link>
            <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Price: {product.price} <br />
                    Discount: {product.discountPercentage}% <br />
                    Stock: {product.stock}</p>
                {/* <p className="card-text">{product.description}</p> */}
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded'>Add To Cart</button>
            </div>
        </div>
    )
}

export default ProductsList
