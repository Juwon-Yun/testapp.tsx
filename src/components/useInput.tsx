import React, { useState } from "react";
import '../Assets/App.css';

const useInputComponent = ():JSX.Element => { 
    // 기본적으로 Input을 업데이트함
    const useInput = (initialValue : string) => { 
        
        const [value, setValue] = useState(initialValue)

        return {value}
    }   

    const name = useInput("Mr.Juwon")

    return (
        <div className="App">
            <h4>Hello useInput hook</h4>
            <input placeholder="Name" value={name.value} />
        </div>
    )    
}

export default useInputComponent
