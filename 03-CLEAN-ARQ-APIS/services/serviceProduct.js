const getAllProducts = (req, res) => {
    try {
        const products = []
        products.push(
            {
                nombre: "Producto 1",
                precio: 100
            },
            {
                nombre: "Producto 2",
                precio: 100
            }
        )
        return products
    } catch (error) {
        console.log(error)
    }

}

const createProduct = (req, res) => {
    try {
        const body = []
        body.push(
            {
                data: req.body,
                ok: true
            }
        )
        return body;
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllProducts,
    createProduct
}
