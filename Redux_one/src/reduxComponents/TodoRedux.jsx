// import React from 'react'

// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
// import store from "../redux/store"
import todoSlice from "../redux/TodoSlice"

    const todoActions=todoSlice.actions

function TodoRedux() {
    const todoslice=useSelector((store)=>store.todo)
    const {todoList, currentToDoList}= todoslice
    
    const dispatch=useDispatch()

    const handlechange=(e)=>{
        dispatch(todoActions.changetodovalue(e.target.value))
    }

    const handleclick=()=>{
        dispatch(todoActions.addToDoItem())
    }
  return (
    <>
    <h2>TodoRedux</h2>
    <div style={{display:"flex"}}>
        <div>
        <input onChange={handlechange} value={currentToDoList} type="text" />
        <button onClick={handleclick}>add new item</button>
        </div>
    <div className="list">
        <ul>
            {todoList.map((tsk, idx)=>{
                return <li key={idx}>{tsk} --- {idx}</li>
            })}
            {todoList.map((tsk)=>{
                return <li key={tsk}>{tsk}</li>
            })}
        </ul>
     </div>
    </div>

    </>
  )
}

export default TodoRedux