import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './_services/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoriaComponent,
    CategoriaDetalheComponent,
    CategoriaNovaComponent,
    CategoriaEditarComponent,
    LoginComponent,
    LogoutComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
