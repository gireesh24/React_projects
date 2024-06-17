import React from 'react'
import {LocalStorageKey} from './Home1'
import Movie from './Movie'


function Movies({movies, watchlist, setWatchList}) {
const addToWatchList=(movie)=>{
    const updateWatchList=[...watchlist,movie]
    setWatchList(updateWatchList)
    localStorage.setItem(LocalStorageKey, JSON.stringify(updateWatchList))
}
const removeFromWatchList=(movie)=>{
    const filteredWatchList=watchlist.filter((item)=>{
        return item.id !==movie.id
    })
    setWatchList(filteredWatchList)
    localStorage.setItem(LocalStorageKey, JSON.stringify(filteredWatchList))
}

  return (
    <div className='flex justify-evenly flex-wrap gap-8'>
        {movies.map((movieObj)=>{
            const isMoviePresentInWatchList=watchlist.find((item)=>{
                return item.id===movieObj.id
            })

            return (<Movie isMoviePresentInWatchList={isMoviePresentInWatchList} removeFromWatchList={removeFromWatchList} addToWatchList={addToWatchList} key={movieObj.title} movie={movieObj} />
                )           
         })}
    </div>
  )
}

export default Movies