import {createSlice, PayloadAction} from "@reduxjs/toolkit"

const initialState = {
    username : "", 
    phone : 0, 
    gender: "male"
}
export const basicDetails = createSlice({
    name : 'new-patient', 
    initialState, 
    reducers : {
        set
    }
})