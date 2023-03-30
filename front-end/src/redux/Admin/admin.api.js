
import axios from "axios"
import { baseURL } from "../../utils/variables"

export const getPlywoodAPI = async () => {
    let res = await axios.get(`${baseURL}/plywood`, {
        headers: {
            'Content-Type': 'application/json',
            'token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiI2NDIyZjI1ODU3OTJmN2E4YzZkYmUyMGQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODAwMjcwNjgsImV4cCI6MTY4MDExMzQ2OH0.AL543FhZzCCWNmLE8xB_Umz04RjTZLRaZxJoNbI0wtI'
        }
    })
    return res.data.data
}