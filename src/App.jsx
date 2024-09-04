import React, { useState } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Home from './pages/Pixabay/Home';
import { BottomFooter } from './components/BottomFoote';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <CustomNavbar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <BottomFooter/>
    </>
  );
}

export default App;
