import * as A from '../actions/Main_action'

interface MainState { 
    value: string,
    ischecked : boolean,
}

type MainAction = ReturnType<typeof A.setValue> | ReturnType<typeof A.setChk>

const initState : MainState= {
    value: '',
    ischecked : false
}

const main = (state:MainState = initState, action : MainAction) => {

    switch (action.type) { 
        
        case A.SETVALUE:
            console.log('여기는 state ',action.payload)
            return { ...state, value: action.payload }
            case A.SETCHK:
            console.log('여기는 state ',action.payload)
            return { ...state, ischecked: action.payload }
        
        default:
            return state
    }


}

export default main