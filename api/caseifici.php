<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Access-Control-Allow-Credentials: true"); 

$conn = require_once(__DIR__ . '/../config/connessione.php');
require_once(__DIR__ . '/../config/metodi.php');


$dati = getCaseifici($conn);

if ($dati === false || empty($dati)) {
    echo json_encode(["errore" => "Nessun dato trovato o errore nel database"]);
} else {
    echo json_encode($dati);
}

?>