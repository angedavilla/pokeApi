import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemondetail',
  templateUrl: './pokemondetail.component.html',
  styleUrls: ['./pokemondetail.component.scss']
})
export class PokemondetailComponent implements OnInit {

 public pokemon: any = [] = [];
 public pokemonStat: any = [] = [];

  constructor(
    private PokemonService: PokemonService,
    private activatedRouter: ActivatedRoute
    ) {
      this.pokemon = this.activatedRouter.snapshot.params['id'];
     }

  ngOnInit(): void { 
    this.PokemonService.getPokemonId(this.pokemon).then((res: any) => {
      this.pokemon = res;
    }); 

    this.PokemonService.getPokemonStat(this.pokemon).then((res: any) => {
      this.pokemonStat = res['stats'];
      console.log(this.pokemonStat);
    })

    // this.PokemonService.getPokemonStat().then((res: any) => {
    //   this.pokemonStat = res;
    //   console.log(this.pokemonStat);
    // });
  }
  
}
