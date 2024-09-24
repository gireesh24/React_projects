import axios from "axios"
const token=localStorage.getItem("token");

export const axiosInstance=axios.create({
    headers:{
        "Content-Type":"application/json",
        // Authorization: token ? `Bearer ${token}` : "",
    },
})
// add arequest interceptors

axiosInstance.interceptors.request.use(
    function(config){
        // do something before request sent
        const token=localStorage.getItem("token")
        if(token){
            config.headers["Authorization"]=`Bearer ${token}`
        }
        return config
    },
    function(error){
        return Promise.reject(error)
    }
)

export default axiosInstance