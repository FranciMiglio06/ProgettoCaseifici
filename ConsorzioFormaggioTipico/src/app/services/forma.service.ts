import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Forma } from '../models/forma.model'; // Assicurati che il percorso sia corretto

@Injectable({
  providedIn: 'root'
})
export class FormaService {
  private apiUrl = 'http://localhost/path/to/api'; // Cambia con il percorso corretto

  private http = inject(HttpClient);

  constructor() {}

  // Ottenere tutte le forme
  getForme() : Observable<Forma[]> {
    return this.http.get<Forma[]>(this.apiUrl);
  }

  // Ottenere una forma specifica per ID
  getFormaById(id: number): Observable<Forma> {
    return this.http.get<Forma>(`${this.apiUrl}/forma.php?id=${id}`);
  }
  getFormeByCaseificioId(caseificioId: number): Observable<Forma[]> {
    return this.http.get<Forma[]>(`${this.apiUrl}/forme.php?id=${caseificioId}`);
  }
}
