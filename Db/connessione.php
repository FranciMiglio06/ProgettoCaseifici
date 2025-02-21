<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "consorziokoci";
$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("Connessione al database fallita: " . $conn->connect_error);
}

return $conn;