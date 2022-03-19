import * as A from '../actions/Main_action'

interface MainState { 
    value : string
}

type MainAction = ReturnType<typeof A.setValue>

const initState : MainState= {
    value : ''
}

const main = (state:MainState = initState, action : MainAction) => {

    switch (action.type) { 
        
        case A.SETVALUE:
            return { ...state, value : action.payload }

        default:
            return state
    }


}

export default main