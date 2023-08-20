import React from 'react';
import { useParams } from 'react-router-dom';


function CityDetail({cities}) {
  const { id } = useParams();
  cities.find(c => console.log(c.id))
  const city = cities.find(c => c.id === parseInt(id));

  return (
    <div>
      <h3>{city.name}</h3>
      <p>Country: {city.country}</p>
      <p>Population: {city.population}</p>
    </div>
  );
}

export default CityDetail;
