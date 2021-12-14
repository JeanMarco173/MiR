import express from 'express'
const app = express();
import shopRoutes from './routes/shop.routes.js'
const { pathname: publicFolder } = new URL('./public', import.meta.url);
const { pathname: notFound } = new URL('./views/notFound.html', import.meta.url);

app.use(express.static(publicFolder));

app.use(express.urlencoded({ extended: true }));
app.use('/', shopRoutes)

app.use('/', (req,res,next)=>{
    res.status(404).sendFile(notFound)
})

app.listen(3000, () => { console.log("Back is alive on 3000") })