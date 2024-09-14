// import React from 'react'

import { useEffect, useState } from "react"
import Banner from "./Banner"
import Movies from "./Movies"
import axios from 'axios';



const LocalStorageKey="movies"
const Movie_API_EndPoint= (page) =>'https://api.themoviedb.org/3/trending/movie/week?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=${page}'

function Home1() {

const [movies , setMovies]=useState([])
 const [page, setPage]=useState(1)
 const [watchlist, setWatchlist]=useState(JSON.parse(localStorage.getItem(LocalStorageKey)|| "[]"))
 useEffect(()=>{
    axios.get(Movie_API_EndPoint(page))
    .then((res)=>{
        const results=res.data.results

        if(results){
            setMovies(results)
        }
    })
 },[page])

  return (
  <div className="flex flex-col gap-10" >
    < Banner name={movies[0]?.title} url={movies[0]?.backdrop_path} />
    <Movies watchlist={watchlist} setWatchList={setWatchlist} movies ={movies} />
<div className=" flex justify-center align-middle gap-2">
    <button onClick={()=>setPage(page>1 ? page - 1:1)} className=" p-3 border border-gray-600">privious page</button>
    <p> page no: {page}</p>
    <button onClick={()=>setPage (page+1)} className=" p-3 border border-gray-600"> next page</button>
</div>
  </div>
  )
}

export default Home1

export {
    LocalStorageKey
}