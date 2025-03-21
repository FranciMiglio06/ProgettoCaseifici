import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CaseificiComponent } from './caseifici/caseifici.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { NgModule } from '@angular/core';
import { DatigiornalieriComponent } from './datigiornalieri/datigiornalieri.component';
import { FormeComponent } from './forme/forme.component';
import { FormaComponent } from './forma/forma.component';
import { DatoGiornalieroEditorComponent } from './dato-giornaliero-editor/dato-giornaliero-editor.component';
import { FormaEditorComponent } from './forma-editor/forma-editor.component';
import { StagionatureEditorComponent } from './stagionature-editor/stagionature-editor.component';
import { CaseificioEditorComponent } from './caseificio-editor/caseificio-editor.component';
import { TipoFormaEditorComponent } from './tipo-forma-editor/tipo-forma-editor.component';
import { TipoUtenteEditorComponent } from './tipo-utente-editor/tipo-utente-editor.component';

export const routes: Routes = [
  { path: 'editorTipoForma', component: TipoFormaEditorComponent },
  { path: 'editorTipoForma/:id', component: TipoFormaEditorComponent },
  { path: 'editorTipoUtente', component: TipoUtenteEditorComponent },
  { path: 'editorTipoUtente/:id', component: TipoUtenteEditorComponent },
  { path: 'editorCaseificio', component: CaseificioEditorComponent },
  { path: 'editorCaseificio/:id', component: CaseificioEditorComponent },
  { path: 'editorStagionatura', component: StagionatureEditorComponent },
  { path: 'editorStagionatura/:id', component: StagionatureEditorComponent },
  { path: 'editorForma', component: FormaEditorComponent },
  { path: 'editorForma/:id', component: FormaEditorComponent },
  { path: 'editorDatoGiornaliero', component: DatoGiornalieroEditorComponent },
  { path: 'editorDatoGiornaliero/:id', component: DatoGiornalieroEditorComponent },
  { path: 'login', component: LoginComponent },
  { path: 'consorzio', component: ConsorzioComponent },
  { path: 'caseifici', component: CaseificiComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'datiGiornalieri/:id', component: DatigiornalieriComponent },
  { path: 'caseificio/:id', component: CaseificioComponent },
  { path: 'forme/:id', component: FormeComponent},
  { path: 'forma/:id', component: FormaComponent},
  { path: '**', redirectTo: 'consorzio' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
