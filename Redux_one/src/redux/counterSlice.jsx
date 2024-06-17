import { createSlice } from "@reduxjs/toolkit";

const counterSlice= createSlice({
    name : "counterSlice" ,
    initialState:{
        count:2
    },
    reducers: {
        incremntState: (state)=> {
            state.count=state.count+1
        },
        decrementState:(state)=>{
            if(state.count>1){
                state.count=state.count-1
            }
        },
        incremenByX:(state,{payload})=>{
            if(payload){
                state.count=state.count+payload
            }
        }
    }

})

export default counterSlice