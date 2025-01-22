import { axiosInstance } from ".";

export const RegisterUser= async(values)=>{
    try{
const response= await axiosInstance.post("/api/users/register",values);
return response.data;
    }catch(err){
        console.log('user register axios failed',err)
    }
}

export const LoginUser= async(values)=>{
    try{
const response= await axiosInstance.post("/api/users/login",values);
return (await response).data;
    }catch(err){
        console.log("axios instance failed to login user",err)
    }
}