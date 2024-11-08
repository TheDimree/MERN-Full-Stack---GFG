export const ProductCard = ({ product }) => {
    const imageUrl = product.images[0].replace(/[\[\]"]+/g, '');
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
                        <button className="button btn-primary btn-icon cart-btn d-flex                          align-center justify-center gap cursor btn-margin">
                            <span className="material-icons-outlined">
                                shopping_cart
                            </span>
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}