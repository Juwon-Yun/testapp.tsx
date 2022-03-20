import React, { ChangeEvent, useState } from "react";
import '../Assets/App.css';

const useInputComponent = ():JSX.Element => { 
    // 기본적으로 Input을 업데이트함
    const useInput = (initialValue: string, validator: Function) => { 
        
        const [value, setValue] = useState(initialValue)

        const onChange = (event : ChangeEvent<HTMLInputElement> ) => { 
            const { target: { value } } = event

            let willUpdate = true;

            if (typeof validator === "function") { 
                willUpdate = validator(value)
            }
            if (willUpdate) { 
                setValue(value)
            }
        }

        return {value, onChange}  
    }   
    
    const maxLen = (value : string ) => { 
        return value.length <= 10
    }

    const name = useInput("Mr", maxLen)
    const email = useInput("@", maxLen)

    return (
        <div className="App">
            <h4>Hello useInput hook</h4>
            <input placeholder="Name" defaultValue={name.value} />
            <input placeholder="Name" defaultValue={email.value} />
        </div>
    )    
}

export default useInputComponent
