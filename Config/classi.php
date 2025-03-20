<?php
class Cliente
{
    public $username;
    public $password;
    public $nome;
    public $cognome;
    public $indirizzo;
    public $email;
    public $num_tel;
    public $partita_iva;
    public function __construct($username, $password, $nome, $cognome, $indirizzo, $email, $num_tel, $partita_iva)
    {
        $this->username = $username;
        $this->password = $password;
        $this->nome = $nome;
        $this->cognome = $cognome;
        $this->indirizzo = $indirizzo;
        $this->email = $email;
        $this->num_tel = $num_tel;
        $this->partita_iva = $partita_iva;
    }
    
}
class Caseifici
{
    public $code;
    public $nome;
    public $dex;
    public $partita_iva;
    public $indirizzo;
    public $cli_id;
}

class Acquisti
{
    public $acq_id;
    public $acq_cli_id;
    public $acq_for_id;
    public $acq_tip_id;
    public function __construct($cliente, $forme, $tipologie)
    {
        $this->acq_cli_id = $cliente;
        $this->acq_tip_id = $tipologie;
        $this->acq_for_id = $forme;
    }
}
class forme
{
    public $for_id;
    public $for_data;
    public $for_num_forma;
    public $for_nome;
    public $for_peso;
    public $for_scelta;
    public $for_stag_eff;
    public $for_venduta;
    public $for_data_acquisto;
    public $for_dat_id;
    public $for_prezzo_reale;
    public $for_tip_id;
    public $for_sta_id;
}
class DatiGiornalieri
{
    public $id;
    public $latte_lavorato;
    public $latte_formaggio;
    public $data;
    public $num_forme_prod;
    public $num_forme_vendute;
    public $caseificio_id;
}
class Immagini
{
    public $id;
    public $url;
    public $cas_id;
}
class Stagionature
{
    public $id;
    public $num;
    public $prezzo_prima;
    public $prezzo_seconda;
}

class TipoForma
{
    public $id;
    public $nome;
    public $descrizione;
    public $imm_id;
}
?>