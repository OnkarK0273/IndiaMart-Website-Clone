
import * as types from "./admin.action.type"

const initalState = {
    isLoading: false,
    isError: true,
    plyWoodProducts: [],
    users: []
}
 
export const reducer = (state = initalState, { type,payload }) => {

    switch (type) {

        case types.GET_PRODUCT_LOADING:
            return {
                    ...state,
                    isLoading: true,
                    isError: false
                }
            
        case types.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                isError:false,
                plyWoodProducts:payload
            }

        case types.GET_PRODUCT_ERROR:
            return {
                ...state,
                isLoading:false,
                isError:true
            }

        default: {
            return state
        }
    }


}