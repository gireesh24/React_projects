import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counterSlice"
import todoSlice from "./TodoSlice"


const store=configureStore(
    {
        reducer:{
            counter: counterSlice.reducer,
            todo: todoSlice.reducer
        }
    }
)

export default store