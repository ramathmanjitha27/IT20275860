const Koa = require('koa');
const bodyParser = require('koa-bodyparser')
const ItemRoutes = require('./trader/routes/item.routes');
const WishList = require('./customer/routes/wishlist.routes')
const caetListRoutes = require('./customer/routes/cart.routes')

const app = new Koa();
app.use(bodyParser());

app.use(ItemRoutes.routes())
    .use(ItemRoutes.allowedMethods())
    .use(WishList.routes())
    .use(WishList.allowedMethods())
    .use(caetListRoutes.routes())
    .use(caetListRoutes.allowedMethods())

app.listen(3001);
console.log('Application is running on port 3000');