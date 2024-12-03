import { Router } from "express";
import {readFile, writeFile} from 'fs/promises';

const filecity = await readFile('./JSON/ciudades.json', 'utf-8')
const cityData = JSON.parse(filecity);

const router = Router()

router.get('/all', async (req,res)=>{
    if(cityData){
        res.status(200).json(cityData)
    }else{
       res.status(400).json({status:false})
    }
   })

  
   export default router