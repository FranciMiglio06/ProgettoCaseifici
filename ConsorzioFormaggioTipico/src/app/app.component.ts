import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { FormaComponent } from './forma/forma.component';
import { CaseificiComponent } from './caseifici/caseifici.component';
import { CaseificioEditorComponent } from './caseificio-editor/caseificio-editor.component';
import { FormeEditorComponent } from './forme-editor/forme-editor.component';
import { StagionatureEditorComponent } from './stagionature-editor/stagionature-editor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,FormsModule,ConsorzioComponent,
    FooterComponent,HeaderComponent,LoginComponent, CarrelloComponent,
    FormaComponent,CaseificiComponent,CaseificioEditorComponent,FormeEditorComponent,
    StagionatureEditorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ConsorzioFormaggioTipico';
  data: any[] = [];

}
