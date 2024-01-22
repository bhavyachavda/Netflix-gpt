import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";


const useNowPlayingMovies = () => {
    //Fetch Data From TMDB API and update store 
  const dispatch = useDispatch();

  const getNowPlayingMovie = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1",API_OPTIONS);
    const json = await data.json();
    console.log("josn",json.results);
    dispatch(addNowPlayingMovies(json.results))
  }

  useEffect(()=>{
    getNowPlayingMovie();
  })
}

export default useNowPlayingMovies;