import React from 'react'
import { useDispatch } from 'react-redux'
import { HideLoading, ShowLoading } from '../../redux/loaderSlice';
import { deleteMovie } from '../../api/movies';
import { message, Modal } from 'antd';

const DeleteMovieModel=({
    isDeleteModalOpen,
    setIsDeleteModalOpen,
    selectedMovie,
    setSelectedMovie,
    getData,
})=>{
    const dispatch=useDispatch();
    const handleOk= async()=>{
        try{
            dispatch(ShowLoading());
            const movieId= selectedMovie._id;
            const response= await deleteMovie({movieId});
            if(response.success){
                message.success(response.message);
                getData();
            }else{
                message.error(response.message)
            }
            setSelectedMovie(null);
            setIsDeleteModalOpen(false);
            dispatch(HideLoading());
        }catch(err){
        dispatch(HideLoading());
        setIsDeleteModalOpen(false);
        message.error(err.message);
        }
    }
    const handleCancel=()=>{
        setIsDeleteModalOpen(false);
        setSelectedMovie(null);
    }
    return (
        <Modal 
            title="Delete Movie?"
            open={isDeleteModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
        >
            <p className='pt-3 fs-18'>are you sure want delete this movie?</p>
            <p className='pb-3 fs-18'>this action cont be a undo and you will lose this movie data</p>

        </Modal>
    );
}
export default DeleteMovieModel