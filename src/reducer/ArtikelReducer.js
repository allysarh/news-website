import { ARTIKEL_IN } from "../action/types"

const INITIAL_STATE = {
    artikel: []
}

export const ArtikelReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case ARTIKEL_IN:
            console.log("data di reducer",action.payload)
            return {...state,...action.payload}
        default:
            return state
    }
}