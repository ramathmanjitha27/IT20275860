const { v4 : uuid } = require('uuid');

console.log('Customer API Called');

const customers = new Map();

const registerCus = ({cusName, cusEmail, cusAddres})=>{
    const cusID = uuid();
    const customer = {
        cusID,
        cusName,
        cusEmail,
        cusAddres
    }
    customers.set(cusID, customer)

}

const getCustomer = ()=> {
    return [...customers.values()]
}

module.exports = {registerCus, getCustomer}