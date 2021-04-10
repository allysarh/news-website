import { ARTIKEL_IN } from "./types"

export const ArtikelAction = (data) =>{
    return {
        type: ARTIKEL_IN,
        payload: data
    }
}