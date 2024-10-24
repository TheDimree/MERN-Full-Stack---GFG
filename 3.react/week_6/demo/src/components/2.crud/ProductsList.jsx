import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import  getAllProducts, { deleteProduct } from './services/ProductServices';

const ProductsList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => {
      setProducts(res.data);
      // console.log(products);
    })
  }, [products])

  return (
    <>
      <div className="container">
        <div className='my-2'>
          <Link to={`/addproduct`} className="btn btn-primary me-2">
            Add Product
          </Link>
        </div>
        <div className="row my-2">
          {products.map((product, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm" style={{ width: '18rem' }}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ objectFit: 'cover', height: '150px' }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">Price: Rs. {product.price}</p>
                  <Link to={`/edit-product/${product.id}`} className="btn btn-primary me-2">
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}

export default ProductsList