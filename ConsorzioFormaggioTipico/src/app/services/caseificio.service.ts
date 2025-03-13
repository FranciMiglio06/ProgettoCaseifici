import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Caseificio } from '../models/caseificio.model';

@Injectable({
  providedIn: 'root'
})
export class CaseificioService {
  private apiUrl = 'http://localhost/progetto_caseifici/api.php'; // URL API

  constructor(private http: HttpClient) {}

  // 🔹 Ottieni tutti i caseifici
  getCaseifici(): Observable<Caseificio[]> {
    return this.http.get<Caseificio[]>(this.apiUrl);
  }

  // 🔹 Ottieni un caseificio per ID
  getCaseificioById(id: number): Observable<Caseificio> {
    return this.http.get<Caseificio>(`${this.apiUrl}?id=${id}`);
  }
}
