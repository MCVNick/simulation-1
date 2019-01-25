module.exports = {
    getAllProducts: (req, res) => {
        req.app.get('db').get_inventory()
            .then(products => res.status(200).send(products))
            .catch(error => res.status(500).send(console.log('O snap something went wrong in getting all products in the controller')))
    },
    postNewProduct: (req, res) => {
        const { img_url, name, price } = req.body
        req.app.get('db').create_product(name, price, img_url)
            .then(product => { res.sendStatus(200); console.log(img_url, name, price) })
            .catch(error => res.status(500).send(errorMessage = 'O snap something went wrong posting an item in the controller'))
    },
    deleteProduct: (req, res) => {
        const { id } = req.params
        req.app.get('db').delete_product(id)
            .then(() => res.sendStatus(200))
            .catch((error) => res.sendStatus(404))
    },
    updateProduct: (req, res) => {
        const { id } = req.params
        const { img_url, name, price } = req.body

        console.log(id, img_url, name, price)

        req.app.get('db').update_product(id, name, price, img_url)
            .then(product => res.sendStatus(200))
            .catch(error => {console.log('you broked it');res.sendStatus(500)})
    }
}