import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl = 'http://localhost:80/api/'; // Modifica con l'URL corretto del tuo backend

  constructor(private http: HttpClient) { }
  login(user: Cliente): Observable<any> {
    return this.http.post(`${this.apiUrl}/login.php`, user);
  }

  // Metodo per la registrazione
  register(user: Cliente): Observable<any> {
    return this.http.post(`${this.apiUrl}/register.php`, user);
  }
  addClient(client: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.apiUrl, client);
  }

  // Aggiorna i dettagli di un cliente
  updateClient(client: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.apiUrl}/${client.cli_id}`, client);
  }

  // Elimina un cliente
  deleteClient(cli_id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cli_id}`);
  }
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Recupera il token da localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Verifica se l'utente è autenticato
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) {
      return false;
    }

    // Opzionale: Verifica che il token non sia scaduto (se vuoi farlo, puoi decodificarlo)
    return true;  // Per semplicità, assumiamo che il token esista se è presente
  }

  // Rimuovi il token (logout)
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Aggiungi il token nelle intestazioni delle richieste HTTP
  getAuthHeaders(): HttpHeaders {
    const token = this.getToken();
    return new HttpHeaders({
      'Authorization': token ? `Bearer ${token}` : ''
    });
  }
}
