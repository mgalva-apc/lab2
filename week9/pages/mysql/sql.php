<?php
$servername = "localhost";
$username = "webprogmi212";
$password = "webprogmi212";
$dbname = "outlanderDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// sql to create table
$sql = "CREATE TABLE Outlanders (
id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) NOT NULL,
website VARCHAR(30) NOT NULL,
comment VARCHAR(150) NOT NULL,
gender VARCHAR(30) NOT NULL,
regTime TIMESTAMP NOT NULL DEFAULT
)";

if ($conn->query($sql) === TRUE) {
  echo "Table OUTLANDERS created successfully";
} else {
  echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
