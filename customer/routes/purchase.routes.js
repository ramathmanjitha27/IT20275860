const Router = require('@koa/router');
const {addPurchase, getPurchase} = require('../api/purchase.api');

console.log('Purchase routes Called');

const router = new Router({
    prefix: '/purchase'
});

router.get('/', ctx =>{
    ctx.body = getPurchase();
})

router.post('/', ctx =>{
    let purchase = ctx.request.body;
    purchase = addPurchase(purchase);
    ctx.response.status = 201;
    ctx.body = purchase;
})

module.exports = router;
