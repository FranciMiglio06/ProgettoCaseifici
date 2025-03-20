import { Component, inject, OnInit, signal } from '@angular/core';
import { Forma } from '../models/forma.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormaService } from '../services/forma.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-forme',
  standalone: true,
  imports: [HttpClientModule,CommonModule
  ],
      providers:[FormaService],
  templateUrl: './forme.component.html',
  styleUrl: './forme.component.scss'
})
export class FormeComponent implements OnInit {
  forme = signal<Forma[]>([]);
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

  caricaFormePerCaseificio(id: any): void {
    this.formeService.getFormeCaseificio(id).subscribe(data => {
      this.forme.set(data);
    });
  }

  // Naviga ai dettagli di una forma specifica
  vaiADettagliForma(id: any): void {
    this.router.navigate(['forma', id]);
  }

  // Torna alla lista dei caseifici
  tornaIndietro(): void {
    this.router.navigate(['caseifici']);
  }
}
