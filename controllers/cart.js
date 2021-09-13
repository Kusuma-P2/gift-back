import Cart from '../models/Cart.js'

export const addCart = (req,res) => {
    const {uid, products} = req.body
    
    Cart.find({uid},(err,docs) => {
        if (docs.length) {
            Cart.findOneAndUpdate({uid},{$addToSet: {products: products}},(err,cart)=>{
                res.json(cart)
            })
        } else {
            const cart = new Cart({
                uid,
                products: [products]
            })
            console.log({products: [products]});
            cart.save((err,cart) => {
                if (err) {
                    return res.status(400).json({
                      error: err,
                    });
                  }
                  res.json(cart);
            })
        }
    })
    
}

export const getCart = (req,res) => {
    const {uid} = req.body
    Cart.findOne({uid},(err,cart)=> {
        res.json(cart)
    })
}

export const removeCart = (req,res) => {
    const {uid,products} = req.body
    Cart.findOneAndUpdate({uid},{$pull: {products: products}},(err,cart)=>{
        res.json({
            cart,msg: 'Success',
        })
    })
}