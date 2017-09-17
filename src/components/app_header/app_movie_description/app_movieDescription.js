// moview decription view

import React from 'react';

class MovieDesciption extends React.Component {
   render () {
      return (
         <div className="app_movie_decription">
            <div className="app_movie_decription_poster">
               <img src={this.props.img}/>
            </div>
            <div className="app_movie_decription_text">
               <h2>{this.props.title}</h2>
               <p>Oscar-winning movies</p>
               <p className="app_movie_decription_info">
                  <p>{this.props.year}</p>
                  <p>{this.props.duration}</p>
               </p>
               <p>{this.props.description}</p>
               <p>Director Quentin Tarantino</p>
               <p>{this.props.cast}</p>
            </div>
         </div>
      );
   }
}

export {MovieDesciption};