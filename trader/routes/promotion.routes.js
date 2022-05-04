const Router = require('@koa/router');
const {addPromotion, getPromotions} = require('../api/promotion.api');

console.log('Promotion routes Called');

const router = new Router({
    prefix: '/promotion'
});

router.get('/', ctx =>{
    ctx.body = getPromotions();
})

router.post('/', ctx =>{
    let promotion = ctx.request.body;
    promotion = addPromotion(promotion);
    ctx.response.status = 201;
    ctx.body = promotion;
})

module.exports = router;
