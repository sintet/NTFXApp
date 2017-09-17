import React from 'react';

class AppHeaderSearch extends React.Component {
   render(){
      return ( <div id="app_header_search">
                  <h2>FIND YOUR MOVIE</h2>
                  <div id="app_header_search_inputArea">
                     <input type="textarea" placeholder="SEARCH"/>
                     <button>&crarr;</button>
                  </div>
                  <div id="app_header_search_footer">
                     <div id="app_header_search_footer_filter">
                        <div>SEARCH BY:</div>
                           <button className="buttonActive">TITLE</button>
                           <button className="buttonPassive">DIRECTION</button>                        
                     </div>         
                     <button className="buttonActive largButton">SEARCH</button>
                  </div>
               </div>);
   }
}

export {AppHeaderSearch};