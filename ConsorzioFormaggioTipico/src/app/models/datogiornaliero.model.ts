export interface DatoGiornaliero {
  dat_id: number;
  dat_latte_lav: number;
  dat_latte_formaggio: number;
  dat_data: string;  // Formato "YYYY-MM-DD"
  dat_num_forme_prod: number;
  dat_num_forme_vendute: number;
  dat_cas_code: number;  // ID del caseificio
}
