import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'src/app/const/config';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http : HttpClient) {}

   public getPokemons(): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.get(`${url}pokemon/?limit=151`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

  public getPokemonsType(): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.get(`${url}type`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

  public getPokemonId(id: number): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.get(`${url}pokemon/${id}`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

  public getPokemonStat(id: number): Promise<Object> {
    return new Promise((resolved, rejected) => {
      this.http.get(`${url}pokemon/${id}`).subscribe((res: Object) => {
        resolved(res);
      });
    });
  }

}
