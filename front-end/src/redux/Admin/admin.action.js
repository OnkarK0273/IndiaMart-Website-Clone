
import * as types from "./admin.action.type"
import { getPlywoodAPI } from "./admin.api"

export const getPlywoodProducts =()=>async (dispatch)=>{
     
    dispatch({type:types.GET_PRODUCT_LOADING})

    try {
        let data = await getPlywoodAPI()

        dispatch({type:types.GET_PRODUCT_SUCCESS,payload:data})
        // console.log(data)
    } catch (err) {
        // console.log(err)
        dispatch({type:types.GET_PRODUCT_ERROR})
    }
}

getPlywoodProducts()