import { useState, useEffect } from "react";
import { useCart } from "../../context/cart-context";
import { FindProductInCart } from "../../utils/FindProductInCart";
export const ProductCard = ({ product }) => {
    const imageUrl = product.images[0].replace(/[\[\]"]+/g, '');

    const { cart, cartDispatch } = useCart();

    const isProductInCart = FindProductInCart(cart, product.id);
    console.log("checking: ", isProductInCart)
    
    const onCartClick = (product) => {
        
        !isProductInCart ?
            cartDispatch({
            type: 'ADD_TO_CART',
            payload: { product }
            }) : 
            cartDispatch({
            type: 'REMOVE_FROM_CART',
            payload: { id: product.id }
        })
    }

    return (
        <>
            <div className="card card-vertical d-flex direction-column relative shadow">
                <div className="card-image-container">
                    <img className="card-image" src={imageUrl} alt="shoes" />
                </div>
                <div className="card-details">
                    <div className="card-des">{product.title}</div>
                    <div className="card-description">
                        {/* <p className="card-des">Men Sneakers</p> */}
                        <p className="card-price">
                            Rs. {product.price}
                            {/* <span className="price-strike-through">Rs. 2499</span>
                            <span className="discount">(30% OFF)</span> */}
                        </p>
                    </div>
                    <div className="cta-btn">
                        <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                            <span className="material-icons-outlined">
                                favorite
                            </span>
                            Add To Whishlist
                        </button>
                        <button onClick={() => onCartClick(product)} className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                            <span className="material-icons-outlined">
                                {
                                    isProductInCart ? 'shopping_cart_checkout' : 'shopping_cart'
                                }                                
                            </span>
                            {
                                isProductInCart ? 'Go to Cart' : 'Add to Cart'
                            }
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}