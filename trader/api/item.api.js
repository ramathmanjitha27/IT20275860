const { v4 : uuid } = require('uuid');

console.log('Item Api Called');
const items = new Map();

items.set("1", {id:1, name:"Guitar1", price:142850, description:"Classic guitar 1", quantity:10})
items.set("2", {id:2, name:"Guitar2", price:152850, description:"Classic guitar 2", quantity:20})
items.set("3", {id:3, name:"Guitar3", price:162850, description:"Classic guitar 3", quantity:30})
items.set("4", {id:4, name:"Guitar4", price:172850, description:"Classic guitar 4", quantity:40})
items.set("5", {id:5, name:"Guitar5", price:182850, description:"Classic guitar 5", quantity:50})

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


