import { useState } from "react"

function InputTodo({setTodoList}) {
    const [value, setValue]=useState("")
    const handleChange=(e)=>{
        setValue(e.target.value)
    }

    const addTodo=()=>{
        setTodoList((todolistPrev)=>{
            return [...todolistPrev,value]
        })
        setValue("")
    }
  return (
    <div>
        <input value={value} onChange={handleChange} type="text" />
        <button onClick={addTodo}> add todo list</button>
    </div>
  )
}

export default InputTodo