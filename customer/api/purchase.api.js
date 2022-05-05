const { v4 : uuid } = require('uuid');

console.log('Purchase Api Called');
const purchases = new Map();


const addPurchase = ({name, price, description, quantity})=>{
    const purchid = uuid();
    const purchase = {
        purchid,
        name,
        price,
        description,
        quantity
    }

    purchases.set(purchid, purchase);
}

const getPurchase = ()=>{
    return [...purchases.values()];
}


module.exports = {addPurchase, getPurchase}


