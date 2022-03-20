import React, { ChangeEvent, useEffect } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../reducers";
import * as A from '../actions/Main_action'

const Main = () => { 

    const dispatch = useDispatch()
    const history = useHistory()
    const state = useSelector( (state : RootState )=> state.main )
    
    useEffect(() => {
        const arr = JSON.parse(localStorage.getItem('test_chk') as string)
        if (arr) { 
            dispatch(A.setChk(arr.ischeck))
            const id = document.querySelector('#textBox') as HTMLInputElement
            id.value = arr.key
        }
    }, [])

    const onChangeChkBox = (e: ChangeEvent<HTMLElement>) => { 
        const chk = document.querySelector('#chk') as HTMLInputElement
        if (!chk.checked) { 
            localStorage.removeItem('test_chk')
            dispatch(A.setValue(''))
        }
        dispatch(A.setChk(chk.checked))
    }

    const clickBtn = () => { 
        const id = document.querySelector('#textBox') as HTMLInputElement
        const idVal = id.value

        dispatch(A.setValue(idVal))
        
        localStorage.setItem('test_chk', JSON.stringify( {key : idVal, ischeck : state.ischecked } ) as string )
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
            <FormControlLabel control={<Checkbox id="chk" checked={  state.ischecked } onChange={onChangeChkBox} />} label="Remember" />
            <br></br>
            <Button variant="contained" onClick={() => { clickBtn(); history.push('/home') }}>넘어가기</Button>
        </div>
            
    )
}

export default Main
