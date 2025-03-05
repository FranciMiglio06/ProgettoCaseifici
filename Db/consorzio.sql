-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 05, 2025 alle 11:02
-- Versione del server: 10.4.27-MariaDB
-- Versione PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `consorzio`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `acquisti`
--

CREATE TABLE `acquisti` (
  `acq_id` int(11) NOT NULL,
  `acq_cli_id` int(11) DEFAULT NULL,
  `acq_for_id` varchar(7) DEFAULT NULL,
  `acq_tip_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `caseifici`
--

CREATE TABLE `caseifici` (
  `cas_code` int(11) NOT NULL,
  `cas_nome` varchar(250) NOT NULL,
  `cas_dex` varchar(2000) NOT NULL,
  `cas_partita_iva` varchar(11) NOT NULL,
  `cas_indirizzo` varchar(50) NOT NULL,
  `cas_cli_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `clienti`
--

CREATE TABLE `clienti` (
  `cli_id` int(11) NOT NULL,
  `cli_username` varchar(20) NOT NULL,
  `cli_password` varchar(64) NOT NULL,
  `cli_nome` varchar(20) NOT NULL,
  `cli_cognome` varchar(20) NOT NULL,
  `cli_indirizzo` varchar(50) NOT NULL,
  `cli_email` varchar(40) NOT NULL,
  `cli_num_tel` varchar(10) NOT NULL,
  `cli_partita_iva` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `dati_giornalieri`
--

CREATE TABLE `dati_giornalieri` (
  `dat_id` int(11) NOT NULL,
  `dat_latte_lav` float NOT NULL,
  `dat_latte_formaggio` float NOT NULL,
  `dat_data` datetime NOT NULL,
  `dat_num_forme_prod` int(11) NOT NULL,
  `dat_num_forme_vendute` int(11) NOT NULL,
  `dat_cas_code` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `forme`
--

CREATE TABLE `forme` (
  `for_id` varchar(7) NOT NULL,
  `for_data` date NOT NULL,
  `for_num_forma` int(11) NOT NULL,
  `for_nome` varchar(100) NOT NULL,
  `for_peso` float NOT NULL,
  `for_scelta` enum('prima','seconda') NOT NULL,
  `for_stag_eff` int(11) NOT NULL,
  `for_venduta` tinyint(1) DEFAULT 0,
  `for_data_acquisto` datetime DEFAULT NULL,
  `for_dat_id` int(11) DEFAULT NULL,
  `for_prezzo_reale` float NOT NULL,
  `for_tip_id` int(11) NOT NULL,
  `for_sta_id` varchar(7) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `immagini`
--

CREATE TABLE `immagini` (
  `imm_id` int(11) NOT NULL,
  `imm_url` varchar(2048) NOT NULL,
  `imm_cas_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `stagionature`
--

CREATE TABLE `stagionature` (
  `sta_id` varchar(7) NOT NULL,
  `sta_num` int(11) NOT NULL,
  `sta_prezzo_prima` float NOT NULL,
  `sta_prezzo_seconda` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tipologie`
--

CREATE TABLE `tipologie` (
  `tip_id` int(11) NOT NULL,
  `tip_dex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Struttura della tabella `tipo_forma`
--

CREATE TABLE `tipo_forma` (
  `tip_id` int(11) NOT NULL,
  `tip_nome` varchar(50) NOT NULL,
  `tip_imm_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `acquisti`
--
ALTER TABLE `acquisti`
  ADD PRIMARY KEY (`acq_id`),
  ADD KEY `com_cli_id` (`acq_cli_id`),
  ADD KEY `com_for_id` (`acq_for_id`),
  ADD KEY `com_tip_id` (`acq_tip_id`);

--
-- Indici per le tabelle `caseifici`
--
ALTER TABLE `caseifici`
  ADD PRIMARY KEY (`cas_code`),
  ADD KEY `cas_cli_id` (`cas_cli_id`);

--
-- Indici per le tabelle `clienti`
--
ALTER TABLE `clienti`
  ADD PRIMARY KEY (`cli_id`);

--
-- Indici per le tabelle `dati_giornalieri`
--
ALTER TABLE `dati_giornalieri`
  ADD PRIMARY KEY (`dat_id`),
  ADD KEY `dat_cas_code` (`dat_cas_code`);

--
-- Indici per le tabelle `forme`
--
ALTER TABLE `forme`
  ADD PRIMARY KEY (`for_id`),
  ADD KEY `for_dat_id` (`for_dat_id`),
  ADD KEY `for_tip_id` (`for_tip_id`),
  ADD KEY `for_sta_id` (`for_sta_id`);

--
-- Indici per le tabelle `immagini`
--
ALTER TABLE `immagini`
  ADD PRIMARY KEY (`imm_id`),
  ADD KEY `imm_cas_id` (`imm_cas_id`);

--
-- Indici per le tabelle `stagionature`
--
ALTER TABLE `stagionature`
  ADD PRIMARY KEY (`sta_id`);

--
-- Indici per le tabelle `tipologie`
--
ALTER TABLE `tipologie`
  ADD PRIMARY KEY (`tip_id`);

--
-- Indici per le tabelle `tipo_forma`
--
ALTER TABLE `tipo_forma`
  ADD PRIMARY KEY (`tip_id`),
  ADD KEY `tip_imm_id` (`tip_imm_id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `acquisti`
--
ALTER TABLE `acquisti`
  MODIFY `acq_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `clienti`
--
ALTER TABLE `clienti`
  MODIFY `cli_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `dati_giornalieri`
--
ALTER TABLE `dati_giornalieri`
  MODIFY `dat_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `immagini`
--
ALTER TABLE `immagini`
  MODIFY `imm_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tipologie`
--
ALTER TABLE `tipologie`
  MODIFY `tip_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT per la tabella `tipo_forma`
--
ALTER TABLE `tipo_forma`
  MODIFY `tip_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `acquisti`
--
ALTER TABLE `acquisti`
  ADD CONSTRAINT `acquisti_ibfk_1` FOREIGN KEY (`acq_cli_id`) REFERENCES `clienti` (`cli_id`),
  ADD CONSTRAINT `acquisti_ibfk_2` FOREIGN KEY (`acq_for_id`) REFERENCES `forme` (`for_id`),
  ADD CONSTRAINT `acquisti_ibfk_3` FOREIGN KEY (`acq_tip_id`) REFERENCES `tipologie` (`tip_id`);

--
-- Limiti per la tabella `caseifici`
--
ALTER TABLE `caseifici`
  ADD CONSTRAINT `caseifici_ibfk_1` FOREIGN KEY (`cas_cli_id`) REFERENCES `clienti` (`cli_id`);

--
-- Limiti per la tabella `dati_giornalieri`
--
ALTER TABLE `dati_giornalieri`
  ADD CONSTRAINT `dati_giornalieri_ibfk_1` FOREIGN KEY (`dat_cas_code`) REFERENCES `caseifici` (`cas_code`);

--
-- Limiti per la tabella `forme`
--
ALTER TABLE `forme`
  ADD CONSTRAINT `forme_ibfk_1` FOREIGN KEY (`for_dat_id`) REFERENCES `dati_giornalieri` (`dat_id`),
  ADD CONSTRAINT `forme_ibfk_2` FOREIGN KEY (`for_tip_id`) REFERENCES `tipo_forma` (`tip_id`),
  ADD CONSTRAINT `forme_ibfk_3` FOREIGN KEY (`for_sta_id`) REFERENCES `stagionature` (`sta_id`);

--
-- Limiti per la tabella `immagini`
--
ALTER TABLE `immagini`
  ADD CONSTRAINT `immagini_ibfk_1` FOREIGN KEY (`imm_cas_id`) REFERENCES `caseifici` (`cas_code`);

--
-- Limiti per la tabella `tipo_forma`
--
ALTER TABLE `tipo_forma`
  ADD CONSTRAINT `tipo_forma_ibfk_1` FOREIGN KEY (`tip_imm_id`) REFERENCES `immagini` (`imm_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
