module.exports = {
    getAllProducts:(req,res) => {
        const db = req.app.get('db')
        db.get_all_products().then(products => {
            res.status(200).send(products)
        }).catch(error => console.log(`error with getAllProducts ${error}`))
    }, 
    getOneProduct:(req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.get_one_product(id).then(product => {
            res.status(200).send(product)
        }).catch(err => console.log('err w/ get 1 product', err))
    },
    addProduct:(req,res) => {   
        const db = req.app.get('db')
        const newProduct = {...req.body}
        db.create_product(newProduct).then(newProduct => {
            res.status(200).send(newProduct)
        }).catch(error => console.log(`error with addProduct ${error}`))
    },
    editProduct:(req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const updatedProduct = {id, ...req.body}
        db.edit_product(updatedProduct).then(updatedProduct => {
            res.status(200).send(updatedProduct)
        }).catch(error => console.log(`error with editProduct ${error}`))
    },
    deleteProduct:(req,res) => {
        const db = req.app.get('db')
        const {id} = req.params
        db.delete_product(id).then(() =>{
            res.status(200).send('Product Deleted at your request')
        }).catch(error => console.log(`error with deleteProduct${error}`))
    }
}