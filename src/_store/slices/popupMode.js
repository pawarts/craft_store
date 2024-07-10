import { createSlice } from "@reduxjs/toolkit";

const popupModeSlice = createSlice({
    name: 'popupModeSlice',
    initialState: {
        productPage: 'specs'
    },
    reducers: {
        setProductPage(state, action) {
            const { payload } = action;
            state.productPage = payload;
        }
    }
})

export const { setProductPage } = popupModeSlice.actions;
export default popupModeSlice.reducer