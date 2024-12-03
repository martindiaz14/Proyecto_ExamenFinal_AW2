import { API } from "./api.js";


export const NewTravel = async (NewTravelData) => {

    try {
        const res = fetch(`${API}/orders/newOrder`, {
            method: 'POST',
            body: JSON.stringify(NewTravelData),
            headers: {
                'Content-Type': 'application/json',
            }
        })
        return res
    } catch (error) {
        console.log(error)
    }

}