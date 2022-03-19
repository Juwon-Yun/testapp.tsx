export const SETVALUE = "Main/setValue"

export const setValue = (diff: string) => ({
    type: SETVALUE,
    payload : diff
})