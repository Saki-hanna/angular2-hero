import { Component, OnInit } from '@angular/core';
import { Hero } from "app/shared/hero";
import { HEROES } from "app/shared/mock-heroes";
import { HeroService } from 'app/shared/hero.service';

@Component({
    selector: 'my-all-heroes',
    template: `
<h2>My Heroes</h2>
<ul class="toh-heroes">
    <li *ngFor="let hero of heroes"  
    [class.toh-selected]="hero === selectedHero" 
    (click)="onSelect(hero)">
       
        <span class="toh-badge">{{hero.id}}</span> {{hero.name}}
    </li>
</ul>
<my-hero-detail [detailHero]="selectedHero"></my-hero-detail>
      `,
    styles: [
        `
  .toh-selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .toh-heroes {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .toh-heroes li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .toh-heroes li.toh-selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .toh-heroes li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .toh-heroes .text {
    position: relative;
    top: -3px;
  }
  .toh-heroes .toh-badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`
    ]


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
