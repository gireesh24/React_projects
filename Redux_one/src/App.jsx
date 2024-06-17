// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Counter from './normalComponenets/counterfun'
import CounterRedux from './reduxComponents/CounterRedux'
import TodoRedux from './reduxComponents/TodoRedux'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Counter />
     <CounterRedux />
     <TodoRedux />
     <div >HEllo</div>
    </>
  )
}

export default App
