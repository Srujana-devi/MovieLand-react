import {useEffect, useState} from "react";
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from "./MovieCard";


<<<<<<< HEAD

const API_URL = 'http://www.omdbapi.com?apikey=bc76104'

=======
const API_URL = "http://www.omdbapi.com?apikey={process.env.REACT_APP_API_KEY}"
>>>>>>> ba68bf7d883cd9620a59607dcd558a543482d722


const App = () =>{
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const searchMovies  = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovies('Batman');
  },[])
  return (
    <div className = "App">
    <h1>MovieLand</h1>
    <div className = "search">
    <input placeholder = "Search the poster" value = {searchTerm} onChange = {(e)=>setSearchTerm(e.target.value)}/>
<img src = {SearchIcon} alt = "search" onClick = {()=>searchMovies(searchTerm)}/>
    </div>
    {
      movies?.length > 0 ?(
        <div className = "container">
        {movies.map((movie)=>(
          <MovieCard movie = {movie}/>
        ))}
    </div>
  ) : <div className = "empty">
  <h2>No Movies Found</h2>
  </div>
    }

    </div>


  );
}
export default App;
