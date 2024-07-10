import { configureStore } from "@reduxjs/toolkit"

import popupModeReducer from "./slices/popupMode"
import productsReducer from "./slices/productsSlice"

export default configureStore({
    reducer: {
        popupMode: popupModeReducer,
        products: productsReducer
    }
})