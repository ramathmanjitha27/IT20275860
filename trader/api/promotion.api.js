const { v4 : uuid } = require('uuid');

console.log('Promotion Api Called');
const promotions = new Map();


const addPromotion = ({Title, description, discount})=>{
    const promotionsID = uuid();
    const promotion = {
        promotionsID,
        Title,
        description,
        discount
    }
    promotions.set(promotionsID, promotion);
}

const getPromotions = ()=>{
    return [...promotions.values()];
}

module.exports = {addPromotion, getPromotions}


