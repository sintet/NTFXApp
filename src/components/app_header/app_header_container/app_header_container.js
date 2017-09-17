// AppHeaderContainer

import React from 'react';
import {AppHeaderSearch} from '../app_header_search/app_header_search';
import {MovieDesciption} from '../app_movie_description/app_movieDescription.js';

let testObj = {
   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmLLg0C8qco3FeGuKB3G8FEYnGMqSd90VpSQbKTN5MHSA9irrGw",
   title: "Kill Bill",
   genre: "Adventure",
   year: "2004",
   cast: "Uma Thurman, Lucy Liu, Vivica A. Fox, Michael Madsen, Daryl Hannah, David Carradine, Sonny Chiba, Julie Dreyfus, Chiaki Kuriyama ,Gordon Liu, Michael Parks",
   duration: "154min",
   description: `A woman in a wedding dress, the Bride, lies wounded in a chapel in El Paso, Texas, having been attacked by the Deadly Viper Assassination Squad. She tells their leader, Bill, that she is carrying his baby. He shoots her in the head.
   Four years later, having survived the attack, the Bride goes to the home of Vernita Green, planning to kill her. Both women were members of the Deadly Viper Assassination Squad, which has since disbanded; Vernita now leads a normal suburban family life. They engage in a knife fight, but are interrupted by the arrival of Vernita's young daughter, Nikki. Not wanting to kill Vernita in front of Nikki, the Bride agrees to meet Vernita at night to settle the matter, but Vernita tries to surprise the Bride with a pistol hidden in a box of cereal. The Bride dodges the shot and throws a knife into Vernita's chest, killing her.
   Four and a half years earlier, police investigate the massacre at the wedding chapel. The sheriff discovers the Bride is alive but comatose. In the hospital, Deadly Viper Elle Driver prepares to assassinate the Bride via lethal injection, but Bill aborts the mission at the last moment, considering it dishonorable to kill the Bride when she cannot defend herself.`,
   key: Math.random()
}

class AppHeaderContainer extends React.Component {
   render(){
      return ( <div id="app_header_container">
                  <div className="positionedContent">
                     <h1>netflixroulette</h1>
                     {/* <AppHeaderSearch/> */}
                     <MovieDesciption  img={testObj.img}
                                       title={testObj.title}
                                       year={testObj.year}
                                       cast={testObj.cast}
                                       duration={testObj.duration}
                                       description={testObj.description}
                     />
                  </div>
               </div>);
   }
};

export {AppHeaderContainer};