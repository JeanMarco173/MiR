import express from 'express'
const app = express();
import productRoutes from './routes/product.routes.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/product', productRoutes)

app.use('/', (req,res,next)=>{
    res.status(404).json({ message: "NOT FOUND", data: []})
})

app.use((req,res,next)=>{
    res.status(403).json({ message: "Parametros incompletos", data: []})
})

app.listen(3000, () => { console.log("Back is alive in 3000") })