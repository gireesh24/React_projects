import {axiosInstance} from "./index";
export const addTheatre= async (payload)=>{
    try{
        const response=await axiosInstance.post("/api/theatres/add-theatre",payload);
        return response.data
    }catch(err){
console.log("add theatre issue", err)
return err.message;
    }
};

export const getAllTheatresforAdmin= async()=>{
    try{
        const response=await axiosInstance.get("/api/theatres/get-all-theaters");
        return response.data;
    }catch(err){
        console.log(err.message);
        return err.message;
    }
}

export const getAllTheatres= async(ownerId)=>{
    try{
        const response=await axiosInstance.get(`/api/theatres/get-all-theatres-by-owner/${ownerId}`);
        return response.data
    }catch(err){
        console.log(err.message);
        return err.message
    }
}

export const updateTheatres= async(payload)=>{
    try{
        const response=await axiosInstance.put(`/api/theatres/update-theatre`,payload);
        return response.data
    }catch(err){
        console.log(err.message);
        return err.message
    }
}

export const deleteTheatres= async (payload) => {
    try{
        const response=await axiosInstance.delete(`/api/theatres/delete-theatre/${payload}`);
        return response.data
    }catch(err){
        console.log(err.message);
        return err.message
    }
}