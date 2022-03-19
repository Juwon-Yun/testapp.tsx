import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./reducers";

const Main = () => { 

    const dispatch = useDispatch()

    const state = useSelector( (state : RootState )=> state.main )

    const history = useHistory()
    

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextField id="standard-basic" label="Standard" variant="standard" />
            <br></br>
            <br></br>
            <FormControlLabel control={<Checkbox/>} label="Remember" />
            <br></br>
            <Button variant="contained" onClick={() => {history.push('/home') }}>넘어가기</Button>
        </div>
            
    )
}

export default Main
