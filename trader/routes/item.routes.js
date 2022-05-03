const Router = require('@koa/router');
const {addItem, getItems, getItem} = require('../api/item.api');

console.log('Item routes Called');

const router = new Router({
    prefix: '/item'
});

router.get('/', ctx =>{
    ctx.body = getItems();
})

router.post('/', ctx =>{
    let item = ctx.request.body;
    item = addItem(item);
    ctx.response.status = 201;
    ctx.body = item;
})

router.get('/:id', ctx => {
    const id = ctx.params.id;
    ctx.body = getItem(id);
});

module.exports = router;
