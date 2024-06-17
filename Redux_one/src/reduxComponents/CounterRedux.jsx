// import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import counterSlice from '../redux/counterSlice'


function CounterRedux() {
  const counterAction=counterSlice.actions

     const counter =useSelector((store)=>store.counter.count)
      const dispatch=useDispatch() // hook
      const handleIncrement=()=>{
        dispatch(counterAction.incremntState())
      
      }

      const handleDecrement=()=>{
        dispatch(counterAction.decrementState())
      }

      const generateRandomValue=(min,max)=>{
        return Math.round( Math.random() * (max-min) +min)
      }

      const ranamdValueIncrement =()=>{
        const random=generateRandomValue(1,10)
        dispatch(counterAction.incremenByX(random))
      }

  return (
    <>
    <div>counterRedux {counter}</div>
    <button onClick={handleIncrement}>increment</button>
    <button onClick={handleDecrement}>decrement</button>
    <button onClick={ranamdValueIncrement}>increment by random value</button>
    </>
  )
}

export default CounterRedux