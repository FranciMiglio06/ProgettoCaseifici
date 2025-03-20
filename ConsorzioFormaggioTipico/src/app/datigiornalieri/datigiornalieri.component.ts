import { Component, inject, OnInit, signal } from '@angular/core';
import { DatoGiornaliero } from '../models/datogiornaliero.model';
import { DatoGiornalieroService } from '../services/datogiornaliero.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-datigiornalieri',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  providers: [DatoGiornalieroService],
  templateUrl: './datigiornalieri.component.html',
  styleUrls: ['./datigiornalieri.component.scss']
})
export class DatigiornalieriComponent implements OnInit {
  datiGiornalieri = signal<DatoGiornaliero[]>([]); // Dati giornalieri
  gennaioDates: string[] = []; // Date di gennaio

  constructor(private datiService: DatoGiornalieroService,private router: Router) {}

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Ottieni l'ID dal parametro della rotta

      if (id) {
        this.loadData(id); // Carica i dati per l'ID
      }
    });

    this.generareDateGennaio(); // Inizializza tutte le date di gennaio
  }

  // 🔹 Carica tutti i dati giornalieri
  loadData(id: any): void {
    this.datiService.getAll(id).subscribe(data => {
      this.datiGiornalieri.set(data); // Imposta i dati giornalieri
    });
  }

  // 🔹 Genera tutte le date di gennaio
  generareDateGennaio(): void {
    const gennaioStart = new Date(2025, 0, 1); // Inizio gennaio
    const gennaioEnd = new Date(2025, 0, 31); // Fine gennaio
    const dateArray = [];

    // Ciclo per generare ogni giorno di gennaio
    for (let date = gennaioStart; date <= gennaioEnd; date.setDate(date.getDate() + 1)) {
      const newDate = new Date(date);
      const dateString = newDate.toISOString().split('T')[0]; // Converte la data in formato "yyyy-MM-dd"
      dateArray.push(dateString);
    }

    this.gennaioDates = dateArray; // Assegna l'array delle date di gennaio
  }

  // 🔹 Verifica se ci sono dati per una data (come stringa)
  hasDatiPerData(data: string): boolean {
    return !!this.getDatiPerData(data); // Restituisce true se esistono dati per quella data
  }

  // 🔹 Ottieni i dati per una data (come stringa)
  getDatiPerData(data: string): DatoGiornaliero | undefined {
    return this.datiGiornalieri().find(dato => {
      // Estrai la data (yyyy-MM-dd) da 'dat_data' e confrontala con la data passata
      const datoData = dato.dat_data.split(' ')[0]; // Ottieni la parte della data (yyyy-MM-dd)
      return datoData === data; // Confronta solo la data senza l'orario
    });
  }

  aggiungiDati(): void {
    this.router.navigate(['datoGiornaliero']);
  }
  modificaDati(data: any): void {
    this.router.navigate(['datoGiornaliero',data]);
  }
}
