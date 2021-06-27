import studentReducer from "./student/reducer"
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = {
    students: studentReducer,
    //add more reducer late
}
const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer: rootReducer
})
export default store