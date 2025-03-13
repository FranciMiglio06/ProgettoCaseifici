import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CaseificiComponent } from './caseifici/caseifici.component';
import { ContattiComponent } from './contatti/contatti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { ConsorzioComponent } from './consorzio/consorzio.component';
import { CaseificioComponent } from './caseificio/caseificio.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'consorzio', pathMatch: 'full' },
  { path: 'consorzio', component: ConsorzioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'caseifici', component: CaseificiComponent },
  { path: 'contatti', component: ContattiComponent },
  { path: 'carrello', component: CarrelloComponent },
  { path: 'dettagli-caseificio/:id', component: CaseificioComponent },
  { path: '**', redirectTo: 'consorzio' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
