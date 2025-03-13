<?php
header('Content-Type: application/json');
require_once 'config/classi.php'; // Includi le classi

$caseifici = [];

$caseificio1 = new Caseifici();
$caseificio1->code = "C123";
$caseificio1->nome = "Caseificio Alpino";
$caseificio1->des = "Produzione formaggi tipici";
$caseificio1->partita_iva = "IT12345678901";
$caseificio1->indirizzo = "Via Roma 10, Milano";
$caseificio1->cli_id = 1;

$caseificio2 = new Caseifici();
$caseificio2->code = "C456";
$caseificio2->nome = "Caseificio Montano";
$caseificio2->des = "Specialità alpine";
$caseificio2->partita_iva = "IT98765432100";
$caseificio2->indirizzo = "Via Monti 5, Torino";
$caseificio2->cli_id = 2;

$caseifici[] = $caseificio1;
$caseifici[] = $caseificio2;

echo json_encode($caseifici);
?>