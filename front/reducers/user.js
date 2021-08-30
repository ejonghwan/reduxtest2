

const initialState = {
    islogged: false,
    loading: false,
    hehe: '',
}


export const LOG_IN_REQUEST = "LOG_IN_REQUEST"
export const LOG_IN_SUCESS = "LOG_IN_SUCESS"
export const LOG_IN_FAILUE = "LOG_IN_FAILUE"


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case LOG_IN_REQUEST: 
            return {
                ...state,
                loading : true,
                islogged : false,
            }

        case LOG_IN_SUCESS: 
            return {
                ...state,
                loading : false,
                islogged : true,
                hehe: action.data,
            }

        case LOG_IN_FAILUE: 
            return {
                ...state,
                loading : false,
                islogged : false,
            }
        default :
            return {
                ...state
            }
    }
}

export default reducer;