//Actions
const CHANGE_CITY = 'CHANGE_CITY';

export const changeCity = (city) => {
    return {
        type: CHANGE_CITY,
        city
    }
} 

//Reducers

const initialState = {
    city: 'barauna'
}

export function cityReducer (state = initialState, action) {
    switch(action.type){
        case CHANGE_CITY:
            return{
                ...state,
                city: action.city
            }
        default: return state
    }
}