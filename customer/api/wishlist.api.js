const { v4 : uuid } = require('uuid');

console.log('Wishlist API Called');

const wishLists = new Map();

const addWishList = ({id,name, price, description, quantity})=>{
    const wishID = uuid();
    const cusWishList ={
        wishID,
        id,
        name,
        price,
        description,
        quantity
    }
        wishLists.set(wishID, cusWishList);
}

const getWishList = ()=>{
    return [...wishLists.values()]
}



module.exports = {addWishList, getWishList}
