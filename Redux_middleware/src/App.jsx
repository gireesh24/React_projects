// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import User from './components/nonRedux/User'
import UserRedux from './components/redux/UserRedux'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     {/* <User /> */}
     <UserRedux />
    </>
  )
}

export default App
