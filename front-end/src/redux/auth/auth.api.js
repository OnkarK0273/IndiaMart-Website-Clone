import axios from 'axios'


export const signAPI =async (payload)=>{
    const res = await axios.post(`http://localhost:4500/users/register`,payload)
    return res.data
}

export const loginAPI =async (payload)=>{
    const res = await axios.post(`http://localhost:4500/users/login`,payload)
    return res.data
}