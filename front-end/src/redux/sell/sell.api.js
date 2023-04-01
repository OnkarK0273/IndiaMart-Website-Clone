import axios from "axios";
import { baseURL } from "../../utils/variables";


export const getBulbsAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}/bulbs`,{headers})
    return res.data

}

export const getPlywoodAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}/plywood`,{headers})
    return res.data

}


export const getMachinsAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}/machines`,{headers})
    return res.data

}

export const getMedicineAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}/plywood`,{headers})
    return res.data

}
