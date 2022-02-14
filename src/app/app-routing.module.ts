import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';


const routes: Routes = [
  {
    path: 'home',
    component: PokemonsListComponent
  },
  {
    path: 'home/pokemon-detail/:id',
    component: PokemondetailComponent
  },
  {
    path: '**', 
    pathMatch: 'full', 
    redirectTo: 'home'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
