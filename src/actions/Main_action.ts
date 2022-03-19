export const SETVALUE = "main/setValue"
export const SETCHK = "main/setChk"

export const setValue = (diff: string) => ({
    type: SETVALUE,
    payload : diff
})

export const setChk = (diff : boolean) => ({
    type: SETCHK,
    payload : diff
})