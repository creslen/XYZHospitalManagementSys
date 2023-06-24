import React, { useEffect, useState } from 'react';

export default function ViewPatient() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/getData.php') // Assuming the PHP file is in the same directory as your React component
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {data.map(patient => (
        <div key={patient.id}>
          <h2>{patient.name}</h2>
          <p>{patient.email}</p>
          {/* Render other fields here */}
        </div>
      ))}
    </div>
  );
}
