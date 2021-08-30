import { types } from "../types/types";
/*
    {
        uid: firebase user uid,
        nombre: 'juan felipe' 
    }
*/

const initialState = {}

export const authReducer = ( state = initialState , action) => {
    switch ( action.type ){
        case types.login:
            const {uid, displayName} = action.payload;
            return {
                uid: uid,
                name: displayName,
            }
        case types.logout:
            return {}
        default:
            return state;
        
    }
}