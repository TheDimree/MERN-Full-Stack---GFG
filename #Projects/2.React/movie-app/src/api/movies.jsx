import axios from "axios";
import { setMovies } from "../slice/movieSlice";

export const getMovies = () => async (dispatch) => {  
// getMovies = () => { return async dispatch => { } } return keyword is implicit. Hence, geMovies is just a normal function returning a thunk function and to call this you always need dispatch
    const URL = 'http://localhost:8008/movies'
    try {
        const {data} = await axios.get(URL);
        // console.log(data)
        dispatch(setMovies(data))   // data will go in action.payload
        return data;
    } catch(error) {
        return error;
    }
}