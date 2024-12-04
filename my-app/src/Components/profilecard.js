import React from 'react';
import './profilecard.css'

function Profilecard(prop) {
  return (
    <div className="profilecard">
      <p>Name: {prop.name}</p>
      <p>Age: {prop.age}</p>
      <p>Occupation: {prop.occupation}</p>
      <p>Location: {prop.location}</p>

    </div>
  );
}

export default Profilecard;