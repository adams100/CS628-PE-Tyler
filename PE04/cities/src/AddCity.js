// AddCity.js
import React, { useState } from 'react';

function AddCity({ onAdd }) {
    const [city, setCity] = useState({
        name: '',
        country: '',
        population: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCity(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd(city);
        setCity({ name: '', country: '', population: '' });
    }

    return (
        <div>
            <h2>Add City</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" value={city.name} onChange={handleChange} placeholder="Name" />
                <input name="country" value={city.country} onChange={handleChange} placeholder="Country" />
                <input name="population" value={city.population} onChange={handleChange} placeholder="Population" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddCity;
