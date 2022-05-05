const { v4 : uuid } = require('uuid');

console.log('Customer API Called');

const customers = new Map();

customers.set("1", {cusID:1, cusName:"jagath", cusEmail:"jagath@gmail.com", cusAddres:"Colombo"})
customers.set("2", {cusID:2, cusName:"Sunil", cusEmail:"sunil@gmail.com", cusAddres:"Matara"})
customers.set("3", {cusID:3, cusName:"Nimal", cusEmail:"nimal@gmail.com", cusAddres:"Galle"})
customers.set("4", {cusID:4, cusName:"Jane", cusEmail:"jane@gmail.com", cusAddres:"Kandy"})
customers.set("5", {cusID:5, cusName:"Ann", cusEmail:"ann@gmail.com", cusAddres:"Jafna"})

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