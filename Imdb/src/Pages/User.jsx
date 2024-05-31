// // import React from 'react'

// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"

// const fetch_details="https://fakestoreapi.com/users"

// function User() {
//     const [user, setUser]=useState({})

//     const params=useParams() 
//     //  console.log({ params})
//     useEffect(()=>{
//         async function fetchUserData(){
//             const resp=await fetch(`${fetch_details}/${params.id}`)
//             const json=await resp.json()
//             setUser(json)
//         }
//         fetchUserData()
//     },[params.id])

//     if (!user.phone){
//         return(
//             <p>loading..</p>
//         )
//     }
//   return (
//     <>
//     <div> username:{user?.name?.firstname}</div>
//     <div>user phone no: {user?.phone}</div>
//     </>

//   )
// }

// export default User

// import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const FETCH_DETAILS_URL = "https://fakestoreapi.com/users"

function User() {
	const [ user, setUser] = useState({})

	const params = useParams()
	// params = { id: 2 }

	useEffect(() => {
		async function fetchUserData() {
			const resp = await fetch(`${FETCH_DETAILS_URL}/${params.id}`)
			const json = await resp.json()

			setUser(json)
		}

		fetchUserData()
	}, [params.id])

	if(!user.phone) {
		return (
			<p>Loading...</p>
		)
	}

  return (
		<>
			{/* Optional Chaining -> If The object is undefined, then do not attempt to access the property, rather return undefined */}
			<div>User Name: {user?.name?.firstname}</div>
			<div>User Phone: {user?.phone}</div>
		</>
  )
}

export default User