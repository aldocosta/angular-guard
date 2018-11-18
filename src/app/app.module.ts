import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './views/home/home.component';
import { AcessoComponent } from './views/acesso/acesso.component';
import { ConfiguracoesComponent } from './views/configuracoes/configuracoes.component';
import { LoginComponent } from './views/login/login.component';

import { AuthService } from './auth.service';
import { AuthGuardService }  from './authguard.service';
import { OneComponent } from './views/one/one.component';
import { TwoComponent } from './views/two/two.component';

import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AcessoComponent,
    ConfiguracoesComponent,
    LoginComponent,
    OneComponent,
    TwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService,AuthGuardService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
