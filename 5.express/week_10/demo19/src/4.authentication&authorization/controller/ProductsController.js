const getAllProducts = (req, res) => {
    res.json({ "err": 0, "products": ['A', 'B', 'C'] })
}

const getProductById = (req, res) => {
    res.json({ "err": 0, "products": "Products by Id"})
}
const addProduct = (req, res) => {
    res.json({ "err": 0, "products": "Product added"})
}
const deleteProduct = (req, res) => {
    res.json({ "err": 0, "products": "Product deleted"})
}
const updateProduct = (req, res) => {
    res.json({ "err": 0, "products": "Product updated"})
}

export { getAllProducts, getProductById, addProduct, deleteProduct, updateProduct}