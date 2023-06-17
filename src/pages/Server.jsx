// Import required libraries
const mysql = require('mysql');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'your_host',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Perform validation query
const email = data.get('email');
const password = data.get('password');
const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`;

connection.query(query, (err, results) => {
  if (err) {
    console.error('Error executing query:', err);
  } else {
    if (results.length > 0) {
      console.log('Validation successful');
      // Perform further actions or redirect to another page
    } else {
      console.log('Validation failed');
      // Handle validation failure, e.g., display an error message
    }
  }
});

// Close the database connection
connection.end();
