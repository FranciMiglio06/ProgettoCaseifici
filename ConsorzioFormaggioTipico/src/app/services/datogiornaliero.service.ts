import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatoGiornaliero } from '../models/datogiornaliero.model';

@Injectable({
  providedIn: 'root',
})
export class DatoGiornalieroService {
  private apiUrl = 'http://localhost:80/api/';  // Modifica con il tuo endpoint

  constructor(private http: HttpClient) {}

  // 🔹 Recupera tutti i dati giornalieri
  getAll(id: any): Observable<DatoGiornaliero[]> {
    return this.http.get<DatoGiornaliero[]>(`${this.apiUrl}datigiornalieri.php?idCaseificio=${id}`);
  }

  // 🔹 Recupera un dato giornaliero per ID
  getByData(id: any,data:any): Observable<DatoGiornaliero[]> {
    return this.http.get<DatoGiornaliero[]>(`${this.apiUrl}datigiornalieri.php?idCaseificio=${id}`);
  }

  // 🔹 Crea un nuovo dato giornaliero
  create(data: DatoGiornaliero): Observable<any> {
    return this.http.post(`${this.apiUrl}modifydatogiornaliero.php`, data);
  }
  modify(data: DatoGiornaliero): Observable<any> {
    return this.http.post(`${this.apiUrl}createdatogiornaliero.php`, data);
  }
}
