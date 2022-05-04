const Router = require('@koa/router');
const {registerTrader, getTrader} = require('../api/trader.api')

console.log('Trader Routes called')

const router = new Router({
    prefix: '/trader'
});

router.post('/', ctx =>{
    let trader = ctx.request.body;
    trader = registerTrader(trader);
    ctx.response.status = 201;
    ctx.body = trader;
})

router.get('/', ctx =>{
    ctx.body = getTrader();
})

module.exports = router;