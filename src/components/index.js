// Application view

import React from 'react';
import ReactDOM from 'react-dom';
import {AppHeader} from './app_header/index.js';
import {AppContent} from './app_content/index.js';

class Al_Application extends React.Component {
   render(){
      return (<div>
         <AppHeader/>
         <AppContent/>
      </div>);
   }
};

ReactDOM.render(<Al_Application/>, document.getElementById('al_application'));

export {Al_Application};