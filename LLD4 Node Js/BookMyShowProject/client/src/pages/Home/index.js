import React,{useEffect} from 'react'
import { GetCurrentUser } from '../../api/user';

function Home() {
//     useEffect(()=>{
// console.log("home page useeffect")
// const fetchuser= async()=>{
//     const response= await GetCurrentUser;
//     console.log("calling fetch user form axios instance though route")
//     console.log(response);
// };
// fetchuser();
//     })
  return (
    <div> welcome to Home page</div>
  )
}

export default Home