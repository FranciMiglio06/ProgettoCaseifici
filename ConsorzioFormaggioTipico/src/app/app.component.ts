import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { BackendService } from './backend.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,ConsorzioComponent,BackendService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConsorzioFormaggioTipico';
  data: any[] = [];

  constructor(private apiService: BackendService) {}

  ngOnInit() {
    this.apiService.getData().subscribe(response => {
      this.data = response;
    });
  }
}
