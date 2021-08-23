import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', pathMatch:'full', redirectTo: 'home'},
  { path: '**', pathMatch:'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }