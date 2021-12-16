import express from 'express'
const app = express();
import productRoutes from './routes/product.routes.js'

app.use(express.urlencoded({ extended: true }));
app.use('/product', productRoutes)

app.use('/', (req,res,next)=>{
    res.status(404).sendFile(notFound)
})

app.listen(3000, () => { console.log("Back is alive on 3000") })