import express from 'express'
import cityRouter from './routes/city.routes.js';
import saleRouter from './routes/orders.routes.js'
import 'dotenv/config'

const app = express()
const port = process.env.PORT

app.use(express.json());

app.listen(port, ()=> {
    console.log(`servidor levantado en puerto ${port}`)
})

app.use(express.static('./public'))

app.use('/ciudades', cityRouter)
app.use('/orders', saleRouter)

