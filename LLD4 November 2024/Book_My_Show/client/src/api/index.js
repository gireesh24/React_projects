import axios from "axios";

export const axiosInstance=axios.create({
    headers:{
        "Content-Type":"application/json",
        Authorization:`Barear ${localStorage.getItem('token')}`
    }
})