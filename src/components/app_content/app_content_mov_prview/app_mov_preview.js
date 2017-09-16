import React from 'react';

let testObj = {
   img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxmLLg0C8qco3FeGuKB3G8FEYnGMqSd90VpSQbKTN5MHSA9irrGw",
   title: "Kill Bill",
   genre: "Adventure",
   year: "2004",
   key: Math.random()
}

let testArr = [testObj, testObj, testObj, testObj, testObj, testObj, , testObj, testObj, testObj, testObj, testObj]

function movieItem(props){
   return (
      <li className="app_movieItem">
         <div className="app_mov_preview">
            <div className="app_mov_preview_image">
               <img src={props.img} />
            </div>
            <div className="app_mov_preview_decription">
               <div className="app_mov_preview_decription_title">
                  <h4>{props.title}</h4>
                  <p>{props.genre}</p>
               </div>
               <div className="app_mov_preview_decription_year">
                  <div>{props.year}</div>
               </div>            
            </div>
         </div>
      </li>
   );
}

class MovPreview extends React.Component {
   render(){
      return (
         <ul className="app_movieItem_list">
            {testArr.map(movieItem)}
         </ul>
      )
   }
}


export {MovPreview};