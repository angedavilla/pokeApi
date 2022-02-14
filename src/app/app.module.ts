import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonsListComponent } from './components/pokemons-list/pokemons-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PokemondetailComponent } from './components/pokemondetail/pokemondetail.component';
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsListComponent,
    PokemondetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
