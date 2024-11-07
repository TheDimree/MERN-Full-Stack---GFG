import React from 'react';

const ProductsList = ({ product, addToCart }) => {
    return (
        <div className="col-4 my-2">
            <div className="card mx-auto" style={{ width: "18rem" }} key={product.id}>
                <div className="card-body">
                    <h5 className="card-title text-center">{product.name}</h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <p className="card-text text-center">
                        Price: {product.price} & Quantity: {product.quantity}
                    </p>
                    <button className="btn btn-primary" onClick={()=>addToCart(product.id)}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsList;
