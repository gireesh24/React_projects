import React, { useEffect, useState } from 'react'
import TheatreFormModal from './TheatreFormModal';
import DeleteTheatreModal from '../Partner/DeleteTheatreModal';
import {Table, Button,message} from "antd";
import {EditOutlined, DeleteOutlined} from "@ant-design/icons";
import {getAllTheatres} from "../../api/theatre"
import {useSelector,useDispatch} from "react-redux"
import {ShowLoading,HideLoading} from "../../redux/loaderSlice"
// import axiosInstance from '../../api';

function TheatreList() {
    const {users}= useSelector((state)=>state.users)
    const [isModalOpen, setIsModalOpen]=useState(false);
    const [theatres, setTheatres]=useState([]);
    const [selectedTheatres, setSelectedTheatres]=useState(null);
    const dispatch= useDispatch();
    const [isDeleteModalOpen, setIsDeleteModalOpen]=useState(false)
    const [formType, setFormType]=useState("add");
    const getData=async()=>{
        try{
            dispatch(ShowLoading());
            const response=await getAllTheatres(users._id)
            if(response.success){
                const allTheatres=response.data
                setTheatres(allTheatres.map(function(item){
                    return {...item,key:`theatre-${item._id}`}
                }))
            }else{
                message.error(response.message)
            }
        }catch{
            dispatch(HideLoading())
            message.error()
        }
    }

useEffect(()=>{
    getData()
},[])
const colums=[
    {
        title:"Name",
        dataIndex:"name",
        key:"name"
    },
    {
        title:"Address",
        dataIndex:"address",
        key:"address"
    },{
        title:"Phone Number",
        dataIndex:"phone",
        key:"phone"  
    },{
        title:"Email",
        dataIndex:"email",
        key:"email"
    },{
        title:"Status",
        dataIndex:"isActive",
        render:(status,data)=>{
            if(data.isActive){
                return `Approved`
            }else{
                return `pending/Blocked`
            }
        }
    },{
        title:"Action",
        dataIndex:"action",
        render:(text,data)=>{
            return (
                <div>
                    <Button onClick={()=>{
                        setIsModalOpen(true);
                        setSelectedTheatres(data);
                    }}> 
                    <EditOutlined /></Button>
                    <Button onClick={()=>{
                        setIsDeleteModalOpen(true);
                        setSelectedTheatres(data);
                    }}
                    ><DeleteOutlined /></Button>
                    {data.isActive && <Button>+ Shows</Button>}
                </div>
            )
        }
    }
]

  return (
    <div className='d-flex justify-content-end'>
        <Button type='primary'
        onClick={()=>{
            setIsModalOpen(true);
            setFormType("add")
        }}
        >
            Add Theatres
        </Button>
        <h3>Theatrelist</h3>

        <Table dataSource={theatres} columns={colums}></Table>
        {isModalOpen && (<TheatreFormModal 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedTheatres={selectedTheatres}
            formType={formType}
            getData={getData}
        />)}
        {isDeleteModalOpen && (
            <DeleteTheatreModal
            isDeleteModalOpen={isDeleteModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            selectedTheatres={selectedTheatres}
            getData={getData}
          
        />)}
    </div>
  )
}

export default TheatreList