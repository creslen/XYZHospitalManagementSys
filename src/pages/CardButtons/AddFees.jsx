import React from 'react';
import axios from 'axios';

axios.get('http://localhost/hospital4/admin/doctor/main_doc_page.php')
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
      window.location.href = 'http://localhost/hospital4/admin/doctor/main_doc_page.php';
    };
  
    return (
      <button onClick={handleClick}>View Fees</button>
    );
  };
  
  export default MyButton;
  