const Koa = require('koa');
const cors = require('@koa/cors')
const bodyParser = require('koa-bodyparser')
const ItemRoutes = require('./trader/routes/item.routes');
const WishList = require('./customer/routes/wishlist.routes')
const cartListRoutes = require('./customer/routes/cart.routes')
const customerRoutes = require('./customer/routes/customer.routes')
const traderRoutes = require('./trader/routes/trader.routes')
const promotionRoutes = require('./trader/routes/promotion.routes')

const app = new Koa();
app.use(cors())
app.use(bodyParser());

app.use(ItemRoutes.routes())
    .use(ItemRoutes.allowedMethods())
    .use(WishList.routes())
    .use(WishList.allowedMethods())
    .use(cartListRoutes.routes())
    .use(cartListRoutes.allowedMethods())
    .use(customerRoutes.routes())
    .use(customerRoutes.allowedMethods())
    .use(traderRoutes.routes())
    .use(traderRoutes.allowedMethods())
    .use(promotionRoutes.routes())
    .use(promotionRoutes.allowedMethods())

app.listen(3001);
console.log('Application is running on port 3000');