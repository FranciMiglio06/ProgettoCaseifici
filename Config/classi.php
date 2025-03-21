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
class Caseifici {
    public $code;
    public $nome;
    public $dex;
    public $partita_iva;
    public $indirizzo;
    public $cli_id;

    public function __construct($code, $nome, $dex, $partita_iva, $indirizzo, $cli_id) {
        $this->code = $code;
        $this->nome = $nome;
        $this->dex = $dex;
        $this->partita_iva = $partita_iva;
        $this->indirizzo = $indirizzo;
        $this->cli_id = $cli_id;
    }
}

class Forme {
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

    public function __construct($for_id, $for_data, $for_num_forma, $for_nome, $for_peso, $for_scelta, $for_stag_eff, $for_venduta, $for_data_acquisto, $for_dat_id, $for_prezzo_reale, $for_tip_id, $for_sta_id) {
        $this->for_id = $for_id;
        $this->for_data = $for_data;
        $this->for_num_forma = $for_num_forma;
        $this->for_nome = $for_nome;
        $this->for_peso = $for_peso;
        $this->for_scelta = $for_scelta;
        $this->for_stag_eff = $for_stag_eff;
        $this->for_venduta = $for_venduta;
        $this->for_data_acquisto = $for_data_acquisto;
        $this->for_dat_id = $for_dat_id;
        $this->for_prezzo_reale = $for_prezzo_reale;
        $this->for_tip_id = $for_tip_id;
        $this->for_sta_id = $for_sta_id;
    }
}

class DatiGiornalieri {
    public $id;
    public $latte_lavorato;
    public $latte_formaggio;
    public $data;
    public $num_forme_prod;
    public $num_forme_vendute;
    public $caseificio_id;

    public function __construct($id, $latte_lavorato, $latte_formaggio, $data, $num_forme_prod, $num_forme_vendute, $caseificio_id) {
        $this->id = $id;
        $this->latte_lavorato = $latte_lavorato;
        $this->latte_formaggio = $latte_formaggio;
        $this->data = $data;
        $this->num_forme_prod = $num_forme_prod;
        $this->num_forme_vendute = $num_forme_vendute;
        $this->caseificio_id = $caseificio_id;
    }
}

class Immagini {
    public $id;
    public $url;
    public $cas_id;

    public function __construct($id, $url, $cas_id) {
        $this->id = $id;
        $this->url = $url;
        $this->cas_id = $cas_id;
    }
}

class Stagionature {
    public $id;
    public $num;
    public $prezzo_prima;
    public $prezzo_seconda;

    public function __construct($id, $num, $prezzo_prima, $prezzo_seconda) {
        $this->id = $id;
        $this->num = $num;
        $this->prezzo_prima = $prezzo_prima;
        $this->prezzo_seconda = $prezzo_seconda;
    }
}

class TipoForma {
    public $id;
    public $nome;
    public $descrizione;
    public $imm_id;

    public function __construct($id, $nome, $descrizione, $imm_id) {
        $this->id = $id;
        $this->nome = $nome;
        $this->descrizione = $descrizione;
        $this->imm_id = $imm_id;
    }
}
class TipoUtente {
    public $tip_id;
    public $tip_dex;

    public function __construct($tip_id, $tip_dex) {
        $this->tip_id = $tip_id;
        $this->tip_dex = $tip_dex;
    }
}
?>