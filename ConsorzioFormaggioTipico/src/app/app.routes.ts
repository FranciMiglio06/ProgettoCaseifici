import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CaseificiComponent } from './caseifici/caseifici.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { NgModule } from '@angular/core';
import { DatigiornalieriComponent } from './datigiornalieri/datigiornalieri.component';

export const routes: Routes = [
  { path: 'consorzio', component: ConsorzioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'caseifici', component: CaseificiComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'datiGiornalieri/:id', component: DatigiornalieriComponent },
  { path: 'dettagli-caseificio/:id', component: CaseificioComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
