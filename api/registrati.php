<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS"); 
header("Access-Control-Allow-Headers: Content-Type, Authorization"); 
header("Access-Control-Allow-Credentials: true"); 

$conn = require_once(__DIR__ . '/../config/connessione.php');
require_once(__DIR__ . '/../config/metodi.php');
require_once(__DIR__ . '/../config/classi.php');

$cliente=new Cliente(
$_GET['cli_username'],
$_GET['cli_password'],
$_GET['cli_nome'],
$_GET['cli_cognome'],
$_GET['cli_indirizzo'],
$_GET['cli_email'],
$_GET['cli_num_tel'],
$_GET['cli_partita_iva']);

echo json_encode(createCliente($cliente,$conn));
?>