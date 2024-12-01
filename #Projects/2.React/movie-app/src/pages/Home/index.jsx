import React, { useEffect } from 'react'
import Navbar from "../../components/Navbar"
import { useDispatch, useSelector } from 'react-redux'
import { getMovies } from '../../api/movies.jsx';   // extension avoid name conflict.

const Home = () => {
    const dispatch = useDispatch()
    const {movies} = useSelector(state=> state.movies)
    console.log("get: ", movies);
    useEffect(()=>{
        dispatch(getMovies());
    },[])
    return (
        <>
            <Navbar />
        </>
    )
}

export default Home
