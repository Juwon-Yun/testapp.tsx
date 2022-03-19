// as const 를 안하니까 string | boolean 타입으로 결국은 never가 나온다 꼭 확인할것
export const SETVALUE = "main/setValue" as const
export const SETCHK = "main/setChk" as const

export const setValue = (diff: string) => ({
    type: SETVALUE,
    payload : diff
}) 

export const setChk = (diff : boolean) => ({
    type: SETCHK,
    payload : diff
})