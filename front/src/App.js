import React, { Component }  from 'react';
import Conent_interview from './component/Interview';


function App() {
  return (
    <div> 
    <h2>RESTful API </h2>  
     <Conent_interview botable='interviewlist' titlenm="사전인터뷰"></Conent_interview>
     {/* <Conent_interview botable='write' titlenm="면접제안"></Conent_interview>       */}
    </div>
  );
}

export default App;
