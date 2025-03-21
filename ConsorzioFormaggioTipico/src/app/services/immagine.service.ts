import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Immagine } from '../models/immagine.model';

@Injectable({
  providedIn: 'root'
})
export class ImmagineService {
private apiUrl = 'http://localhost:80/api'; // Cambia con il percorso corretto

  private http = inject(HttpClient);

  constructor() {}

  creaImmagine(){

  }
  getImmagine(){
    return this.http.get<Immagine[]>(this.apiUrl);
  }
  updateImmagine(){

  }
  deleteImmagine(){

  }
}
