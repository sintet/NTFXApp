// AppHeaderContainer

import React from 'react';
import {AppHeaderSearch} from '../app_header_search/app_header_search';
import {MovieDesciption} from '../app_movie_description/app_movieDescription.js';

let testObj = {
   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmLLg0C8qco3FeGuKB3G8FEYnGMqSd90VpSQbKTN5MHSA9irrGw",
   title: "Kill Bill",
   genre: "Adventure",
   year: "2004",
   key: Math.random()
}

class AppHeaderContainer extends React.Component {
   render(){
      return ( <div id="app_header_container">
                  <div className="positionedContent">
                     <h1>netflixroulette</h1>
                     <AppHeaderSearch/>
                     {/* <MovieDesciption/> */}
                  </div>
               </div>);
   }
};

export {AppHeaderContainer};