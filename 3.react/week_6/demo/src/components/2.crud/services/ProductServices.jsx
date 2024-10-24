import axios from "axios";

export const API = "http://localhost:8008/products";

export default function getProducts() {
    return axios.get(API);
}

const getProductById = (id) => {
    return axios.get(`${API}/${id}`);
};

const addProduct = (data) => {
    return axios.post(API, data);
};

const deleteProduct = (id) => {
    return axios.delete(`${API}/${id}`);
};

const updateProduct = (id, data) => {
    return axios.put(`${API}/${id}`, data);
};

export {
    getProductById,
    addProduct,
    deleteProduct,
    updateProduct,
};

// total 6 things are being exported, and getProducts is exported as default, {} are not used for default importing.