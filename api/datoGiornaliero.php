<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Access-Control-Allow-Credentials: true"); 

$conn = require_once(__DIR__ . '/../config/connessione.php');
require_once(__DIR__ . '/../config/metodi.php');
$codeCaseificio= $_GET['idCaseificio'];
$data = $_GET['data'];
echo json_encode(getDatoGiornaliero($conn,$codeCaseificio,$data));
?>