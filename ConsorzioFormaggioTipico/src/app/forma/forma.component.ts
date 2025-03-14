import { Component, inject, OnInit } from '@angular/core';
import { Forma } from '../models/forma.model';
import { ActivatedRoute } from '@angular/router';
import { FormaService } from '../services/forma.service';

@Component({
  selector: 'forma',
  standalone: true,
  imports: [],
  templateUrl: './forma.component.html',
  styleUrl: './forma.component.scss'
})
export class FormaComponent implements OnInit {
  forma?: Forma; // Oggetto di tipo Forme

  private route = inject(ActivatedRoute);
  private formeService = inject(FormaService);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.caricaForma(+id);
      }
    });
  }

  caricaForma(id: number): void {
    this.formeService.getFormaById(id).subscribe(data => {
      this.forma = data;
    });
  }
  compra(id:any): void{
//da implementare
  }
}
