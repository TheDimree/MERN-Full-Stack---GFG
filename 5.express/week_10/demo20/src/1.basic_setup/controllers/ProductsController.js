export function getAllProducts(req, res) {
    res.json({"err": 0, "msg": "Getting all the products"})
}

export function getProductById(req, res) {
    res.json({"err": 0, "msg": `Getting product with id ${req.params.id}`})
    // res.json({"err": 0, "msg": `Getting product with id`})
}

export function addProduct(req, res) {
    const data = JSON.stringify(req.body)
    console.log(req.body)   // object works in console but not in JSON.
    res.json({"err": 0, "msg": `Creating product with data ${data}`})   // * Converts the object in req.body to a JSON string, so it can be included in the response message.
    // res.json({"err": 0, "msg": "Product Added"})
}

export function updateProduct(req, res) {
    const data = JSON.stringify(req.body)
    console.log(req.body?.name)
    res.json({"err": 0, "msg": `Updating product with id ${req.params.id} and data ${data}`})
    // res.json({"err": 0, "msg": "Product Updated"})
}

export function deleteProduct(req, res) {
    res.json({"err": 0, "msg": `Deleting product with id ${req.params.id}`})
    // res.json({"err": 0, "msg": "Product Deleted"})
}