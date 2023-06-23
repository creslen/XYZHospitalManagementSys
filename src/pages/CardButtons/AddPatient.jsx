import React from 'react';
import axios from 'axios';

axios.get('http://localhost:3000/staff/index.php')
  .then(response => {
    // Handle the response data
    console.log(response.data);
  })
  .catch(error => {
    // Handle the error
    console.error(error);
  });



  const MyButton = () => {
    const handleClick = () => {
      window.location.href = 'http://localhost:3000/staff/index.php';
    };
  
    return (
      <button onClick={handleClick}>View Patient</button>
    );
  };
  
  export default MyButton;
  