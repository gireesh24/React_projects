// import React from 'react'
import  { useState } from 'react'


function Counter() {
    const [ count , setCount]= useState(0)

    const increment= ()=>{
        setCount(count+1)
    }
  return (
    <>
    <div>counter value: {count}</div>
    <button onClick={increment}>increment</button>
    </>
  )
}

export default Counter

