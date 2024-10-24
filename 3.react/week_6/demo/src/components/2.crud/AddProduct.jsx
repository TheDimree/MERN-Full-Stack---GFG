import React, { useState } from "react";
import { addProduct } from "./services/ProductServices";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const [state, setState] = useState({ name: "", price: "", image: "" });
    const navigate = useNavigate();
    const handler = (event) => {
        const { name, value } = event.target;
        setState({ ...state, [name]: value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (state.name !== "" && state.price !== "" && state.image !== "") {
            addProduct(state)
                .then((res) => {
                    if (res.data) {
                        alert("Product Added");
                        navigate("/crud");
                    }
                })
                .catch((err) => console.log(err));
        } else {
            alert("All fields are compulary");
        }
    };
    return (
        <div>
            <h2> Add Product</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label> Name </label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        onChange={handler}
                    />
                </div>
                <div className="form-group">
                    <label> Price </label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        onChange={handler}
                    />
                </div>
                <div className="form-group">
                    <label> Image Path </label>
                    <input
                        type="text"
                        className="form-control"
                        name="image"
                        onChange={handler}
                    />
                </div>
                <input type="submit" value="Submit" className="btn btn-success" />
            </form>
        </div>
    );
};

export default AddProduct;
