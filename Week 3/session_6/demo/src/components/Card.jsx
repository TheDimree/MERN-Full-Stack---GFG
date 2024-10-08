const Card=({product,addCart})=>{
    return(
        <div>
            <h4> {product.name}</h4>
            <img src={product.image} width={200} height={150}/>
            <p>
                Price : Rs.{product.price}
            </p>
            <button onClick={()=> addCart(product.id)}> Add Cart</button>
        </div>
    )
}
export default Card;