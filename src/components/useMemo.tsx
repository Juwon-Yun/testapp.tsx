import React, { useEffect, useMemo, useState } from 'react';

const useMemoComponent = (): JSX.Element => { 

    const [number, setNumber] = useState(0);
    const [isKorea, setIsKorea] = useState(false);

    const location = isKorea ? '한국' : '미국'

    // temp는 원시타입이 아닌 객체타입이여서 매번 app이 재 랜더 될떄마다 새로운 주솟값을 갖는다
    const temp = useMemo(() => { 
        return {
            country : isKorea ? '한쿡' : '미쿡'
        }
        // return 타입이 메모이제이션됨
        // isKorea가 바뀖때만 메모이제이션에서 꺼내서 보여줌
    }, [isKorea]) 
    

    useEffect(() => {
        console.log('여기가 useEffect')
    }, [temp])

    return (
        <div>
            <h2>하루에 몇끼 먹어요?</h2>
            <input type="number" value={number}
                onChange={(e) => { setNumber(+e.target.value) }} />
            <hr />
            <h2>어느 나라에 있어요?</h2>
            <p>나라 : { location }</p>
            <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
        </div>
    )
}

export default useMemoComponent