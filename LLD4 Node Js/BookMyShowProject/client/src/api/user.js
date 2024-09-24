import {axiosInstance} from "./index"

export const RegisterUser= async(value)=>{
    try{
const response= await axiosInstance.post("/api/users/register",value)
console.log("axiosinstance called successfully")
return response.data
    }catch(err){
        console.log("axios failed to call ",err)
    }
}

export const LoginUser= async(value)=>{
    try{
        const response =await axiosInstance.post("/api/users/login",value)
        console.log("axios instance called for login successfully");
        return response.data
    }
    catch(err){
console.log(err)
    }
}

export const GetCurrentUser= async()=>{
    try{
        const response = await axiosInstance.get("/api/users/get-current-user");
        console.log("this is axios intsnace to get current user")
        return response.data
    }catch(err){
        console.log("axios instance get user error block")
        console.log(err)
    }
}