import { Component, inject, OnInit } from '@angular/core';
import { Forma } from '../models/forma.model';
import { ActivatedRoute } from '@angular/router';
import { FormaService } from '../services/forma.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'forma',
  standalone: true,
  imports: [HttpClientModule,CommonModule,GalleriaModule],
  providers:[FormaService],
  templateUrl: './forma.component.html',
  styleUrl: './forma.component.scss'
})
export class FormaComponent implements OnInit {
  forma?: Forma; // Oggetto di tipo Forme

  private route = inject(ActivatedRoute);
  private formeService = inject(FormaService);
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
      const id = params.get('id');
      if (id) {
        this.caricaForma(id);
      }
    });
  }

  caricaForma(id: any): void {
    this.formeService.getFormaById(id).subscribe(data => {
      this.forma = data;
    });
  }
  compra(id:any): void{

  }
}
