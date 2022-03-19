import { combineReducers } from "redux";
import main from './Main_reducer'

const rootReducer = combineReducers({ main })

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>