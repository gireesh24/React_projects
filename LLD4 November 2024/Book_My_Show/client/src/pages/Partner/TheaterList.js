import React,{useEffect,useState} from 'react'
import { Table,Button,message } from 'antd'
import TheatreFormModal from "./TheatreFormModal";
import DeleteTheatreModal from './DeleteTheatreModal'
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { getAllTheatres } from '../../api/theatres';
import { useSelector, useDispatch } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/loaderSlice';


function TheaterList() {
const {user} =useSelector((state)=>state.users);
const {loading}=useSelector((state)=>state.loaders)
const [isModalOpen, setIsModalOpen]=useState(false);
const [isDeleteModalOpen, setIsDeleteModalOpen]=useState(false);
const [isShowModalOpen, setIsShowModalOpen]=useState(false);
const [selectedTheatre, setSelectedTheatre]= useState(null);
const [formType, setFormType] =useState("add");
const [theatres, setTheatres]=useState(null);
const dispatch=useDispatch();

const getData = async ()=>{
    try{
        dispatch(ShowLoading());
        const response=await getAllTheatres(user._id);
        if(response.success){
            const allTheatres=response.data;
            console.log("get all theatres",allTheatres);
            setTheatres(
                allTheatres.map(function(iteam){
                    return {...iteam, key:`theatre${iteam._id}`}
                })
            );
        }else{
            message.error(response.message);
        }
        dispatch(HideLoading());
    }catch(err){
        dispatch(HideLoading());
        message.error(err.message);
    }
};
    useEffect(()=>{
        getData();
    },[])

const columns=[
    {
    title:"name",
    dataIndex:"name",
    key:"name"
    },
    {
        title:"Address",
        dataIndex:"address",
        key:"address"
    },
    {
        title:"Phone Number",
        dataIndex:"phoneNumber",
        key:"phoneNumber"
    },
    {
        title:"Email",
        dataIndex:"email",
        key:"email"
    },
    {
        title:"Status",
        dataIndex:"status",
        render:(status, data)=>{
            if(data.isActive){
                return "Approved";
            }else{
                return "Pending/Blocked"
            }
        }
    },
    {
        title:"Action ",
        dataIndex:"action",
        render:(text, data)=>{
            return (
                <div className='d-flex align-items-centre gap-10'>
                    <Button onClick={()=>{
                        setIsModalOpen(true);
                        setFormType("edit");
                        setSelectedTheatre(data);
                    }}>
                        <EditOutlined/>
                    </Button>
                    <Button onClick={()=>{
                        setIsDeleteModalOpen(true);
                        setSelectedTheatre(data);
                    }}>
                        <DeleteOutlined />
                    </Button>
                    {
                        data.isActive &&(
                            <Button onClick={()=>{
                                setIsShowModalOpen(true);
                                setSelectedTheatre(data);
                            }}>
                                +Show
                            </Button>
                        )
                    }
                </div>
            )
        }
    }
]

if(loading){
    return <div>
        loading...........
    </div>
}

  return (
    <>
    <div className='d-flex justify-content-end'>
        <Button
         type='primary'
         onClick={()=>{
            setIsModalOpen(true)
            setFormType("add");
         }}
        >
            Add Theatres
        </Button>
    </div>
    <Table dataSource={theatres} columns={columns}/>
    {isModalOpen &&(
        <TheatreFormModal 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedTheatre={selectedTheatre}
            setSelectedTheatre={setSelectedTheatre}
            formType={formType}
            getData={getData}
        />
    )}

    {isDeleteModalOpen &&(
        <DeleteTheatreModal 
            isDeleteModalOpen={isDeleteModalOpen}
            selectedTheatre={selectedTheatre}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
            setSelectedTheatre={setSelectedTheatre}
            getData={getData}
        />
    )}
    </>
  )
}

export default TheaterList