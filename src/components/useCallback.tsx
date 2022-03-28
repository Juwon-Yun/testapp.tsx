import React, { useCallback, useEffect, useState } from "react"

const useCallbackComponent = () => { 

    const [number, setNumber] = useState(0)
    const [toggle, setToggle] = useState(false)

    // 넘버가 바뀔 때만 someFunction이 새로운 주솟값을 갖고 
    // 주솟값이 바껴서 useEffect가 발동함
    const someFunction = useCallback(() => { 
        console.log(`someFunc : number ${number}`)
        return;
    }, [number])
    // const someFunction = () => { 
    //     console.log(`someFunc : number ${number}`)
    //     return;
    // }

    useEffect(() => {
        console.log(`someFunction이 변경되었습니다.`)
    }, [someFunction])
    

    return (
        <div>
            <input type="number" value={number}
                onChange={ (e) => setNumber(+e.target.value)}
            />
            <hr />
            <button onClick={someFunction}>Call SomeFunc</button>
            <hr />
            <button onClick={() => { setToggle(!toggle) }}>{ toggle + ""}</button>
        </div>
    )
}

export default useCallbackComponent