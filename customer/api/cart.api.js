const { v4 : uuid } = require('uuid');

console.log('Cart API Called');

const cart = new Map();

const addCart = ({id,name, price, description, quantity})=>{
    const cartID = uuid();
    const cartList ={
        cartID,
        id,
        name,
        price,
        description,
        quantity
    }
    cart.set(cartID, cartList);
}

const getCartList = ()=>{
    return [...cart.values()]
}



module.exports = {addCart, getCartList}