import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Notice the change here
import NavBar from './NavBar'
import AddCity from './AddCity';
import CityList from './CityList';
import './App.css'
import CityDetail from './CityDetail'
function App() {
    const [cities, setCities] = useState([]);

    const handleAddCity = (city) => {
        setCities(prev => [...prev, city]);
    }

    return (
      
      
        <Router>
          <NavBar />
            <Routes>  
                <Route path="/AddCity" element={<AddCity onAdd={handleAddCity} />} />
                <Route path="/CityList" element={<CityList cities={cities} />} />
                <Route path="/cities/:id" element={<CityDetail cities={cities}/>} />
            </Routes>
        </Router>
    );
}

export default App;
