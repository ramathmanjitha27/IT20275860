const { v4 : uuid } = require('uuid');

console.log('Trader API Called');

const traders = new Map();

const registerTrader = ({trName, trEmail, trGender})=>{
    const trID = uuid();
    const trader = {
        trID,
        trName,
        trEmail,
        trGender
    }
    traders.set(trID, trader)

}

const getTrader = ()=> {
    return [...traders.values()]
}

module.exports = {registerTrader, getTrader}