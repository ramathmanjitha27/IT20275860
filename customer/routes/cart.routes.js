const Router = require('@koa/router');

const { addCart, getCartList  } = require('../api/cart.api');

console.log('Cart Routes called')

const router = new Router({
    prefix: '/cart'
});

router.post('/', ctx =>{
    let cartList = ctx.request.body;
    cartList = addCart(cartList);
    ctx.response.status = 201;
    ctx.body = cartList;
})

router.get('/', ctx =>{
    ctx.body = getCartList();
})

module.exports = router;