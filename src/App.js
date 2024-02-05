import React, {useState} from 'react';
import './App.css';
import BookLibrary from './components/pages/BookLibrary';

const App = () => {

  return (
   <div className='container-row' style={{marginTop: "20px"}}>
    <BookLibrary />
   </div>
  );
}

export default App;
