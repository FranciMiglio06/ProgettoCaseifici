<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
    }

include 'funzioni.php'; // Include il file con i metodi
include 'classi.php';
 /*function createCaseificio($conn, $nome, $dex, $partita_iva,$indirizzo,$cli_id) {
    $result = $conn->query("SELECT cas_code FROM caseifici ORDER BY cas_code");
    $usedIds = [];
    while ($row = $result->fetch_assoc()) {
        $usedIds[] = $row['cas_code'];
    }
}

    $newId = 1;
    for ($i = 1; $i <= count($usedIds) + 1; $i++) {
        if (!in_array($i, $usedIds)) {
            $newId = $i;
            break;
        }
    }

    $stmt = $conn->prepare("INSERT INTO caseifici (cas_code, cas_nome, cas_dex, cas_partita_iva,cas_indirizzo,cas_cli_id) VALUES (?, ?, ?, ? , ? , ? )");
    $stmt->bind_param("issssi", $newId, $nome, $dex, $partita_iva,$indirizzo,$cli_id);
    $stmt->execute();
}*/

function modifycaseifici($conn,Caseifici $caseifici) {
    $stmt = $conn->prepare("UPDATE caseifici SET cas_nome = ?, cas_dex = ?,cas_partita_iva = ? ,cas_indirizzo = ?,cas_cli_id = ? WHERE cas_code= ?");
    $stmt->bind_param("issssi",$caseifici->code,$caseifici->nome, $caseifici->dex, $caseifici->partita_iva, $caseifici->indirizzo, $caseifici->cli_id);
    $stmt->execute();
    return $stmt->get_result();
    }

?>
