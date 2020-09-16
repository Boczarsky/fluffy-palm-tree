import React from 'react';
import './App.css';
import MovieDetails from './components/MovieDetails';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="full-screen dark-bg side-padding">
      <SearchBar/>
      <MovieDetails/>
    </div>
  );
}

export default App;
