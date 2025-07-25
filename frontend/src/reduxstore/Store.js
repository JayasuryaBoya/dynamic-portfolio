import {configureStore} from '@reduxjs/toolkit'
import adminSlice from './Slices/AdminSlice'
export let reduxStore=configureStore({
    reducer:{
        adminLogin:adminSlice
    }
})