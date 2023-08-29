import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { JogadoresComponent } from './jogadores/jogadores.component';
import { CardComponent } from './card/card.component';
import { LendasComponent } from './lendas/lendas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: "", redirectTo: 'principal', pathMatch: 'full'},
  { path: "card", component: CardComponent },
  { path: "jogadores", component: JogadoresComponent },
  { path: "lendas", component: LendasComponent },
  { path: "login", component: LoginComponent },
  { path: "principal", component: PrincipalComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
