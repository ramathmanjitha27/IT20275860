const Router = require('@koa/router');

const {addWishList, getWishList, getWishCus} = require('../api/wishlist.api');
const {getItem} = require("../../trader/api/item.api");

console.log('Wish List Routes called')

const router = new Router({
    prefix: '/wish'
});

router.post('/', ctx =>{
    let wishList = ctx.request.body;
    wishList = addWishList(wishList);
    ctx.response.status = 201;
    ctx.body = wishList;
})

router.get('/', ctx =>{
    ctx.body = getWishList();
})

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getWishCus(id);
});

module.exports = router;