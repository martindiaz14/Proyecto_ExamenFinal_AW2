import { Router } from "express";
import { readFile,writeFile } from 'fs/promises';

const fileUser = await readFile('./JSON/orders.json', 'utf-8')
const orderData = JSON.parse(fileUser);

const router = Router()

router.get('/all', async (req, res) => {
    if (orderData) {
        res.status(200).json(orderData)
    } else {
        res.status(400).json({ status: false })
    }
})

router.post('/newOrder', (req, res) => {
    const { city, hotel, cantHuesped, days, name, lastname, email, tel, total } = req.body
    try {
        const travel = {
            city,
            hotel,
            cantHuesped,
            days,
            name,
            lastname,
            email,
            tel,
            total
        };
        orderData.push({ travel })
        writeFile('./JSON/orders.json', JSON.stringify(orderData, null, 2))
        res.status(200).json({ status: true })
    } catch (error) {
        res.status(400).json({ status: false })
    }

})



export default router