import { getBulbsAPI, getMachinsAPI, getPlywoodAPI } from './sell.api'
import * as types from './sell.type'


export const getBulbs = (headers)=> async (dispatch)=>{
    dispatch({type:types.LOADING})
    try{
        let res = await getBulbsAPI(headers)
      
        dispatch({type:types.GET_BULBS,payload:res})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}

export const getPlywoods = (headers)=> async (dispatch)=>{
    dispatch({type:types.LOADING})
    try{
        let res = await getPlywoodAPI(headers)
        
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
        
        dispatch({type:types.GET_MACHINS,payload:res})

    }catch(err){
        dispatch({type:types.ERROR})
        console.log(err)
    }

}
