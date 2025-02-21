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
        
    }