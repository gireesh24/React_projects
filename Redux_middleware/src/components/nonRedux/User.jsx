// import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function User() {
    const [user,setUser]=useState(null)
    const [error, setError]=useState(false)
    const [loading, setLoading]=useState(true)
    useEffect(function(){
        async function fetchUserData(){
            try {
                setLoading(true)
                const resp =await fetch("https://jsonplaceholder.typicode.com/users/10")
                const user=await resp.json();
                console.log(user)
                setUser(user)
            }
        catch(err){
                setError(true)
        }
        finally{
            setLoading(false)
        }
        }
        fetchUserData()
    },[])

    const heading=<h2>user example</h2>
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