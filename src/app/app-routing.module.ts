import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimesComponent } from './times/times.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { CardComponent } from './card/card.component';
import { LendasComponent } from './lendas/lendas.component';

const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  { path: "card", component: CardComponent },
  { path: "jogadores", component: JogadoresComponent },
  { path: "lendas", component: LendasComponent },
  { path: "times", component: TimesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
