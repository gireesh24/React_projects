import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
        user:null,
        loading:true,
        error: null,
        notFound:false
    },
    reducers:{
        setLoading:(state)=>{
            state.error=null,
            state.loading=true
        },
        setError:(state)=>{
            state.error=true,
            state.loading=false
        },
        setUser:(state,{payload})=>{
            state.user=payload,
            state.error=false,
            state.loading=false

        },
        notFound:(state)=>{
            state.user=null,
            state.error=true,
            state.loading=false,
            state.notFound=true
        }
    }
})

export default userSlice