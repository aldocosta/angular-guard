import { NgModule }             from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';

 import { HomeComponent }   from './views/home/home.component';
 import { AcessoComponent }   from './views/acesso/acesso.component';
 import { ConfiguracoesComponent }   from './views/configuracoes/configuracoes.component';
 import { LoginComponent }      from './views/login/login.component';
 import { AuthGuardService }  from './authguard.service';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },  
  { path: 'acesso', component: AcessoComponent },
  { path: 'config', component: ConfiguracoesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}