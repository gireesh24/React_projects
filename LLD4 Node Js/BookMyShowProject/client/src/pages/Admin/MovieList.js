import React, { useEffect, useState } from 'react'
import { Table, Button } from 'antd'
import MovieForm from './MovieForm';
import { useDispatch,useSelector } from 'react-redux';
import { HideLoading,ShowLoading } from '../../redux/loaderSlice';
import { getAllMovies } from '../../api/movies';
import moment from "moment";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import DeleteMovieModel from './DeleteMovieModel';



function MovieList() {

    const fackeMovies=[
        {
            key:"1",
            poster:"image1",
            title:"Street 2",
            description:"horror comedy",
            duration:120,
            genre:"comedy",
            language:"telugu",
            releaseDate:"2024-10-20",
        },
        {
            key:"2",
            poster:"image1",
            title:"jocker",
            description:"comedy",
            duration:130,
            genre:"comedy",
            language:"hindhi",
            releaseDate:"2024-09-10",
        }
    ]


    const colums=[
        {
            title:"Poster",
            dataIndex:"poster",
            render:(text,data)=>{
                return (
                    <img 
                    src={data.poster}
                    alt="movie poster"
                    width="75"
                    height="115"
                    style={{objectFit:"cover"}}
                    />
                );
            }
        },
        {
            title:"movie name",
            dataIndex:"title",
        },
        {
            title:"description",
            dataIndex:"description",
        },
        {
            title:"duration",
            dataIndex:"duration",
            render:(text)=>{
                return `${text} min`;
            },
        },
        {
            title:"genre",
            dataIndex:"genre",
        },
        {
            title:"language",
            dataIndex:"language",
        },
        {
            title:"releaseDate",
            dataIndex:"releaseDate",
            render:(text,data)=>{
                return moment(data.releaseDate).format("YYYY-MM-DD")
            },
        },
        {
            title:"action",
            render:(text,data)=>{
                return (
                    <div>
                        <Button onClick={()=>{
                            setIsModalOpen(true);
                            setSelectedMovie(data);
                            setFormType("edit");
                        }}> 
                        <EditOutlined /></Button>
                        <Button onClick={()=>{
                            setIsDeleteModalOpen(true);
                            setSelectedMovie(data);
                        }}
                        ><DeleteOutlined /></Button>
                    </div>
                )
            }
        }
    ];

    const [isModalOpen, setIsModalOpen]=useState(false);
    const [movies, setMovies]=useState([]);
    const  [selectedMovie, setSelectedMovie]= useState(null);
    const [formType, setFormType]=useState("add");
    const [isDeleteModalOpen, setIsDeleteModalOpen]=useState(false);
    const Dispatch=useDispatch();
    // const loader=useSelector((state)=>state.loader)

   const getData= async()=>{
    Dispatch(ShowLoading());
    const response=await getAllMovies();
    const allMovies= response.data;
    setMovies(allMovies.map(function(item){
        return { ...item, key: `movie-${item._id}`}
    }));
    Dispatch(HideLoading()); // hideloading
   }
   // use Effect
   useEffect(()=>{
    getData();
   }, []);

// if(loader){
//     return (
//         <h1>Loading---</h1>
//     )
// }
  return (
    <div className='d-flex justify-content-end'>
        <Button onClick={()=>{
            setIsModalOpen(true);
            setFormType("add");
        }}> Add movie</Button>
        <Table dataSource={movies} columns={colums} />
        {isModalOpen && (
            <MovieForm 
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            formType={formType}
            getData={getData}
            />
        )}
        {isDeleteModalOpen && (
            <DeleteMovieModel 
        isDeleteModalOpen={isDeleteModalOpen}
        setIsDeleteModalOpen={setIsDeleteModalOpen}
            selectedMovie={selectedMovie}
            setSelectedMovie={setSelectedMovie}
            getData={getData}
            />
        )}
        
        <h2>MovieList</h2>
    </div>
  )
}

export default MovieList