import React from 'react'

function Movie({movie, addToWatchList, removeFromWatchList, isMoviePresentInWatchList}) {
    const addEmojiDiv=(
        <div onClick={()=> removeFromWatchList(movie)} className=' m-4 flex justify-center h-12 w-12 items-center rounded-lg bg-white'>
             &#10060;
        </div>
    )

    const removeEmoji=(
        <div onClick={addToWatchList(movie)} className=' m-4 flex justify-center h-12 w-12 items-center rounded-lg bg-white'>
            &#128525;
        </div>
    )

    const renderEmoji=(isMoviePresentInWatchList) => {
        return isMoviePresentInWatchList ? addEmojiDiv :
        removeEmoji
    }
    return (
        <div className="h-[40vh] w-[300px] bg-center bg-cover rounded-md hover:scale-110 duration-200 hover:cursor-pointer flex flex-col justify-between items-end" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})` }}>
            <div className=' text-white text-center text-xl p-2 bg-gray-900/70'> {movie.title}</div>
        {renderEmoji(isMoviePresentInWatchList)} 
    </div>
  )
}

export default Movie