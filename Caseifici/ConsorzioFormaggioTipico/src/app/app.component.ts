import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CaseificioComponent, CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConsorzioFormaggioTipico';
}
