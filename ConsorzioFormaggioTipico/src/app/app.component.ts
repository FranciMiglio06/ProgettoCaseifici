import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,ConsorzioComponent,FooterComponent,HeaderComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConsorzioFormaggioTipico';
  data: any[] = [];

}
