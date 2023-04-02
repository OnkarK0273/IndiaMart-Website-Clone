import * as types from './sell.type'

const initalState = {
    isLoading: false,
    isError: false,
    isAdd:false,
    isDelete:false,
    isPatch :false,
    plyWoods: [],
    bulbs: [],
    machins:[],
    medicine:[]
}


export default function sellReducer(state = initalState,{type,payload}){

    switch(type){

        // error--------------
        case types.ERROR:{

            return {...state,isLoading:false,isError:true,isAdd:false,isDelete:false,isPatch:false}

        }

        // loding ----------------------------
        case types.LOADING:{
            return {...state,isLoading:true,isError:false,isAdd:false,isDelete:false,isPatch:false}
        }

        // get reducers---------------------------------------
        case types.GET_BULBS:{

            return {...state,isLoading:false,isError:false,bulbs:payload}

        }

        case types.GET_MACHINS:{
            return {...state,isLoading:false,isError:false,machins:payload}
        }

        case types.GET_MEDICINE:{
            return {...state,isLoading:false,isError:false,medicine:payload}
        }

        case types.GET_PLYWOOD:{
            return {...state,isLoading:false,isError:false,plyWoods:payload}
        }

        // add reducers---------------------------------------------
        case types.ADD_BULBS:{
            return {...state,isLoading:false,isError:false,isAdd:true,bulbs:[...state.bulbs,payload]}
        }

        case types.ADD_MACHINS:{
            return {...state,isLoading:false,isError:false,isAdd:true,machins:[...state.machins,payload]}
        }

        case types.ADD_MEDICINE:{
            return {...state,isLoading:false,isError:false,isAdd:true,medicine:[...state.medicine,payload]}
        }

        case types.ADD_PLYWOOD:{
            return {...state,isLoading:false,isError:false,isAdd:true,plyWoods:[...state.plyWoods,payload]}
        }

        // delete reducers ------------------------------------------------

        case types.DELETE_BULBS:{
            return {...state,isLoading:false,isError:false,isDelete:true}
        }

        case types.DELETE_MACHINS:{
            return {...state,isLoading:false,isError:false,isDelete:true}
        }

        case types.DELETE_MEDICINE:{
            return {...state,isLoading:false,isError:false,isDelete:true}
        }

        case types.DELETE_PLYWOOD:{
            return {...state,isLoading:false,isError:false,isDelete:true}
        }


        // patch reducers -----------------------------------------------------

        case types.PATCH_BULBS:{
            return {...state,isLoading:false,isError:false,isPatch:true}
        }

        case types.PATCH_MACHINS:{
            return {...state,isLoading:false,isError:false,isPatch:true}
        }

        case types.PATCH_MEDICINE:{
            return {...state,isLoading:false,isError:false,isPatch:true}
        }

        case types.PATCH_PLYWOOD:{
            return {...state,isLoading:false,isError:false,isPatch:true}
        }

        // reset reducers ---------------------------------------------------------

        case types.RESET_SELL:{
            return {...state,isLoading:false,isError:false,isAdd:false,isDelete:false,isPatch:false,plyWoods:[],bulbs:[],machins:[],medicine:[]}
        }


        

        default: return state
    }


}