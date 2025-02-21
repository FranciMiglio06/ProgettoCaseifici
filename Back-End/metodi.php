<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
    }
require_once('connessione.php');
    class Cliente {
        public $username;
        public $password;
        public $nome;
        public $cognome;
        public $indirizzo;
        public $email;
        public $num_tel;
        public $partita_iva;
    }
    function caseifici(){
        $sql= "SELECT *FROM caseifici";
        $risultato=$conn->query($sql);
        $caseifici = $risultato->fetch_assoc(MYSQLI_ASSOC);}
    function caseificio($id) {
        $sql = "SELECT * FROM caseifici WHERE id = $id";
        $risultato=$conn->query($sql);
        $caseificio = $risultato->fetch_assoc();
        return $caseificio;
    }

    function createCliente(Cliente $cliente){
    $result = $conn->query("SELECT cli_id FROM clienti ORDER BY cli_id");
    $usedId = [];
    while ($row = $result->fetch_assoc()) {
        $usedId[] = $row['cli_id'];
    }
    
    $newId = 1;
    for ($i = 1; $i <= count($usedId) + 1; $i++) {
        if (!in_array($i, $usedId)) {
            $newId = $i;
            break;
        }
    }
    $hashedPassword = password_hash($cliente->password, PASSWORD_DEFAULT);
    $stmt = $conn->prepare("INSERT INTO clienti (cli_id, username, password, nome, cognome, indirizzo, email, num_tel, partita_iva) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("issssssss", $newId, $cliente->username, $hashedPassword, $cliente->nome, $cliente->cognome, $cliente->indirizzo, $cliente->email, $cliente->num_tel, $cliente->partita_iva);

    if ($stmt->execute()) {
        return "Cliente creato con successo. ID assegnato: " . $newId;
    } else {
        return "Errore nella creazione del cliente: " . $stmt->error;
    }
