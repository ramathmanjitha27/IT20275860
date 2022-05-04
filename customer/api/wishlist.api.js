const { v4 : uuid } = require('uuid');

console.log('Wishlist API Called');

const wishList = new Map();

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
        wishList.set(wishID, cusWishList);
}

const getWishList = ()=>{
    return [...wishList.values()]
}



module.exports = {addWishList, getWishList}
