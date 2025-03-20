<?php
// Abilita la visualizzazione degli errori per il debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Imposta gli header per la risposta API
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Importa i file di configurazione
require_once(__DIR__ . '/../config/connessione.php');
require_once(__DIR__ . '/../config/metodi.php');
require_once(__DIR__ . '/../config/classi.php');

// Ricezione e decodifica del JSON dalla richiesta
$input_data = json_decode(file_get_contents("php://input"), true);

// Controllo se il JSON è stato decodificato correttamente
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        "success" => false,
        "message" => "Errore JSON: " . json_last_error_msg()
    ]);
    exit();
}

// Creazione oggetto Cliente
$cliente = new Cliente(
    $input_data['cli_username'],
    $input_data['cli_password'],
    $input_data['cli_nome'],
    $input_data['cli_cognome'],
    $input_data['cli_indirizzo'],
    $input_data['cli_email'],
    $input_data['cli_num_tel'],
    $input_data['cli_partita_iva']
);

// Chiamata alla funzione di creazione cliente
$result = loginCliente($cliente, $conn);

echo json_encode($result);

?>