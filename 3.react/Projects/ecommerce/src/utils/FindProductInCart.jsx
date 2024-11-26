import React from 'react'

export const FindProductInCart = (cart, id) => {
    console.log("cart: ", cart)
    const value = cart?.length > 0 && cart.some(product => product.id === id)
    console.log("id: ", id) 
    return value
}
