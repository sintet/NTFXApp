import React from 'react';

class AppContentHeaer extends React.Component {
   render() {
      return (
         <div id="app_content_container_header">
            <div className="positionedContent flex">
               <div>5 items found</div>
               <div id="app_content_container_header_sort">
                  <div>Sotr by :</div>
                  <div className="activSort sortOption">releas date</div>
                  <div className="sortOption">rating</div>
               </div>
            </div>
         </div>
      )
   }
}

export {AppContentHeaer};