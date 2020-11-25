import React from 'react'
import './App.css';
import Home from './Components/HomeComponent';
import Search from './Components/SearchJobComponent'
import JobComponent from './Components/JobComponent'

function App() {
  return (
    <div className="App">
      <Home />
      <Search />
      <JobComponent />
    </div>
  );
}

export default App;
