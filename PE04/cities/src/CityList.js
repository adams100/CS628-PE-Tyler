// // CityList.js
// import React from 'react';

// function CityList({ cities }) {
//     return (
//         <div>
//             <h2>City List</h2>
//             <ul>
//                 {cities.map((city, index) => (
//                     <li key={index}>
//                         <Link {city.name}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default CityList;
import React, { useState } from 'react';

function CityList({ cities }) {
    const [selectedCity, setSelectedCity] = useState(null);

    return (
        <div>
            <h2>City List</h2>
            <ul>
                {cities.map((city, index) => (
                    <li key={index}>
                        <Link to={`/city/${city.id}`}>{city.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CityList;
