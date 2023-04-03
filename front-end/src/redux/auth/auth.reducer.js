import * as types from './auth.type'


 const token = sessionStorage.getItem('token')
// const user2 = user.user

const init = {
    token:token || '',
    error:null,
    isSign:false,
    isLogin:token?true:false ,
    
}


export default function authReducer(state = init,{type,payload}){

    switch(type){

        case types.ERROR:{
            return {...state, error:payload}
        }
        case types.SIGNUP:{
            return {...state,isSign:true,error:null}
        }

        case types.LOGIN:{
            sessionStorage.setItem("token",payload.token)
            sessionStorage.setItem("user", JSON.stringify(payload.user))
            return{...state,isLogin:true,token:payload.token,error:null}
        }

        case types.RESET_AUTH:{
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('user')
            return {...state,isLogin:false,isSign:false,token:null}
        }

        

        default: return state
    }


}