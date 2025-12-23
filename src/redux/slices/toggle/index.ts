import { createSlice } from "@reduxjs/toolkit";

export const toggleSlice = createSlice({
    initialState: true,
    name: 'toggle',
    reducers:{
        toggleAction: (state)=> !state
    }
})

export const {toggleAction} = toggleSlice.actions;

export default toggleSlice.reducer;