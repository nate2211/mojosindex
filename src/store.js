import { configureStore } from '@reduxjs/toolkit'
import checkoutSlice from "./redux/checkoutSlice";

export default configureStore({
    reducer: {
        checkout: checkoutSlice
    }
})