const { v4 : uuid } = require('uuid');

console.log('Item Api Called');
const items = new Map();


const addItem = ({name, price, description, quantity})=>{
    const id = uuid();
    const item = {
        id,
        name,
        price,
        description,
        quantity
    }

    items.set(id, item);
}

const getItems = ()=>{
    return [...items.values()];
}

const getItem = (id)=>{
    return items.get(id);
}

module.exports = {addItem, getItems,getItem}


