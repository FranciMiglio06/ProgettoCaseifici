import { Component } from '@angular/core';
import { CaseificioComponent } from '../caseificio/caseificio.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'consorzio',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,CaseificioComponent,HeaderComponent],
  templateUrl: './consorzio.component.html',
  styleUrl: './consorzio.component.scss'
})
export class ConsorzioComponent {

}
