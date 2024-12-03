import { API } from "./api.js"

export const cities = async()=>{
try{
const res = await fetch(`${API}/ciudades/all`,{
method: 'GET',
headers: {
    'Content-Type' : 'application/json',
}
})

if(!res.ok){
throw new Error(`Error: ${res.status}`)
}

const prod = await res.json()
return prod
}catch(error){
    console.error(error)
    }
}