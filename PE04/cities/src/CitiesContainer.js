// CitiesContainer.js
import React, { useState } from 'react';
import CitiesList from './CityList';
import AddCity from './AddCity';

function CitiesContainer() {
    const [cities, setCities] = useState([]);

    const handleAddCity = (newCity) => {
        setCities(prevCities => [...prevCities, newCity]);
    };

    return (
        <div>
            <AddCity onAdd={handleAddCity} />
            <CitiesList cities={cities} />
        </div>
    );
}

export default CitiesContainer;
