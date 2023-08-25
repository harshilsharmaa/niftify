import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navId: 1
    },
    reducers:{
        toogleNavId : (state)=>{
            state.navId = state.navId==1?2:1 
        }
    }
})

export const {toogleNavId} = appSlice.actions
export default appSlice.reducer;