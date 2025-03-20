import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router'
import { ClienteService } from '../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'header',
  standalone: true,
  imports: [CommonModule,FormsModule,ImageModule,ButtonModule,HttpClientModule],
  providers:[ClienteService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  constructor(private clienteService:ClienteService,private router: Router) {}
  isAuthenticated(){
    return this.clienteService.isAuthenticated();
  }
  onButtonHover(event: any) {
    // l'hover button
    event.target.style.backgroundColor = '#B8860B';
  }
  navigateTo(route: string) {
    // Redirect alla pagina selezionata
    this.router.navigate([route]);
  }
  logout(){
    this.clienteService.logout();
  }
}

