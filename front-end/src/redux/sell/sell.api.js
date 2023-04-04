import axios from "axios";
import { baseURL } from "../../utils/variables";

// data get apis-----------------------------------

export const getBulbsAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}bulbs`,{headers})
    return res.data

}

export const getPlywoodAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}plywood`,{headers})
    return res.data

}


export const getMachinsAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}machines`,{headers})
    return res.data

}

export const getMedicineAPI =async (headers)=>{

    const res = await axios.get(`${baseURL}plywood`,{headers})
    return res.data

}

// data add apis--------------------------------------


export const addBulbsAPI =async (payload,headers)=>{

    const res = await axios.post(`${baseURL}bulbs/add`,payload,{headers})
    return res.data

}

export const addPlywoodAPI =async (payload,headers)=>{

    const res = await axios.post(`${baseURL}plywood/add`,payload,{headers})
    return res.data

}


export const addMachinsAPI =async (payload,headers)=>{

    const res = await axios.post(`${baseURL}machines/add`,payload,{headers})
    return res.data

}

export const addMedicineAPI =async (payload,headers)=>{

    const res = await axios.post(`${baseURL}plywood/add`,payload,{headers})
    return res.data

}


// data patch apis --------------------------------------


export const patchBulbsAPI =async (payload,id,headers)=>{

    const res = await axios.patch(`${baseURL}bulbs/update/${id}`,payload,{headers})
    return res.data

}

export const patchPlywoodAPI =async (payload,id,headers)=>{

    const res = await axios.patch(`${baseURL}plywood/update/${id}`,payload,{headers})
    return res.data

}


export const patchMachinsAPI =async (payload,id,headers)=>{

    const res = await axios.patch(`${baseURL}machines/update/${id}`,payload,{headers})
    return res.data

}

export const patchMedicineAPI =async (payload,id,headers)=>{

    const res = await axios.patch(`${baseURL}plywood/update/${id}`,payload,{headers})
    return res.data

}


// data delete apis ----------------------------------------------

export const deleteBulbsAPI =async (id,headers)=>{

    const res = await axios.delete(`${baseURL}bulbs/delete/${id}`,{headers})
    return res.data

}

export const deletePlywoodAPI =async (id,headers)=>{

    const res = await axios.delete(`${baseURL}plywood/delete/${id}`,{headers})
    return res.data

}


export const deleteMachinsAPI =async (id,headers)=>{

    const res = await axios.delete(`${baseURL}machines/delete/${id}`,{headers})
    return res.data

}

export const deleteMedicineAPI =async (id,headers)=>{

    const res = await axios.delete(`${baseURL}plywood/delete/${id}`,{headers})
    return res.data

}


