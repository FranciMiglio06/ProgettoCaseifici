import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatoGiornaliero } from '../models/datogiornaliero.model';

@Injectable({
  providedIn: 'root',
})
export class DatoGiornalieroService {
  private apiUrl = 'http://localhost:80/api/datogiornaliero.php';  // Modifica con il tuo endpoint

  constructor(private http: HttpClient) {}

  // 🔹 Recupera tutti i dati giornalieri
  getAll(): Observable<DatoGiornaliero[]> {
    return this.http.get<DatoGiornaliero[]>(this.apiUrl);
  }

  // 🔹 Recupera un dato giornaliero per ID
  getById(id: number): Observable<DatoGiornaliero> {
    return this.http.get<DatoGiornaliero>(`${this.apiUrl}?id=${id}`);
  }

  // 🔹 Crea un nuovo dato giornaliero
  create(data: DatoGiornaliero): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
