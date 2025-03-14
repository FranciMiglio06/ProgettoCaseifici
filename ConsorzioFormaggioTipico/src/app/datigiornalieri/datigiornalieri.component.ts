import { Component, OnInit } from '@angular/core';
import { DatoGiornaliero } from '../models/datogiornaliero.model';
import { DatoGiornalieroService } from '../services/datogiornaliero.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datigiornalieri',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './datigiornalieri.component.html',
  styleUrl: './datigiornalieri.component.scss'
})
export class DatigiornalieriComponent implements OnInit {
  datiGiornalieri: DatoGiornaliero[] = [];

  constructor(private datiService: DatoGiornalieroService) {}

  ngOnInit(): void {
    this.loadData();
  }

  // 🔹 Carica tutti i dati giornalieri
  loadData(): void {
    this.datiService.getAll().subscribe(data => {
      this.datiGiornalieri = data;
    });
  }

  // 🔹 Aggiungi nuovo dato (puoi aprire un form o navigare a una nuova pagina)
  aggiungiDati(): void {
    console.log('Aggiungi nuovo dato');
    // Naviga a una pagina di aggiunta oppure mostra un popup per inserire i dati
  }
}
