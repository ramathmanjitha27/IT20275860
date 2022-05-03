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

const updateItem = (id, {name, price, description, quantity}) =>{
    let msg;
    const item = {
        id,
        name,
        price,
        description,
        quantity
    }
    if (items.has(id)) {
        msg = 'Item updated'
        items.set(id, item)
    }
        else
            msg = 'item not updated'

    return msg;
}

module.exports = {addItem, getItems,getItem, updateItem}


