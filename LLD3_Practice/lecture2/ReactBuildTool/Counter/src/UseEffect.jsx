import React from 'react'
import {useState, useEffect} from 'react'
function Ue1(){
    const[count, setCount] = useState(0)
    const[text, setText] = useState('')
    let incrementCount = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        console.log('use Effect Runs')
        document.title = `Button clicked for ${count} times`
    })
    console.log('Other code that gets executed')
    return{
        // <div>
        //     // <h1>This is my Count value : {count}</h1>
        //     // <input type = 'text' value = {text}></input>
        //     // <button onClick = {incrementCount}>increment</button>
        // </div>
    }
}
export default Ue1