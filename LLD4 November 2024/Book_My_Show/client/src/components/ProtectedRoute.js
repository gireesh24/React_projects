import React, {useEffect}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {useNavigate, Link} from "react-router-dom"
import {
  HomeOutlined,
  LogoutOutlined,
  ProfileOutlined,
  UserOutlined
} from '@ant-design/icons';
import { GetCurrentUser } from '../api/users';
import { SetUser } from '../redux/userSlice';
import{message, Layout,Menu} from 'antd';
import { ShowLoading,HideLoading } from '../redux/loaderSlice';



function ProtectedRoute({childern}) {
  const {user}=useSelector((state)=>state.users);
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const {Header} = Layout;
  console.log("protected route")
  const gatValidUser=async()=>{
    try{
      dispatch(ShowLoading()); // make my loading state true
      const response=await GetCurrentUser();

      // console.log("protected route failed",response);
      dispatch(SetUser(response.data));
      dispatch(HideLoading());
    }catch(err){
      console.log("protected rout catch block",err);

      message.error("please login again")
      dispatch(HideLoading());
      dispatch(SetUser(null));
    }
  }


const navIteams=[
  {label:"Home", icon:<HomeOutlined />},
  {label: `${user? user.name :"guest"}`,
   icon:<UserOutlined/>, 
   childern:
   [
    { 
      label: (<span onClick={()=>{
      if(user.role==='admin'){
        navigate('/admin')
      }
      else if(user.role==='partner'){
        navigate('/partner')
      }
      else{
        navigate('/profile')
      }
    }}
    >
    my profile
    </span>
    ),
    icon:<ProfileOutlined/>
    },

    {label:(<span onClick={()=>{
      <Link to='/login' onClick={()=>{
        localStorage.removeItem("token");
      }}
      />
    }}>
    logout
    </span>
  ),
  icon:<LogoutOutlined />},
  ]},

]
useEffect(()=>{
  if(localStorage.getItem('token')){
    gatValidUser();
  }else{
    navigate("/login");
  }
})

  return ( 
    user &&(
      <>
      <Layout>
      <Header className='d-flex justify-content-between'
      style={{position:'sticky',
         top:0,
         zIndex:1,
         width:"100%",
         display:"flex",
         alignItems:"center",
      }}
      >
<h3 className='text-white m-0' style={{color:'white'}}>Book My SHow</h3>
<Menu theme='dark' mode='horizontal' items={navIteams}/>

      </Header>
<div style={{padding:24, minHeight:380, background:"#fff"}}>
  {childern} Book my showraju </div>
      </Layout>
      </>
    )
  )
}

export default ProtectedRoute