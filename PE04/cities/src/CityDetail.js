import React from 'react';
import { useParams } from 'react-router-dom';

const citiesDetails = [
  { id: 1, name: 'Paris', country: 'France', population: 2000000, details: 'Capital of France' },
  // ... add more sample cities details
];

function CityDetail() {
  const { id } = useParams();
  const city = citiesDetails.find(c => c.id === parseInt(id));

  return (
    <div>
      <h3>{city.name}</h3>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}

export default CityDetail;
