import React from 'react';
import './App.css';
import BookLibrary from './components/pages/BookLibrary';
import { Navigation } from './components/layouts/Navigation';
import { LibraryBackground } from './components/layouts/LibraryBackground';

const App = () => {

  return (
   <div>
    <Navigation />
    <LibraryBackground />
    <BookLibrary />
   </div>
  );
}

export default App;
