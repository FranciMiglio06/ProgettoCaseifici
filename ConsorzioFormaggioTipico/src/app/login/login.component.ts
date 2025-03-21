import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { Cliente } from '../models/cliente.model';
import { ClienteService } from '../services/cliente.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'login',
  standalone: true,
  imports: [CommonModule,FormsModule,ImageModule,ButtonModule,HttpClientModule],
  providers:[ClienteService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLogging = true; // Variabile per controllare login o registrazione
  cliente: Cliente = {
    cli_id: 0,
    cli_username: '',
    cli_password: '',
    cli_nome: '',
    cli_cognome: '',
    cli_indirizzo: '',
    cli_email: '',
    cli_num_tel: '',
    cli_partita_iva: ''
  };
  constructor(private clienteService:ClienteService, private router: Router) {}

  accedi(): void {
    // Chiamata asincrona al servizio per il login
    this.clienteService.login(this.cliente).subscribe(
      (response) => {
        // Salva il token in localStorage se il login ha successo
        if(response.success){
        localStorage.setItem('authToken', response.user_id);
        console.log('Login riuscito! Token:', response.user_id);
        // Reindirizza l'utente alla home o alla pagina protetta
        this.router.navigate(['consorzio']);
        }
      },
      (error) => {
        // Se si verifica un errore (ad esempio, credenziali errate)
        alert('Username o password errati!');
        console.error('Errore durante il login:', error);
      }
    );
  }

  // Metodo per la registrazione
  registrati(): void {
    // Chiamata asincrona al servizio per la registrazione
    this.clienteService.register(this.cliente).subscribe(
      (response) => {
        // Registrazione riuscita, mostriamo un messaggio di successo
        alert('Registrazione riuscita! Ora puoi accedere.');
        this.isLogging = true; // Torna al login dopo la registrazione
      },
      (error) => {
        // Gestiamo l'errore in caso di email già registrata o altri problemi
        alert('Email già registrata o errore durante la registrazione.');
        console.error('Errore durante la registrazione:', error);
      }
    );
  }
}
