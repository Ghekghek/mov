
import './App.css';
import { useState ,useEffect } from 'react';
import React from 'react';
import MovieCard from './MovieCard';
import TrendingCard from './TrendingCard'
import { Splide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const movie1 = {
    
  "Title": "Italian Spiderman",
  "Year": "2007",
  "imdbID": "tt2705436",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg"

}


// const  trend ={
//   "adult": false,
//   "backdrop_path": "/e4V77sv2MvSbGyViKTXDsgR3fl4.jpg",
//   "id": 804150,
//   "title": "Cocaine Bear",
//   "original_language": "en",
//   "original_title": "Cocaine Bear",
//   "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
//   "poster_path": "/lYWCCjbYPtErqYJaoc92nknWfAv.jpg",
//   "media_type": "movie",
//   "genre_ids": [
//     53,
//     35
//   ],
//   "popularity": 258.402,
//   "release_date": "2023-02-22",
//   "video": false,
//   "vote_average": 7,
//   "vote_count": 108
// }

//  https://api.themoviedb.org/3/trending/all/day?api_key=9f769e74ac7ec9852654b071752fd56e



function App() {
  
  const [page, setPerPage] = useState(4);

 
  
  // Call the function later in your code



const [trending,setTrending] = useState ([]);

 const [movies,setMovies] = useState([])
 
const [searchTerm, setSearchTerm] = useState('')
  // 7af3a4a4



const API_URL = 'http://www.omdbapi.com?apikey=7af3a4a4';

 const searchMovies = async (title) => {
const response = await fetch(`${API_URL}&s=${title}`)
const data = await response.json();

setMovies(data.Search)

}

  

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=9f769e74ac7ec9852654b071752fd56e');
        const d = await response.json();
        setTrending(d.results);
      
      } catch (error) {
        console.error(error);
        setTrending([]);
      }
    };
  
    fetchTrending();
  
  }, []);

  


// useEffect(()=>{


//   searchMovies(searchTerm)

//   },[searchTerm])


// change perpage of splide when resize the viewport
useEffect(() => {
  if (window.innerWidth >= 600) {
    setPerPage(4);
  } else {
    setPerPage(2);
  }
  console.log(page)
  const handleResize = () => {
    if (window.innerWidth >= 600) {
      setPerPage(4);
    } else {
      setPerPage(2);
    }
  };
console.log(page)
  window.addEventListener('resize', handleResize);

  // Cleanup function
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);


  return (
    <div className="App">
      <div className="nav">
      <div>
<h1>Movie Hunt</h1>
</div>
<div className='search'>
   <input type="text" placeholder='Search for movies'
   value={searchTerm}
   onChange={(e)=>setSearchTerm(e.target.value)}
  //  onChange={(e)=>setSearchTerm(e.target.value)}
   /> 
  <button onClick={() => { searchMovies(searchTerm); setSearchTerm(''); }}>Search</button>
   {/* <button onClick={()=>searchMovies(searchTerm)}>Search</button>  */}
</div>
      </div>



{/* Check if movies.length is greater than 0 */}
{movies?.length > 0
?(
<div className="search-container">
{movies.map((movie,idx) =>(<MovieCard key={idx} movie={movie}/>))}
</div>
  )
  // else display empty
:(
<div className="empty">
  <h2 className='tagline'>Escape reality, one movie at a time.</h2>
</div>
)}
<div>
  <h1>Trending</h1>
  </div>
<div className="trend-container">


<Splide  className='trend-wrapper'
options={ 
  { 
    perPage: page,
    type   : 'loop',
    drag   : 'free',
    focus  : 'center',
    gap: "20px",
   
    arrows:false,
    pagination:false,
    autoScroll: {
      speed: 1,
    },
  } }
  extensions={{ AutoScroll }}

aria-label="My Favorite Images">
{trending.map((trending,idx) =>(<TrendingCard key={idx} trend={trending}/>))}
 
</Splide>






</div>
</div>


 



    
  );

}

export default App;
