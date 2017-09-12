// Application view
import React from 'react';
import ReactDOM from 'react-dom';
import {AppHeader} from './app_header/index.js';
import {AppContent} from './app_content/index.js';

const el = <h1>hello</h1>;
function aaa() {
   return <h1>123676432</h1>;
};

class Al_Application extends React.Component {
   render(){
      return (<div>
         {el}
         {AppHeader}
         {aaa()}
      </div>);
   }
};

ReactDOM.render(<Al_Application/>, document.getElementById('al_application'));


export {Al_Application};