import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EstoqueComponent } from './components/estoque/estoque.component';
import { VendasComponent } from './components/vendas/vendas.component';
import { LoginComponent } from './components/layout/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'estoque', component: EstoqueComponent },
  { path: 'vendas', component: VendasComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cliente', component: ClienteComponent },
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
