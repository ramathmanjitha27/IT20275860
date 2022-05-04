const Router = require('@koa/router');
const {registerCus, getCustomer} = require('../api/customer.api')

console.log('customer Routes called')

const router = new Router({
    prefix: '/customer'
});

router.post('/', ctx =>{
    let customer = ctx.request.body;
    customer = registerCus(customer);
    ctx.response.status = 201;
    ctx.body = customer;
})

router.get('/', ctx =>{
    ctx.body = getCustomer();
})

module.exports = router;