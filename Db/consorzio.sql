-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mar 15, 2025 alle 22:05
-- Versione del server: 10.4.32-MariaDB
-- Versione PHP: 8.2.12

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

--
-- Dump dei dati per la tabella `acquisti`
--

INSERT INTO `acquisti` (`acq_id`, `acq_cli_id`, `acq_for_id`, `acq_tip_id`) VALUES
(1, 3, 'PR10101', 1),
(2, 4, 'GP10201', 2),
(3, 5, 'PE10301', 1),
(4, 1, 'CA10401', 2),
(5, 2, 'PE10302', 3);

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

--
-- Dump dei dati per la tabella `caseifici`
--

INSERT INTO `caseifici` (`cas_code`, `cas_nome`, `cas_dex`, `cas_partita_iva`, `cas_indirizzo`, `cas_cli_id`) VALUES
(101, 'Caseificio Montagna d\'Oro', 'Caseificio tradizionale specializzato nella produzione di Parmigiano Reggiano di montagna. Utilizziamo solo latte di vacche alimentate con foraggi locali.', '12345678901', 'Via dei Monti 45, Pavullo nel Frignano', 1),
(102, 'Latteria San Giorgio', 'Antica latteria a conduzione familiare attiva dal 1950. Produciamo formaggi seguendo ricette tramandate da generazioni.', '23456789012', 'Via Emilia 75, Reggio Emilia', 2),
(103, 'Caseificio Valle Verde', 'Caseificio biologico immerso nelle colline parmensi. I nostri formaggi sono prodotti esclusivamente con latte da agricoltura biologica.', '34567890123', 'Strada delle Colline 23, Parma', 3),
(104, 'Latteria Ducale', 'Caseificio storico con forte legame col territorio. Specializzati in formaggi stagionati di alta qualità.', '45678901234', 'Via del Castello 12, Modena', 4),
(105, 'Caseificio Il Casaro', 'Piccolo caseificio artigianale specializzato in formaggi freschi e a pasta filata. Produzione limitata ma di altissima qualità.', '56789012345', 'Via dei Prati 8, Bologna', 5);

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

--
-- Dump dei dati per la tabella `clienti`
--

INSERT INTO `clienti` (`cli_id`, `cli_username`, `cli_password`, `cli_nome`, `cli_cognome`, `cli_indirizzo`, `cli_email`, `cli_num_tel`, `cli_partita_iva`) VALUES
(1, 'mario_rossi', '8e0e5bc49abf8f71f32907b67a3bea2628d6bd6d4f74c92c0979f0a4a6750a36', 'Mario', 'Rossi', 'Via Roma 123, Milano', 'mario.rossi@email.it', '3331234567', '12345678901'),
(2, 'giulia_bianchi', 'ec6d54365d1218385acd1332405e0a656a8b12deb77b833ecea59b56dedffce0', 'Giulia', 'Bianchi', 'Corso Italia 45, Bologna', 'giulia.bianchi@email.it', '3339876543', '23456789012'),
(3, 'luca_verdi', 'ccaabc00bcef7431478dfe742a9fae2d6aceb17646e498e840aea63df686f888', 'Luca', 'Verdi', 'Piazza Garibaldi 7, Parma', 'luca.verdi@email.it', '3457891234', '34567890123'),
(4, 'sofia_neri', '46c28147adebe43af8b3ee72a7ece1d75aa4a08d98bd80c204af0cb14f8d447e', 'Sofia', 'Neri', 'Via Dante 89, Reggio Emilia', 'sofia.neri@email.it', '3478912345', '45678901234'),
(5, 'marco_gialli', 'ccfcf1f5b39b01eaf31006c004fea479d65e828b4f7b0ce11a63cc161ae1f0e2', 'Marco', 'Gialli', 'Viale Europa 56, Modena', 'marco.gialli@email.it', '3667891234', '56789012345');

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

--
-- Dump dei dati per la tabella `dati_giornalieri`
--

INSERT INTO `dati_giornalieri` (`dat_id`, `dat_latte_lav`, `dat_latte_formaggio`, `dat_data`, `dat_num_forme_prod`, `dat_num_forme_vendute`, `dat_cas_code`) VALUES
(1, 1200.5, 1000, '2025-01-05 00:00:00', 20, 15, 101),
(2, 1500, 1300.5, '2025-01-05 00:00:00', 25, 18, 102),
(3, 980.5, 850, '2025-01-05 00:00:00', 17, 12, 103),
(4, 1350, 1200, '2025-01-05 00:00:00', 24, 20, 104),
(5, 750.5, 650, '2025-01-05 00:00:00', 13, 10, 105),
(6, 1250, 1100, '2025-01-06 00:00:00', 22, 16, 101),
(7, 1450.5, 1290, '2025-01-06 00:00:00', 26, 19, 102),
(8, 930, 800.5, '2025-01-06 00:00:00', 16, 11, 103),
(9, 1380.5, 1240, '2025-01-06 00:00:00', 25, 21, 104),
(10, 780, 680.5, '2025-01-06 00:00:00', 14, 11, 105);

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

--
-- Dump dei dati per la tabella `forme`
--

INSERT INTO `forme` (`for_id`, `for_data`, `for_num_forma`, `for_nome`, `for_peso`, `for_scelta`, `for_stag_eff`, `for_venduta`, `for_data_acquisto`, `for_dat_id`, `for_prezzo_reale`, `for_tip_id`, `for_sta_id`) VALUES
('CA10401', '2025-01-05', 1, 'Caciotta Ducale', 2.8, 'prima', 3, 1, '2025-01-10 09:20:00', 4, 17, 4, 'STG12'),
('FF10501', '2025-01-05', 1, 'Formaggio di Fossa Il Casaro', 3.2, 'prima', 6, 0, NULL, 5, 28, 5, 'STG12'),
('GP10201', '2025-01-05', 1, 'Grana Padano San Giorgio', 37.8, 'prima', 12, 1, '2025-01-25 15:45:00', 2, 19, 2, 'STG12'),
('GP10202', '2025-01-05', 2, 'Grana Padano San Giorgio', 38.1, 'seconda', 12, 0, NULL, 2, 15, 2, 'STG12'),
('GP10203', '2025-01-06', 3, 'Grana Padano San Giorgio', 37.5, 'prima', 12, 0, NULL, 7, 19, 2, 'STG12'),
('PE10301', '2025-01-05', 1, 'Pecorino Valle Verde Bio', 12.5, 'prima', 12, 1, '2025-01-20 11:15:00', 3, 19.5, 3, 'STG12'),
('PE10302', '2025-01-06', 2, 'Pecorino Valle Verde Bio', 13, 'seconda', 12, 1, '2025-01-25 14:30:00', 8, 15.5, 3, 'STG12'),
('PR10101', '2025-01-05', 1, 'Parmigiano Reggiano Montagna d\'Oro', 38.5, 'prima', 24, 1, '2025-02-05 10:30:00', 1, 22.5, 1, 'STG24'),
('PR10102', '2025-01-05', 2, 'Parmigiano Reggiano Montagna d\'Oro', 39.2, 'prima', 24, 0, NULL, 1, 22.5, 1, 'STG24'),
('PR10103', '2025-01-06', 3, 'Parmigiano Reggiano Montagna d\'Oro', 38.7, 'prima', 24, 0, NULL, 6, 22.5, 1, 'STG24');

-- --------------------------------------------------------

--
-- Struttura della tabella `immagini`
--

CREATE TABLE `immagini` (
  `imm_id` int(11) NOT NULL,
  `imm_url` varchar(2048) NOT NULL,
  `imm_cas_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Dump dei dati per la tabella `immagini`
--

INSERT INTO `immagini` (`imm_id`, `imm_url`, `imm_cas_id`) VALUES
(1, 'https://example.com/images/caseificio101_1.jpg', 101),
(2, 'https://example.com/images/caseificio101_2.jpg', 101),
(3, 'https://example.com/images/caseificio102_1.jpg', 102),
(4, 'https://example.com/images/caseificio103_1.jpg', 103),
(5, 'https://example.com/images/caseificio104_1.jpg', 104),
(6, 'https://example.com/images/caseificio105_1.jpg', 105),
(7, 'https://example.com/images/parmigiano.jpg', NULL),
(8, 'https://example.com/images/grana.jpg', NULL),
(9, 'https://example.com/images/pecorino.jpg', NULL),
(10, 'https://example.com/images/caciotta.jpg', NULL);

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

--
-- Dump dei dati per la tabella `stagionature`
--

INSERT INTO `stagionature` (`sta_id`, `sta_num`, `sta_prezzo_prima`, `sta_prezzo_seconda`) VALUES
('STG12', 12, 18.5, 14.75),
('STG24', 24, 22, 17.5),
('STG36', 36, 26.5, 21),
('STG48', 48, 32, 25.5),
('STG60', 60, 38.5, 30);

-- --------------------------------------------------------

--
-- Struttura della tabella `tipologie`
--

CREATE TABLE `tipologie` (
  `tip_id` int(11) NOT NULL,
  `tip_dex` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dump dei dati per la tabella `tipologie`
--

INSERT INTO `tipologie` (`tip_id`, `tip_dex`) VALUES
(1, 'Vendita Diretta'),
(2, 'Vendita Online'),
(3, 'Esportazione'),
(4, 'Ingrosso'),
(5, 'Fiere e Eventi');

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
-- Dump dei dati per la tabella `tipo_forma`
--

INSERT INTO `tipo_forma` (`tip_id`, `tip_nome`, `tip_imm_id`) VALUES
(1, 'Parmigiano Reggiano', 7),
(2, 'Grana Padano', 8),
(3, 'Pecorino', 9),
(4, 'Caciotta', 10),
(5, 'Formaggio di Fossa', NULL);

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
  MODIFY `acq_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `clienti`
--
ALTER TABLE `clienti`
  MODIFY `cli_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `dati_giornalieri`
--
ALTER TABLE `dati_giornalieri`
  MODIFY `dat_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `immagini`
--
ALTER TABLE `immagini`
  MODIFY `imm_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT per la tabella `tipologie`
--
ALTER TABLE `tipologie`
  MODIFY `tip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT per la tabella `tipo_forma`
--
ALTER TABLE `tipo_forma`
  MODIFY `tip_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
