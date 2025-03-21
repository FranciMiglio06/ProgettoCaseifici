import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatoGiornaliero } from '../models/datogiornaliero.model';
import { ActivatedRoute } from '@angular/router';
import { DatoGiornalieroService } from '../services/datogiornaliero.service';

@Component({
  selector: 'dato-giornaliero-editor',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './dato-giornaliero-editor.component.html',
  styleUrl: './dato-giornaliero-editor.component.scss'
})
export class DatoGiornalieroEditorComponent implements OnInit {
  // Variabile per tenere traccia dei dati del DatoGiornaliero
   datoGiornaliero: DatoGiornaliero = {
    dat_id: 0,
    dat_latte_lav: 0,
    dat_latte_formaggio: 0,
    dat_data: '',  // Formato "YYYY-MM-DD"
    dat_num_forme_prod: 0,
    dat_num_forme_vendute: 0,
    dat_cas_code: 0,
  };
  constructor( private datoGiornalieroService:DatoGiornalieroService,private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Ottieni i parametri della rotta
    this.route.queryParams.subscribe(params => {
      const datoParam = params['dato'];
      if (datoParam) {
        // Deserializza i dati passati e aggiorna il modello
        this.datoGiornaliero = JSON.parse(datoParam);
        this.populateForm(this.datoGiornaliero);
      }
    });
  }

  // Funzione per popolare il modulo con i dati ricevuti
  populateForm(dato: DatoGiornaliero): void {
    const latteLav = <HTMLInputElement>document.getElementById('dat-latte-lav');
    const latteFormaggio = <HTMLInputElement>document.getElementById('dat-latte-formaggio');
    const dataInput = <HTMLInputElement>document.getElementById('dat-data');
    const numFormeProd = <HTMLInputElement>document.getElementById('dat-num-forme-prod');
    const numFormeVendute = <HTMLInputElement>document.getElementById('dat-num-forme-vendute');

    if (latteLav) latteLav.value = dato.dat_latte_lav.toString();
    if (latteFormaggio) latteFormaggio.value = dato.dat_latte_formaggio.toString();
    if (dataInput) dataInput.value = dato.dat_data; // Assicurati che 'dat_data' sia una stringa in formato 'yyyy-MM-ddTHH:mm'
    if (numFormeProd) numFormeProd.value = dato.dat_num_forme_prod.toString();
    if (numFormeVendute) numFormeVendute.value = dato.dat_num_forme_vendute.toString();
  }
  ngOnChanges() {
    
  }
  // Funzione per gestire il salvataggio (aggiungi logica di salvataggio, ad esempio, invio al server)
  salvaDato(): void {
    if (this.datoGiornaliero) {
      
      
    }
  }

  // Funzione per resettare il modulo
  resetForm(): void {
    // Se ci sono dati passati, ripristina quelli iniziali
    if (this.datoGiornaliero) {
      this.populateForm(this.datoGiornaliero); // Ripristina i dati iniziali
    } else {
      // Altrimenti, resetta il modulo lasciando i campi vuoti
      const formElements = <HTMLCollectionOf<HTMLInputElement>>document.getElementsByTagName('input');
      for (let i = 0; i < formElements.length; i++) {
        formElements[i].value = ''; // Lascia i campi vuoti
      }
    }
}


  // Funzione per eliminare il dato
  eliminaDato(): void {
    if (this.datoGiornaliero) {
      console.log('Eliminando DatoGiornaliero:', this.datoGiornaliero);
      // Aggiungi logica per eliminare il dato (invio al server, etc.)
    }
  }}
