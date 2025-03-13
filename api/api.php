<?php
header('Content-Type: application/json');
require_once 'config/classi.php'; // Includi le classi

$caseifici = [
    [
        "code" => "C123",
        "nome" => "Caseificio Alpino",
        "des" => "Produzione formaggi tipici",
        "partita_iva" => "IT12345678901",
        "indirizzo" => "Via Roma 10, Milano",
        "cli_id" => 1
    ],
    [
        "code" => "C456",
        "nome" => "Caseificio Montano",
        "des" => "Specialità alpine",
        "partita_iva" => "IT98765432100",
        "indirizzo" => "Via Monti 5, Torino",
        "cli_id" => 2
    ]
];

if (isset($_GET['id'])) {
    $id = intval($_GET['id']);
    echo json_encode($caseifici[$id]); // Restituisce un solo caseificio
} else {
    echo json_encode($caseifici); // Restituisce tutti
}
?>