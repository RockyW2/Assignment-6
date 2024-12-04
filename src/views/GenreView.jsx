import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GenreView.css";

function GenreView () {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
  
  
    useEffect(() => {
      (async function getMovies() {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_TMDB_KEY}`
        );
        setMovies(response.data.results);
      })();
    }, []);
  
    function loadMovie(id) {
      navigate(`/movies/${id}`);
    }

    return(
        <h1>Genre View</h1>
    )
}

export default GenreView