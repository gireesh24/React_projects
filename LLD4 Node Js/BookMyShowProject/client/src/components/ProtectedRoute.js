import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'; 
import {Link, useNavigate} from "react-router-dom"
import {HomeOutlined, LogoutOutlined, ProfileOutlined, UserOutlined} from "@ant-design/icons"
import { ShowLoading,HideLoading } from '../redux/loaderSlice';  
import { GetCurrentUser } from '../api/user';
import {SetUser} from "../redux/userSlice";
import { message,Layout, Menu} from 'antd';


function ProtectedRoute({children}) {
  const {user}= useSelector((state)=>state.users);
  const Dispatch=useDispatch();
  const navigate=useNavigate();
  const navItems=[
    {
      label:"Home",
      icon:<HomeOutlined/>
    },
    {
      label: `${user? user.name: ""}`,
      icon:<UserOutlined/>,
      children:[
        {
          lable:(
            <span
              onClick={() => {
                if (user.role === "admin") {
                  navigate("/admin");
                } else if (user.role === "partner") {
                  navigate("/partner");
                } else {
                  navigate("/profile");
                }
              }}
            >
              My Profile
            </span>
          ),
          icon:<ProfileOutlined/>
        },
        {
          lable:<Link to="/logout"
          onClick={()=>{
            localStorage.removeItem("token")
          }}
          >logout</Link>,
          icon:<LogoutOutlined/>
        }
      ]
    },
  ];

useEffect(()=>{
  const getValidUser=async()=>{
    try{
      console.log("try block in getValidUser")
      Dispatch(ShowLoading());
      const responce= await GetCurrentUser();
      console.log(responce)
      Dispatch(SetUser(responce.data))
      Dispatch(HideLoading());

    }catch(err){
      console.log("protected route get valid user failed",err)
      Dispatch(HideLoading());
      message.error(err.message)
    }
  }

  if(localStorage.getItem("token")){
    getValidUser();
  }else{
    navigate("/login")
  }
},[]);

const {Header}=Layout

return (
  user &&
(<>
<Layout>
  <Header className='d-flex justify-contnet-between' style={{
    position:"sticky",
    top:0,
    zIndex:1,
    width:"100%",
    display:"flex",
    alignItems:"center"
  }}>
    <h3 className='text-white m-8' style={{  color:'white' }}>
      Book My Show</h3>
      <Menu items={navItems} theme='dark' mode='horizontal'/>
  </Header>
  <div style={{
    padding:24,
    minHeight:"380", background:"#fff" , color:"white"
  }}>
    {children}
  </div>
</Layout>
</>

))
  // return (
  //   <div>{children}</div>
  // )
}

export default ProtectedRoute