<?php

$conn = require_once '../connessione.php';

require_once '../metodi.php';

echo json_encode(getForma($conn,$_GET['idForma']));
?>