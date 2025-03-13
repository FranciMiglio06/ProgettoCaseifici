import { Component, OnInit, signal } from '@angular/core';
import { Caseificio } from '../models/caseificio.model';
import { CaseificioService } from '../services/caseificio.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caseifici',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './caseifici.component.html',
  styleUrl: './caseifici.component.scss'
})
export class CaseificiComponent implements OnInit {
  caseifici = signal<Caseificio[]>([]);  // Array di caseifici

  constructor(private caseificioService: CaseificioService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.caricaTuttiICaseifici();
  }

  // 🔹 Metodo per caricare tutti i caseifici
  caricaTuttiICaseifici(): void {
    this.caseificioService.getCaseifici().subscribe(data => {
      this.caseifici.set(data); // Aggiorna il Signal
    });
  }
  caricaCaseificio(code: any): void {
    // Redirect al componente dei dettagli passando l'ID come parametro
    this.router.navigate(['/dettagli-caseificio', code]);
  }
}
