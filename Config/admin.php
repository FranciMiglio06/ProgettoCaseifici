<?php
session_start();
if (!isset($_SESSION['logged_in']) || $_SESSION['logged_in'] !== true) {
    header('Location: login.html');
    exit();
    }

include 'funzioni.php'; // Include il file con i metodi
include 'classi.php';

function createCaseifici($conn, Caseifici $caseifici) {
    // Trova il primo ID disponibile
    $result = $conn->query("SELECT cas_code FROM caseifici ORDER BY cas_code");
    $idUtilizzati = [];
    while ($row = $result->fetch_assoc()) {
        $idUtilizzati[] = $row['cas_code'];
    }
    
    $newId = 1;
    for ($i = 1; $i <= count($idUtilizzati) + 1; $i++) {
        if (!in_array($i, $idUtilizzati)) {
            $newId = $i;
            break;
        }
    }
    
    $caseifici->code = $newId;
    // Inserisce il record utilizzando l'ID trovato
    $stmt = $conn->prepare("INSERT INTO caseifici (cas_code, cas_nome, cas_dex, cas_partita_iva, cas_indirizzo, cas_cli_id) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("issssi", $caseifici->code, $caseifici->nome, $caseifici->dex, $caseifici->partita_iva, $caseifici->indirizzo, $caseifici->cli_id);
    $stmt->execute();
    return $stmt->get_result();
}

//Metodo che modifica i caseifici in base al caseificio dell'utente
function modifycaseifici($conn,Caseifici $caseifici) {
    $stmt = $conn->prepare("UPDATE caseifici SET cas_nome = ?, cas_dex = ?,cas_partita_iva = ? ,cas_indirizzo = ?,cas_cli_id = ? WHERE cas_code= ?");
    $stmt->bind_param("issssi",$caseifici->code,$caseifici->nome, $caseifici->dex, $caseifici->partita_iva, $caseifici->indirizzo, $caseifici->cli_id);
    $stmt->execute();
    return $stmt->get_result();
    }

    function getDatiGiornalieri($conn, $codeCaseificio) {
        //Query per selezionare tutti i dati giornalieri relativi al caseificio specificato e alle forme acquistate/vendute durante la giornata
        $query = "SELECT * FROM dati_giornalieri
                  WHERE dat_data IN (
                      SELECT DISTINCT dat_data 
                      FROM dati_giornalieri 
                      WHERE dat_id IN (
                          SELECT for_dat_id 
                          FROM forme 
                          WHERE for_dat_id IN (
                              SELECT dat_id FROM dati_giornalieri 
                              WHERE dat_cas_code = ?
                          )
                      )
                  )
                  AND dat_cas_code = ?";
    
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ii", $codeCaseificio, $codeCaseificio);
        $stmt->execute();
        return $stmt->get_result();
    }
    function getDatoGiornaliero($conn, $codeCaseificio,$data) {
        //Query per selezionare tutti i dati giornalieri relativi al caseificio specificato e alle forme acquistate/vendute durante la giornata
        $query = "SELECT * FROM dati_giornalieri
                  WHERE dat_cas_code = ?
                  AND dat_data=?";
    
        $stmt = $conn->prepare($query);
        $stmt->bind_param("ii", $codeCaseificio, $data);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function eliminaCaseifici($conn, Caseifici $c) {
        $stmt = $conn->prepare("DELETE FROM caseifici WHERE cas_code = ?");
        $stmt->bind_param("i", $c->code);
        $stmt->execute();
        return $stmt->get_result();
    }

    function createImmagini($conn, Immagini $immagini) {
        $stmt = $conn->prepare("INSERT INTO immagini (imm_url, imm_cas_id) VALUES (?, ?)");
        $stmt->bind_param("si", $immagini->url, $immagini->cas_id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function modifyImmagini($conn, Immagini $immagini) {
        $stmt = $conn->prepare("UPDATE immagini SET imm_url = ?, imm_cas_id = ? WHERE imm_id = ?");
        $stmt->bind_param("sii", $immagini->url, $immagini->cas_id, $immagini->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function deleteImmagini($conn, Immagini $immagini) {
        $stmt = $conn->prepare("DELETE FROM immagini WHERE imm_id = ?");
        $stmt->bind_param("i", $immagini->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function createTipoForma($conn, TipoForma $tipoForma) {
        $stmt = $conn->prepare("INSERT INTO tipo_forma (tip_nome, tip_imm_id) VALUES (?, ?)");
        $stmt->bind_param("si", $tipoForma->nome, $tipoForma->imm_id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function modifyTipoForma($conn, TipoForma $tipoForma) {
        $stmt = $conn->prepare("UPDATE tipo_forma SET tip_nome = ?, tip_imm_id = ? WHERE tip_id = ?");
        $stmt->bind_param("sii", $tipoForma->nome, $tipoForma->imm_id, $tipoForma->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function deleteTipoForma($conn, TipoForma $tipoForma) {
        $stmt = $conn->prepare("DELETE FROM tipo_forma WHERE tip_id = ?");
        $stmt->bind_param("i", $tipoForma->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function createStagionature($conn, Stagionature $stagionature) {
        $stmt = $conn->prepare("INSERT INTO stagionature (sta_id, sta_num, sta_prezzo_prima, sta_prezzo_seconda) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("siff", $stagionature->id, $stagionature->num, $stagionature->prezzo_prima, $stagionature->prezzo_seconda);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function modifyStagionature($conn, Stagionature $stagionature) {
        $stmt = $conn->prepare("UPDATE stagionature SET sta_num = ?, sta_prezzo_prima = ?, sta_prezzo_seconda = ? WHERE sta_id = ?");
        $stmt->bind_param("iffs", $stagionature->num, $stagionature->prezzo_prima, $stagionature->prezzo_seconda, $stagionature->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function deleteStagionature($conn, Stagionature $stagionature) {
        $stmt = $conn->prepare("DELETE FROM stagionature WHERE sta_id = ?");
        $stmt->bind_param("s", $stagionature->id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function createForme($conn, Forme $forme) {
        $stmt = $conn->prepare("INSERT INTO forme (for_id, for_data, for_num_forma, for_nome, for_peso, for_scelta, for_stag_eff, for_venduta, for_data_acquisto, for_dat_id, for_prezzo_reale, for_tip_id, for_sta_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssisssisiiisi", $forme->for_id, $forme->for_data, $forme->for_num_forma, $forme->for_nome, $forme->for_peso, $forme->for_scelta, $forme->for_stag_eff, $forme->for_venduta, $forme->for_data_acquisto, $forme->for_dat_id, $forme->for_prezzo_reale, $forme->for_tip_id, $forme->for_sta_id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function modifyForme($conn, Forme $forme) {
        $stmt = $conn->prepare("UPDATE forme SET for_data = ?, for_num_forma = ?, for_nome = ?, for_peso = ?, for_scelta = ?, for_stag_eff = ?, for_venduta = ?, for_data_acquisto = ?, for_dat_id = ?, for_prezzo_reale = ?, for_tip_id = ?, for_sta_id = ? WHERE for_id = ?");
        $stmt->bind_param("sisssisiiisis", $forme->for_data, $forme->for_num_forma, $forme->for_nome, $forme->for_peso, $forme->for_scelta, $forme->for_stag_eff, $forme->for_venduta, $forme->for_data_acquisto, $forme->for_dat_id, $forme->for_prezzo_reale, $forme->for_tip_id, $forme->for_sta_id, $forme->for_id);
        $stmt->execute();
        return $stmt->get_result();
    }
    
    function deleteForme($conn, Forme $forme) {
        $stmt = $conn->prepare("DELETE FROM forme WHERE for_id = ?");
        $stmt->bind_param("s", $forme->for_id);
        $stmt->execute();
        return $stmt->get_result();
    }
?>
