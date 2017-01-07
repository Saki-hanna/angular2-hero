import { Component, OnInit } from '@angular/core';
import { Hero } from "app/shared/hero";
import { HEROES } from "app/shared/mock-heroes";
import { HeroService } from 'app/shared/hero.service';

@Component({
    module: module.id,
    selector: 'my-all-heroes',
    templateUrl: 'app/heroes/all-heroes/all-heroes.component.html',
    styleUrls: [ 'heroes.component.css' ]
})
export class AllHeroesComponent implements OnInit{

    heroes:Hero[] = HEROES;
    selectedHero:Hero;

    constructor(private heroService: HeroService) { }

    /**
     * A l'initialisation du component appeler la méthode getHeroes
     *
     * Methode Lifecycle Hooks
     *
     * @return void
     */
    ngOnInit():void {
        this.getHeroes();
    }

    /**
     * A la séléction d'un héro, change l'objet hero.
     * Methode binding
     *
     * @param hero
     *
     * @return void
     */
    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    }

    /**
     * Obtient tout les heroes via lheroServices
     *
     * @return void
     */
    getHeroes(): void {
        this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);

    }



}
