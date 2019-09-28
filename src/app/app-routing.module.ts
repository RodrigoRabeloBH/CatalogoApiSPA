import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriaComponent } from './categoria/categoria.component';
import { CategoriaDetalheComponent } from './categoria-detalhe/categoria-detalhe.component';
import { CategoriaNovaComponent } from './categoria-nova/categoria-nova.component';
import { CategoriaEditarComponent } from './categoria-editar/categoria-editar.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' }
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' }
  },
  {
    path: 'categoria',
    component: CategoriaComponent,
    data: { title: 'Lista de Categorias' }
  },
  {
    path: 'categoria-detalhe/:id',
    component: CategoriaDetalheComponent,
    data: { title: 'Detalhe da Categoria' }
  },
  {
    path: 'categoria-nova',
    component: CategoriaNovaComponent,
    data: { title: 'Adicionar Categoria' }
  },
  {
    path: 'categoria-editar/:id',
    component: CategoriaEditarComponent,
    data: { title: 'Editar Categoria' }
  },
  {
    path: '',
    redirectTo: '/categoria',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home Image' }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
