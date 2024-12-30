import { axiosInstance } from ".";

export const addShows= async(values)=>{
    try{
        const response= await axiosInstance.post("/api/shows/add-shows",values);
        console.log("addshows api called successfully")
        return response.data
    }catch(err){
        console.log("add shows api failed", err.message);
    }
}

export const updateShows=async(payload)=>{
    try{
        const response= await axiosInstance.post(`/api/shows/update-shows/`,payload);
        console.log("updateshows api called successfully")
        return response.data
    }catch(err){
        console.log("update shows api failed", err.message);
    }
}
export const deleteShows= async(values)=>{
    try{
        const response= await axiosInstance.delete("/api/shows/delete-shows",values);
        console.log("delete shows api called successfully")
        return response.data
    }catch(err){
        console.log("delete shows api failed", err.message);
    }
}

export const getAllShowsByTheatre= async(values)=>{
    try{
        const response= await axiosInstance.get("/api/shows/get-all-shows-by-theatre",values);
        console.log("getAllshowsByTheatre api called successfully")
        return response.data
    }catch(err){
        console.log("getAllshowsByTheatre  api failed", err.message);
    }
}

export const getAllShowsByMovie= async(values)=>{
    try{
        const response= await axiosInstance.get("/api/shows/get-All-theatres-by-movie",values);
        console.log("getAllShowsBymovie api called successfully")
        return response.data
    }catch(err){
        console.log("getAllShowsBymovie api failed", err.message);
    }
}


export const getAllShowsById= async(values)=>{
    try{
        const response= await axiosInstance.get("/api/shows/get-shows-by-id",values);
        console.log("getAllShowsById api called successfully")
        return response.data
    }catch(err){
        console.log("getAllShowsById shows api failed", err.message);
    }
}

