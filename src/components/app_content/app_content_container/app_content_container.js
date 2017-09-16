import React from 'react';
import {MovPreview} from '../app_content_mov_prview/app_mov_preview.js' 
import {AppContentHeaer} from '../app_content_header/app_content_header.js' 

class AppContentContainer extends React.Component {
   render() {
      return ( <div id="app_content_container">
                  <AppContentHeaer/>
                  <div className="positionedContent">
                     <MovPreview/>
                  </div>
               </div>
      );
   }
}

export {AppContentContainer};