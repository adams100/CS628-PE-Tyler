
import { Link } from "react-router-dom";
import React, { useState } from 'react';

function CityList({ cities }) {
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <div>
            <h2>City List</h2>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <Link to={`/cities/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
            
        </div>
    );
}

export default CityList;
