import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie ">
   
   <div className="movie-img trend">
   <FontAwesomeIcon className='icon' icon={faCirclePlay} ></FontAwesomeIcon>
   <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        >
      </img>
   </div>
      
       
    
 
      <div className="movie-d">
      <h3>{movie.Title}</h3>
      
     
        <p>{movie.Year}</p>
        <span>{movie.Type}</span>
      </div>

    </div>
 

  );
};

export default MovieCard;
