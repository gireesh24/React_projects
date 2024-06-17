// import React from 'react'
import { useEffect } from 'react'
// import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
// import fetchUser from '../../../redux/middleware/fectUserMiddleware.js'
import fetchUser  from '../../redux/middlewares/fetchUserMiddleware'

function User() {
    // const [user,setUser]=useState(null)
    // const [error, setError]=useState(false)
    // const [loading, setLoading]=useState(true)
   
    const {user, error, loading, notFound}=useSelector((store)=>store.user)    
    const dispatch=useDispatch()

  useEffect(function(){
    dispatch(fetchUser(4))
  },[]);

    const heading=<h2>user example</h2>
    if(notFound){
        return <>{heading}
        <h3>user notFound</h3>
        </>
    }

    if(loading){
        return<>{heading}
            <h3>....Loading</h3>
        </>
    }
    if(error){
        return<>{heading}
        <h3>Error Occured</h3>
        </>
    }
  

  return (
    <>
        {heading}
        <h4>Name:{user.name}</h4>
        <h4>cell no:{user.phone}</h4>

    </>
  )
}

export default User