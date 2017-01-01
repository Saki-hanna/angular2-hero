import { Injectable } from '@angular/core';
import { HEROES } from "./mock-heroes";
import { Hero } from "./hero";

@Injectable()
export class HeroService {

    getHeroes(): Promise<Hero[]>  {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 10 second delay
            setTimeout(() => resolve(this.getHeroes()), 10000);
        });
    }





}
