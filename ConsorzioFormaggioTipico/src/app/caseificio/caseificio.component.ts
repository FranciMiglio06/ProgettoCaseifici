import { Component, inject, OnInit } from '@angular/core';
import { Caseificio } from '../models/caseificio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseificioService } from '../services/caseificio.service';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'caseificio',
  standalone: true,
  imports: [GalleriaModule],
  templateUrl: './caseificio.component.html',
  styleUrl: './caseificio.component.scss'
})
export class CaseificioComponent implements OnInit {
  caseificio: Caseificio | null = null;

  constructor(
      private router: Router
    ) {}

  private route = inject(ActivatedRoute);
  private caseificioService = inject(CaseificioService);
  images = [
    {
      itemImageSrc: "/assets/images/logo.png",
      thumbnailImageSrc: "/assets/images/logo.png",
      alt: "Logo",
      title: "Logo"
    },
    {
      itemImageSrc: "/assets/images/0.jpg",
      thumbnailImageSrc: "/assets/images/0.jpg",
      alt: "Logo1",
      title: "Logo1"
    }
  ];

  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3 },
    { breakpoint: '768px', numVisible: 2 },
    { breakpoint: '560px', numVisible: 1 }
  ];
  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id'); // Prende il valore del parametro "id"

      if (id) {
        this.caricaCaseificio(id); // Converte l'ID in numero e carica i dati
      }
    });
  }

  caricaCaseificio(id: any): void {
    this.caseificioService.getCaseificioById(id).subscribe(data => {
      this.caseificio = data;
    });
  }
  vediForme(code: any){
    this.router.navigate(['/caseificio', code, 'forme']);

  }
}
