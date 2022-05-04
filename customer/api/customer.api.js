const { v4 : uuid } = require('uuid');

console.log('Customer API Called');

const customers = new Map();

const registerCus = ({cusName, cusEmail, cusGender})=>{
    const cusID = uuid();
    const customer = {
        cusID,
        cusName,
        cusEmail,
        cusGender
    }
    customers.set(cusID, customer)
    return customer;
}

const getCustomer = ()=> {
    return [...customers.values()]
}

module.exports = {registerCus, getCustomer}