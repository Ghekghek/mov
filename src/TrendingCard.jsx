import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCirclePlay} from "@fortawesome/free-solid-svg-icons";

import { Splide, SplideSlide } from '@splidejs/react-splide';



const TrendingCard = ({ trend }) => {
  return (
    <SplideSlide>
    

    <div id="trends" className="trend">
    <img src={`https://image.tmdb.org/t/p/w500/${trend.poster_path}`} alt={trend.title} />
    <FontAwesomeIcon className='icon' icon={faCirclePlay} ></FontAwesomeIcon>
    <div className="trend-card">
     <div>
     <p className='movie-title'>{trend.title}</p>
    </div>
    
    
    <div>
    


     <read-more limit="12" more="Show more" less="Show less">
   <p className='movie-overview'>{trend.overview}</p>

  </read-more>
    </div>
    <div className='movie-details'>
    <p className='movie-type'>{trend.media_type}</p>
     <p className='movie-lang'><span>Language :</span> {trend.original_language}</p>
     <p className='movie-date'><span>Date Release :</span> {trend.release_date}</p>
     <p className='movie-rating'>Rating : {trend.vote_average}</p>
    </div>
    
    
    </div>
    </div>
    </SplideSlide>
  );
};

export default TrendingCard;
