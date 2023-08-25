import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        navId: 2,
        isOpenSidebar : false
    },
    reducers:{
        toogleNavId : (state)=>{
            state.navId = state.navId==1?2:1 
        },
        toogleSidebar: (state)=>{
            state.isOpenSidebar = !state.isOpenSidebar
        }
    }
})

export const {toogleNavId, toogleSidebar} = appSlice.actions
export default appSlice.reducer;