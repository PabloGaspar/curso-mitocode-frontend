import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPreferenciaComponent } from './components/add-preferencia/add-preferencia.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SecurityComponent } from './components/security/security.component';
import { GuardService } from './services/guard.service';


const routes: Routes = [
  { path:'addpreferencia', component: AddPreferenciaComponent},
  { path:'listado', component: PreferenciasComponent},
  { path: 'login', component: LoginComponent, canActivate: [GuardService]},
  { path: 'logout', component: LogoutComponent},
  { path: 'security', component: SecurityComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
