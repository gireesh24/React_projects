import { axiosInstance } from "./";
export const addTheatre= async(payload)=>{
    try{
        const response= await axiosInstance.post("/api/theatres/add-theatres",payload);
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const getAllTheatresFromAdmin= async(payload)=>{
    try{
        const response= await axiosInstance.get("/api/theatres/add-theatres",payload);
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const getAllTheatres= async(ownerId)=>{
    try{
        const response= await axiosInstance.get(`/api/theatres/get-all-theatres/${ownerId}`);
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const updateTheatre= async(payload)=>{
    try{
        const response= await axiosInstance.post("/api/theatres/update-theatres",payload);
        return response.data
    }catch(err){
        console.log(err)
    }
}

export const deleteTheatre= async(payload)=>{
    try{
        const response= await axiosInstance.delete(`/api/theatres/delete-theatre:${payload}`);
        return response.data
    }catch(err){
        console.log(err)
    }
}