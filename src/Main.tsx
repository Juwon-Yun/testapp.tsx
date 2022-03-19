import React, { ChangeEvent } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";
import * as A from './actions/Main_action'

const Main = () => { 

    const dispatch = useDispatch()

    const state = useSelector( (state : RootState )=> state.main )

    const history = useHistory()
    
    const onChangeChkBox = ( e: ChangeEvent<HTMLElement>) => { 
        const chk = document.querySelector('#chk') as HTMLInputElement
        
        dispatch(A.setChk(chk.checked))
    }

    const clickBtn = () => { 
        const id = document.querySelector('#textBox') as HTMLInputElement
        const idVal = id.value

        dispatch(A.setValue(idVal))

    }

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextField id="textBox" label="Standard" variant="standard" />
            <br></br>
            <br></br>
            <FormControlLabel control={<Checkbox id="chk" onChange={onChangeChkBox} />} label="Remember" />
            <br></br>
            <Button variant="contained" onClick={() => { clickBtn(); history.push('/home') }}>넘어가기</Button>
        </div>
            
    )
}

export default Main
