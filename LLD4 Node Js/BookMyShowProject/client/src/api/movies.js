import axiosInstance from "."

export const getAllMovies= async ()=>{
   try{
    const responce= await axiosInstance.get("api/movies/get-all-movies");
    return responce.data
   }catch(err){
    console.error(err)
    // return err
   } 
}

export const updateMovie= async (payload)=>{ 
    try{
        const responce=await axiosInstance.put("api/movies/update-movie",payload);
        return responce.data
    }catch(err){
        console.error(err)
        // return err
    }
}

export const addMovie= async (payload)=>{
    try{
        const responce=await axiosInstance.post("api/movies/add-movie",payload);
        return responce.data
    }catch(err){
        console.error(err)
        console.log("add movie axios error call")
        // return err
    }
}

export const deleteMovie= async(payload)=>{
    try{
        // delete method
        // const responce = await axiosInstance.delete(`api/movies/delete-movie/${payload.movieId}`,
        //     payload
        // );
        // return responce.data
        // delete movie using put
        const responce = await axiosInstance.put("api/movies/delete-movie", payload);
        return responce.data
    }catch(err){
        console.error(err);
        // return err
    }
}