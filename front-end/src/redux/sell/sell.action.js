import { addBulbsAPI, addMachinsAPI, addPlywoodAPI, deleteBulbsAPI, deleteMachinsAPI, deletePlywoodAPI, getBulbsAPI, getMachinsAPI, getPlywoodAPI, patchBulbsAPI, patchMachinsAPI, patchPlywoodAPI } from './sell.api'
import * as types from './sell.type'

// get actions ------------------------------------
export const getBulbs = (headers)=> async (dispatch)=>{
    dispatch({type:types.LOADING})
    try{
        let res = await getBulbsAPI(headers)
        // console.log(res)
        dispatch({type:types.GET_BULBS,payload:res.data})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const getPlywoods = (headers)=> async (dispatch)=>{
    dispatch({type:types.LOADING})
    try{
        let res = await getPlywoodAPI(headers)
        // console.log(res)
        dispatch({type:types.GET_PLYWOOD,payload:res.data})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const getMachins = (headers)=> async (dispatch)=>{
    dispatch({type:types.LOADING})
    try{
        let res = await getMachinsAPI(headers)
        // console.log(res)
        dispatch({type:types.GET_MACHINS,payload:res.data})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}



// add actions ---------------------------------

export const addBulbs = (payload,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
         await addBulbsAPI(payload,headers)
        dispatch({type:types.ADD_BULBS,payload:payload})
        

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}


export const addPlywoods = (payload,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
         await addPlywoodAPI(payload,headers)
        dispatch({type:types.ADD_PLYWOOD,payload:payload})
        

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const addMachins = (payload,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
         await addMachinsAPI(payload,headers)
        dispatch({type:types.ADD_MACHINS,payload:payload})
        

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}


// patch actions --------------------------------------------

export const patchBulbs = (body,id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await patchBulbsAPI(body,id,headers)
        dispatch({type:types.PATCH_BULBS})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}


export const patchPlywoods = (body,id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await patchPlywoodAPI(body,id,headers)
        dispatch({type:types.PATCH_PLYWOOD})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const patchMachins = (body,id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await patchMachinsAPI(body,id,headers)
        dispatch({type:types.PATCH_MACHINS})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}



// delete actions

export const deleteBulbs = (id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await deleteBulbsAPI(id,headers)
        dispatch({type:types.DELETE_BULBS})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const deletePlywoods = (id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await deletePlywoodAPI(id,headers)
        dispatch({type:types.DELETE_PLYWOOD})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const deleteMachins = (id,headers) =>async (dispatch)=>{

    dispatch({type:types.LOADING})
    try{
        await deleteMachinsAPI(id,headers)
        dispatch({type:types.DELETE_MACHINS})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}