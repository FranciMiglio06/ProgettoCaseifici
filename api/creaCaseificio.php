<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Access-Control-Allow-Credentials: true"); 

$conn = require_once(__DIR__ . '/../config/connessione.php');
require_once(__DIR__ . '/../config/metodi.php');
require_once(__DIR__ . '/../config/admin.php');
$caseificio=new Caseifici(
    $_GET['nomeCampoClasse']);
    $dati=createCaseifici($conn,$caseificio);
    echo json_encode($dati);
