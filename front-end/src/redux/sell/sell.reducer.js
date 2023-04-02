import * as types from './sell.type'

const initalState = {
    isLoading: false,
    isError: false,
    plyWoods: [],
    bulbs: [],
    machins:[],
    medicine:[]
}


export default function sellReducer(state = initalState,{type,payload}){

    switch(type){

        case types.ERROR:{

            return {...state,isLoading:false,isError:true}

        }

        case types.LOADING:{
            return {...state,isLoading:true,isError:false}
        }

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

        

        default: return state
    }


}