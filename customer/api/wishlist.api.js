const { v4 : uuid } = require('uuid');

console.log('Wishlist API Called');

const wishList = new Map();

const addWishList = ({cusID, itemID})=>{
    const wishid = uuid();
    const cusWishList ={
        wishid,
        cusID,
        itemID
    }
        wishList.set(wishid, cusWishList);
}

const getWishList = ()=>{
    return [...wishList.values()]
}

const getWishCus = (cusID)=>{

    if(wishList.has(cusID)){
        return [...wishList.values(cusID === cusID)]
    }
    else {
        let msg = 'Not found in wish list'
        return msg;
    }
}

module.exports = {addWishList, getWishList, getWishCus}
