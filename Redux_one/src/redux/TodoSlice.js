import { createSlice } from "@reduxjs/toolkit";

const todoSlice=createSlice({
    name:"todo",
    initialState:{
        currentTodovalue:null,
        todoList:['todo1' , 'todo2']
    },
    reducers:{
        changetodovalue:(state, {payload})=>{
            state.currentTodovalue= payload
            console.log({state, payload})
        },
        addToDoItem:(state)=>{
            state.todoList.push(state.currentTodovalue)
            state.currentTodovalue=""
        }
    }
})

export default todoSlice