const { v4 : uuid } = require('uuid');

console.log('Promotion Api Called');
const promotions = new Map();

promotions.set("1",{promotionsID:1,Title:"Discount 1", discount:"10%", description:"Debit cards only" })
promotions.set("2",{promotionsID:2,Title:"Discount 2", discount:"15%", description:"Master cards only" })
promotions.set("3",{promotionsID:3,Title:"Discount 3", discount:"20%", description:"Visa cards only" })
promotions.set("4",{promotionsID:4,Title:"Discount 4", discount:"25%", description:"Debit cards only" })
promotions.set("5",{promotionsID:5,Title:"Discount 5", discount:"30%", description:"Visa cards only" })

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


