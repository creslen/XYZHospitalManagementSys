import React from 'react';
import axios from 'axios';

axios.get('http://localhost/xyz/hospitalV4/admin/room_details/room_list.php')
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
      window.location.href = 'http://localhost/xyz/hospitalV4/admin/room_details/room_list.php';
    };
  
    return (
      <button onClick={handleClick}>View Room</button>
    );
  };
  
  export default MyButton;
  