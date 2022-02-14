import { Component, Input, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {

  public pokemons: any = [];
  public pokemonsType: any = [];



  @Input() public pokemon: any;

  constructor(
    private PokemonService: PokemonService, 
  ) { }

  ngOnInit(): void {
    this.PokemonService.getPokemons().then((res: any) => {
      this.pokemons = res['results'];
      console.log(this.pokemons);
    });

    this.PokemonService.getPokemonsType().then((res: any) => {
      this.pokemonsType = res['results'];
    });
  }

  FilterPokemos(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
  }
  }
