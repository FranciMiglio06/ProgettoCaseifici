import { Component, inject, OnInit } from '@angular/core';
import { Caseificio } from '../models/caseificio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CaseificioService } from '../services/caseificio.service';
import { GalleriaModule } from 'primeng/galleria';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ClienteService } from '../services/cliente.service';

@Component({
  selector: 'caseificio',
  standalone: true,
  imports: [GalleriaModule,HttpClientModule,ButtonModule,HttpClientModule],
  providers:[CaseificioService,ClienteService],
  templateUrl: './caseificio.component.html',
  styleUrl: './caseificio.component.scss'
})
export class CaseificioComponent implements OnInit {
  caseificio: Caseificio | null = null;

  constructor(
    private clienteService:ClienteService,
      private router: Router
    ) {}
    isAuthenticated(){
      return this.clienteService.isAuthenticated();
    }
    vediDatiGiornalieri(code:any){
      this.router.navigate(['datiGiornalieri', code]);
    }
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
    this.router.navigate(['forme', code]);

  }
}
