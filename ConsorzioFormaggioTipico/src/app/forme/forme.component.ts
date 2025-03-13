import { Component, inject, OnInit } from '@angular/core';
import { Forma } from '../models/forma.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaService } from '../services/forma.service';

@Component({
  selector: 'app-forme',
  standalone: true,
  imports: [],
  templateUrl: './forme.component.html',
  styleUrl: './forme.component.scss'
})
export class FormeComponent implements OnInit {
  forme: Forma[] = [];
  caseificioId!: number;

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private formeService = inject(FormaService);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.caseificioId = +id;
        this.caricaFormePerCaseificio(this.caseificioId);
      }
    });
  }

  caricaFormePerCaseificio(id: number): void {
    this.formeService.getFormeByCaseificioId(id).subscribe(data => {
      this.forme = data;
    });
  }

  // Naviga ai dettagli di una forma specifica
  vaiADettagliForma(id: number): void {
    this.router.navigate(['/dettagli-forma', id]);
  }

  // Torna alla lista dei caseifici
  tornaIndietro(): void {
    this.router.navigate(['/lista-caseifici']);
  }
}
