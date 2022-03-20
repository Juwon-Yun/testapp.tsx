import React from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

const Home = () => { 

    const history = useHistory()

    return (
        <div>
            <br></br>
            <br></br>
            <br></br>
            홈임
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="contained" onClick={() => {history.goBack() }}>뒤로가기</Button>
        </div>
    )
}

export default Home