import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        loading:false,
        error: false,
    },
    reducers:{
        setLoading:(state)=>{
            state.error=null,
            state.loading=true
        },
        setError:(state)=>{
            state.error=true,
            state.loading=false,
            state.user=null
        },
        setUser:(state,{payload})=>{
            state.user=payload,
            state.error=false,
            state.loading=false

        }
    }
})

export default userSlice