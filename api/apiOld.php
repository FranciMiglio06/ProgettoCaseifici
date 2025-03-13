<?php
header('Content-Type: application/json');
require_once 'config/classi.php'; // Includi le classi

// Simula il recupero dati da un database
$caseificio = new Caseifici();
$caseificio->code = "C123";
$caseificio->nome = "Caseificio Alpino";
$caseificio->des = "Produzione formaggi tipici";
$caseificio->partita_iva = "IT12345678901";
$caseificio->indirizzo = "Via Roma 10, Milano";
$caseificio->cli_id = 1;

echo json_encode($caseificio);
?>