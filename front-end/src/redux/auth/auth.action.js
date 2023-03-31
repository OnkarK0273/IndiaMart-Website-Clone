import {  loginAPI, signAPI } from './auth.api'
import * as types from './auth.type'


export const Signin =(payload)=>async (dispatch)=>{

    try{
         await signAPI(payload)
        dispatch({type:types.SIGNUP})

    }catch(err){
         console.log(err)
         dispatch({type:types.ERROR,payload:err.response.data.msg})
         
    }

}

export const Login =(payload)=>async (dispatch)=>{

    try{
        const res = await loginAPI(payload)
        dispatch({type:types.LOGIN,payload:res})

    }catch(err){
        console.log(err)
        dispatch({type:types.ERROR,payload:err.response.data.msg})
    }

}

export const authLogout =()=>(dispatch)=>{
    dispatch({type:types.RESET_AUTH})
   
}