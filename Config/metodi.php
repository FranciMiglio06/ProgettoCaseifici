<?php
session_start();

include 'classi.php';

function caseifici($conn)
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
    $stmt = $conn->prepare("INSERT INTO clienti (cli_id, username, password, nome, cognome, indirizzo, email, num_tel, partita_iva) 
                            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
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
        if (password_verify($password, $user['cli_Password'])) {
            session_start();
            $_SESSION['logged_in'] = true;
            $_SESSION['user_data'] = $cliente;
            //Se la password è giusta reindirizza alla pagina principale
            
            exit();
        }
    }
    //Se la password è errata reindirizza alla pagina di login
    exit();
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
function compra($cliente, $tipo_forma, $forme, $tipologie)
{
    //metodo che crea un acquisto 
    $acquisto = new Acquisti($cliente, $tipo_forma, $forme, $tipologie);
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


