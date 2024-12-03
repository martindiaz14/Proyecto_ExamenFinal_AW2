import { navbar } from "../../components/navbar.js"
import { NewTravel } from "../../api/ordenDeCompra.api.js"
const btnCancel = document.getElementById('btnCancel')

document.addEventListener('DOMContentLoaded', async () => {
    const summary = JSON.parse(localStorage.getItem('summary'))
    const header = document.getElementById('header')
    header.innerHTML = navbar()

    //Este codigo puede variar dependiendo de como se maneje la informacion del localStorage
    const city = document.getElementById('city').value = summary.city.city
    const hotel = document.getElementById('hotel').value = summary.hotel
    const cantHuesped = document.getElementById('cant').value = summary.cant
    const days = document.getElementById('days').value = summary.days
    const total = document.getElementById('total').value = summary.total

    const btnViajar = document.getElementById('btnTravel');


    btnViajar.addEventListener('click', async (e) => {
        const name = document.getElementById('name').value
        const lastname = document.getElementById('lastName').value
        const email = document.getElementById('email').value
        const tel = document.getElementById('tel').value
        e.preventDefault()

        if (name == "" || lastname == "" || email == "" || tel == "") {
            alert("Complete todos los campos")
        } else {
            const NewTravelsObj = {
                city,
                hotel,
                cantHuesped,
                days,
                name,
                lastname,
                email,
                tel,
                total
            }
            const res = await NewTravel(NewTravelsObj)
            if (res.status) {
                alert("Viaje realizado")
                document.getElementById('name').value = "";
                document.getElementById('lastName').value = ""
                document.getElementById('email').value = ""
                document.getElementById('tel').value = ""
                localStorage.removeItem('summary')
                window.location.href = '../../index.html'
            } else {
                alert(res.status)
            }
        }
    })

})




btnCancel.addEventListener('click', () => {
    localStorage.removeItem('summary')
    window.location.href = '../../index.html'
})

