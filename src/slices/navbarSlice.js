import {createSlice} from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
    name: 'navbar',
    initialState: {
        navbarIsFull: true
    },
    reducers: {
        collapsed: state => {
            state.navbarState = false
        },
        full: state => {
            state.navbarState = true
        }
    }
})

export const {collapsed, full} = navbarSlice.actions;
export const selectNavbarState = state => state.navbar.navbarState
export default navbarSlice.reducer;