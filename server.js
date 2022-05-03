const Koa = require('koa');

const app = new Koa();

app.use(ctx =>{
    ctx.body = 'Hello Koa from lab assestment';
})

app.listen(3001);
console.log('Application is running on port 3000');