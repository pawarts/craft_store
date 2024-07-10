import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'productSlice',
    initialState: {
        viewedHistory: [],
        favoriteProducts: [],
    },
    reducers: {
        setViewedHistory(state, action) {
            const { payload } = action

            state.viewedHistory = payload;
        },
        setFavoriteProducts(state, action) {
            const { payload } = action

            state.favoriteProducts = payload
        }
    }
})

export const { setViewedHistory, setFavoriteProducts } = productSlice.actions;

export default productSlice.reducer
