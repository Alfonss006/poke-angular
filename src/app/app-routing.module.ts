import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PokeDetailsComponent } from './poke-details/poke-details.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { Error404Component } from './error404/error404.component';


const routes: Routes = [
  {
    path: 'detalles/:id',
    component: PokeDetailsComponent
  }, {
    path: '',
    component: PokeListComponent
  }, {
    path: '**',
    redirectTo: '404'
  }, {
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
