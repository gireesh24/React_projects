import { useState } from "react"
import InputTodo from "./InputTodo"
import TodoList from "./TodoList"

function ToDO() {
    const [todoList, setTodoList]=useState([])
    console.log(todoList)
  return (
    <div>
        <InputTodo setTodoList={setTodoList} />
        <TodoList />
    </div>
  )
}

export default ToDO