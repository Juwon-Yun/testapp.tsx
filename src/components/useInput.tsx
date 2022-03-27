import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import '../Assets/App.css';

const useInputComponent = ():JSX.Element => { 
    // 기본적으로 Input을 업데이트함
    const nameInput = useRef<HTMLInputElement>(null)
    // 컴포넌트가 언마운트될떄까지 엘리멘트값이 유지된다.
    // state와 비슷하게 저장된다.
    // state의 변화 => 렌더링 => 컴포넌트 내부 변수들 초기화
    // Ref의 변화 -> 컴포넌트를 렌더링 시키지않는다. -> 변수들의 값이 유지됨
    // state의 변화 -> 렌더링
    
    useEffect(() => { 
        console.log(nameInput.current)
    },[])

    // intelij react
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

            <input placeholder="Name" ref={nameInput} defaultValue={ name.value}/>
            <input placeholder="Name" defaultValue={email.value} />
        </div>
    )    
}

export default useInputComponent
