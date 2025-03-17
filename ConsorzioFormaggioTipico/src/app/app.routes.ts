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

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'consorzio', component: ConsorzioComponent },
  { path: 'login', component: LoginComponent },
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
