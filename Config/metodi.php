<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}
include 'classi.php';

function getCaseifici($conn)
{
    $sql = "SELECT * FROM caseifici";
    $risultato = $conn->query($sql);

    $caseifici = [];
    while ($row = $risultato->fetch_assoc()) {
        $caseifici[] = $row;
    }

    return $caseifici;
}
function caseificio($conn, $id)
{
    $sql = "SELECT * FROM caseifici WHERE cas_code = $id";
    $risultato = $conn->query($sql);
    $caseificio = $risultato->fetch_assoc();
    return $caseificio;
}

function isAdmin($codeCaseificio)
{
    //$_SESSION['user_data'] prendi il codice del cliente e lo paragoni al cas id del caseificio
    return null;
}

function createCliente(Cliente $cliente, $conn)
{
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
    $hashedPassword = hash('sha256', $cliente->password);
    $stmt = $conn->prepare("INSERT INTO clienti (cli_id,cli_username, cli_password, cli_nome, cli_cognome, cli_indirizzo, cli_email, cli_num_tel, cli_partita_iva) 
       VALUES (?,?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("issssssss", $newId, $cliente->username, $hashedPassword, $cliente->nome, $cliente->cognome, $cliente->indirizzo, $cliente->email, $cliente->num_tel, $cliente->partita_iva);

    if ($stmt->execute()) {
        return "Cliente creato con successo. ID assegnato: " . $newId;
    } else {
        return "Errore nella creazione del cliente: " . $stmt->error;
    }
}
//metodo per loggare con il cliente
function loginCliente(Cliente $cliente, $conn)
{
    $username = $cliente->username;
    $password = $cliente->password;
    $stmt = $conn->prepare("SELECT * FROM clienti WHERE cli_username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();
    //Se il risultato trova almeno una riga significa che l'username è giusto
    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        //Verifica se la password hashata è giusta
        if (password_verify($password, $user['cli_password'])) {
            session_start();
            $_SESSION['logged_in'] = true;
            $_SESSION['user_data'] = $user;
            //Se la password è giusta reindirizza alla pagina principale
            return [
                "success" => true,
                "message" => "Login riuscito!",
                "user_id" => $user['cli_id'],
                "username" => $user['cli_username']
            ];
        }
    }
    //Se la password è errata reindirizza alla pagina di login
    return  [
        "success" => true,
        "message" => "Login riuscito!"];
}
function getImage($code, $caseifici, $cas_id)
{
    foreach ($caseifici as $key => $value) {
        if ($value == $code) {
            foreach ($cas_id as $image_key => $image_value) {
                if ($image_value == $key) { // Se il valore dell'immagine corrisponde all'id del caseificio
                    return $image_key; // Restituisce la chiave dell'immagine corrispondente
                }
            }
        }
    }
    return null; // Se non c'è corrispondenza, restituisce null
}
function compra($cliente, $forme, $tipologie)
{
    //metodo che crea un acquisto 
    $acquisto = new Acquisti($cliente, $forme, $tipologie);
    //query per aggiornare database
    return $acquisto;
}
function getForma($conn, $idForma)
{
    //metodo che seleziona una forma in base all'id fornito
    $result = "SELECT * 
    FROM forme
    WHERE  for_id = ? "
    ;
    $stmt = $conn->prepare($result);
    $stmt->bind_param("s", $idForma);
    $stmt->execute();
    $res = $stmt->get_result();
    $data = $res->fetch_assoc();

    return $data;
}

// Metodo che seleziona tutte le forme in base al caseificio
function getForme($conn, $codeCaseificio)
{
    $result = "SELECT * FROM forme WHERE for_dat_id IN (
                   SELECT dat_id FROM dati_giornalieri WHERE dat_cas_code = ?
               )";

    $stmt = $conn->prepare($result);
    $stmt->bind_param("i", $codeCaseificio);
    $stmt->execute();
    $res = $stmt->get_result();

    // DEBUG: Stampiamo il risultato per verificare
    $data = $res->fetch_all(MYSQLI_ASSOC);

    return $data;
}


function createCaseifici($conn, Caseifici $caseifici)
{
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
function modifycaseifici($conn, Caseifici $caseifici)
{
    $stmt = $conn->prepare("UPDATE caseifici SET cas_nome = ?, cas_dex = ?,cas_partita_iva = ? ,cas_indirizzo = ?,cas_cli_id = ? WHERE cas_code= ?");
    $stmt->bind_param("issssi", $caseifici->code, $caseifici->nome, $caseifici->dex, $caseifici->partita_iva, $caseifici->indirizzo, $caseifici->cli_id);
    $stmt->execute();
    return $stmt->get_result();
}

function getDatiGiornalieri($conn, $codeCaseificio )
{
    //Query per selezionare tutti i dati giornalieri relativi al caseificio specificato e alle forme acquistate/vendute durante la giornata
    $query = "SELECT * FROM dati_giornalieri
                  WHERE dat_cas_code = ?";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $codeCaseificio);
    $stmt->execute();
    $risultato= $stmt->get_result();
    $datigiornalieri = [];
    while ($row = $risultato->fetch_assoc()) {
        $datigiornalieri[] = $row;
    }

    return $datigiornalieri;
}
function getDatoGiornaliero($conn, $codeCaseificio,$data)
{
    //Query per selezionare tutti i dati giornalieri relativi al caseificio specificato e alle forme acquistate/vendute durante la giornata
    $query = "SELECT * FROM dati_giornalieri
                  WHERE dat_cas_code = ?
                  AND DATE_FORMAT(dat_data, '%Y/%m/%d')=DATE_FORMAT(?, '%Y/%m/%d')";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("is", $codeCaseificio,$data);
    $stmt->execute();
    $risultato=$stmt->get_result();
    $datogiornaliero=$risultato->fetch_assoc();
    return $datogiornaliero;
}

function eliminaCaseifici($conn, Caseifici $c)
{
    $stmt = $conn->prepare("DELETE FROM caseifici WHERE cas_code = ?");
    $stmt->bind_param("i", $c->code);
    $stmt->execute();
    return $stmt->get_result();
}

function createImmagini($conn, Immagini $immagini)
{
    $stmt = $conn->prepare("INSERT INTO immagini (imm_url, imm_cas_id) VALUES (?, ?)");
    $stmt->bind_param("si", $immagini->url, $immagini->cas_id);
    $stmt->execute();
    return $stmt->get_result();
}

function modifyImmagini($conn, Immagini $immagini)
{
    $stmt = $conn->prepare("UPDATE immagini SET imm_url = ?, imm_cas_id = ? WHERE imm_id = ?");
    $stmt->bind_param("sii", $immagini->url, $immagini->cas_id, $immagini->id);
    $stmt->execute();
    return $stmt->get_result();
}

function deleteImmagini($conn, Immagini $immagini)
{
    $stmt = $conn->prepare("DELETE FROM immagini WHERE imm_id = ?");
    $stmt->bind_param("i", $immagini->id);
    $stmt->execute();
    return $stmt->get_result();
}

function createTipoForma($conn, TipoForma $tipoForma)
{
    $stmt = $conn->prepare("INSERT INTO tipo_forma (tip_nome, tip_imm_id) VALUES (?, ?)");
    $stmt->bind_param("si", $tipoForma->nome, $tipoForma->imm_id);
    $stmt->execute();
    return $stmt->get_result();
}

function modifyTipoForma($conn, TipoForma $tipoForma)
{
    $stmt = $conn->prepare("UPDATE tipo_forma SET tip_nome = ?, tip_imm_id = ? WHERE tip_id = ?");
    $stmt->bind_param("sii", $tipoForma->nome, $tipoForma->imm_id, $tipoForma->id);
    $stmt->execute();
    return $stmt->get_result();
}

function deleteTipoForma($conn, TipoForma $tipoForma)
{
    $stmt = $conn->prepare("DELETE FROM tipo_forma WHERE tip_id = ?");
    $stmt->bind_param("i", $tipoForma->id);
    $stmt->execute();
    return $stmt->get_result();
}

function createStagionature($conn, Stagionature $stagionature)
{
    $stmt = $conn->prepare("INSERT INTO stagionature (sta_id, sta_num, sta_prezzo_prima, sta_prezzo_seconda) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("siff", $stagionature->id, $stagionature->num, $stagionature->prezzo_prima, $stagionature->prezzo_seconda);
    $stmt->execute();
    return $stmt->get_result();
}

function modifyStagionature($conn, Stagionature $stagionature)
{
    $stmt = $conn->prepare("UPDATE stagionature SET sta_num = ?, sta_prezzo_prima = ?, sta_prezzo_seconda = ? WHERE sta_id = ?");
    $stmt->bind_param("iffs", $stagionature->num, $stagionature->prezzo_prima, $stagionature->prezzo_seconda, $stagionature->id);
    $stmt->execute();
    return $stmt->get_result();
}

function deleteStagionature($conn, Stagionature $stagionature)
{
    $stmt = $conn->prepare("DELETE FROM stagionature WHERE sta_id = ?");
    $stmt->bind_param("s", $stagionature->id);
    $stmt->execute();
    return $stmt->get_result();
}

function createForme($conn, Forme $forme)
{
    $stmt = $conn->prepare("INSERT INTO forme (for_id, for_data, for_num_forma, for_nome, for_peso, for_scelta, for_stag_eff, for_venduta, for_data_acquisto, for_dat_id, for_prezzo_reale, for_tip_id, for_sta_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssisssisiiisi", $forme->for_id, $forme->for_data, $forme->for_num_forma, $forme->for_nome, $forme->for_peso, $forme->for_scelta, $forme->for_stag_eff, $forme->for_venduta, $forme->for_data_acquisto, $forme->for_dat_id, $forme->for_prezzo_reale, $forme->for_tip_id, $forme->for_sta_id);
    $stmt->execute();
    return $stmt->get_result();
}

function modifyForme($conn, Forme $forme)
{
    $stmt = $conn->prepare("UPDATE forme SET for_data = ?, for_num_forma = ?, for_nome = ?, for_peso = ?, for_scelta = ?, for_stag_eff = ?, for_venduta = ?, for_data_acquisto = ?, for_dat_id = ?, for_prezzo_reale = ?, for_tip_id = ?, for_sta_id = ? WHERE for_id = ?");
    $stmt->bind_param("sisssisiiisis", $forme->for_data, $forme->for_num_forma, $forme->for_nome, $forme->for_peso, $forme->for_scelta, $forme->for_stag_eff, $forme->for_venduta, $forme->for_data_acquisto, $forme->for_dat_id, $forme->for_prezzo_reale, $forme->for_tip_id, $forme->for_sta_id, $forme->for_id);
    $stmt->execute();
    return $stmt->get_result();
}

function deleteForme($conn, Forme $forme)
{
    $stmt = $conn->prepare("DELETE FROM forme WHERE for_id = ?");
    $stmt->bind_param("s", $forme->for_id);
    $stmt->execute();
    return $stmt->get_result();
}
//Crea aggiorna ed elimina tipologia cliente
//metodo compra
