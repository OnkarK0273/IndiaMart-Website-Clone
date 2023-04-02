import axios from 'axios'
import { baseURL } from "../../utils/variables";

export const signAPI =async (payload)=>{
    const res = await axios.post(`${baseURL}/users/register`,payload)
    return res.data
}

export const loginAPI =async (payload)=>{
    const res = await axios.post(`${baseURL}/users/login`,payload)
    return res.data
}