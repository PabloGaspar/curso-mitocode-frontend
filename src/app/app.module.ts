import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MaterialModule } from './material/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreferenciasComponent } from './components/preferencias/preferencias.component';
import { AddPreferenciaComponent } from './components/add-preferencia/add-preferencia.component';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogoutComponent } from './components/logout/logout.component';
import { SecurityComponent } from './components/security/security.component';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    PreferenciasComponent,
    AddPreferenciaComponent,
    LoginComponent,
    ErrorComponent,
    LogoutComponent,
    SecurityComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    } ],
  bootstrap: [AppComponent],
  entryComponents: [
    ErrorComponent]
})
export class AppModule { }
