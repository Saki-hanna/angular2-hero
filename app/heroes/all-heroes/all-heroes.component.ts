import { Component, OnInit } from '@angular/core';
import { Hero } from "./../../shared/hero";
import { HeroService } from './../../shared/hero.service';
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: 'my-all-heroes',
    templateUrl: 'all-heroes.component.html',
    styleUrls: [ 'all-heroes.component.css' ]
})
export class AllHeroesComponent implements OnInit{

    heroes:Hero[];
    selectedHero:Hero;

    constructor(private heroService: HeroService, private router: Router) {

    }

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
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);

    }

    /**
     * Retoune une page en arrière via l'historique du navigateur
     */
    goToDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }


}
