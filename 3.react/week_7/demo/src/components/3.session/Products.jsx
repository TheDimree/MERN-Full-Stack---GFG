// ! Using sessions to set and get value because redux counter lost its value on refresh.
// ! Probelm in Session: window.location.reload(); it reloads the whole page again and again to update the cartCounter.

import React, { useEffect, useState } from "react";
import ProductsList from "./ProductsList";

const Products = ({ title }) => {
    const dummyProducts = [
        { id: 1, name: "A", price: 300, quantity: 5 },
        { id: 2, name: "B", price: 5000, quantity: 5 },
        { id: 3, name: "C", price: 200, quantity: 5 },
        { id: 4, name: "D", price: 1100, quantity: 5 },
        { id: 5, name: "E", price: 2600, quantity: 5 },
        { id: 6, name: "F", price: 3400, quantity: 5 },
        { id: 7, name: "G", price: 5400, quantity: 5 },
        { id: 8, name: "H", price: 37800, quantity: 5 },
        { id: 9, name: "I", price: 56300, quantity: 5 },
    ];

    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setData(dummyProducts);
        }, 1000);
    });

    // const addToCart = (id) => {
    //     if (localStorage.getItem('cart') !== null) {
    //         let arr = JSON.parse(localStorage.getItem('cart'));
    //         if (arr.includes(id)) {
    //             alert("Product is already in cart")
    //         } else {
    //             arr.push(id);
    //             localStorage.setItem('cart', JSON.stringify(arr))
    //             alert("Added to cart successfully")
    //         }
    //     } else {
    //         let arr = [];
    //         arr.push(id);
    //         localStorage.setItem('cart', JSON.stringify(arr))
    //         alert("Added to cart successfully")
    //     }
    // }

    const addToCart = (id) => {
        // Retrieve the existing cart from localStorage
        const cart = localStorage.getItem('cart');
        
        // Initialize an array for the cart
        let arr = cart ? JSON.parse(cart) : [];
    
        // Check if the product ID is already in the cart
        if (arr.includes(id)) {
            alert("Product is already in cart");
        } else {
            arr.push(id); // Add the new product ID
            localStorage.setItem('cart', JSON.stringify(arr)); // Update the cart in localStorage
            window.location.reload();   // otherwise need to reload explicitly to increase cart but it needs to be sync with redux so that it doesn't load again and again.
            alert("Added to cart successfully");
        }
    };
    
    return (
        <div>
            <h1 className="text-center">{title}</h1>
            <div className="row">
                {data.map((product) => (
                    <ProductsList key={product.id} product={product} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );
};

export default Products;
