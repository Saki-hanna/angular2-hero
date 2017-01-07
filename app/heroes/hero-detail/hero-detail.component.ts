import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Hero } from "./../../shared/hero";
import { HeroService } from './../../shared/hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html',
    styleUrls :['hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{

    @Input()
    detailHero: Hero;

    constructor(private heroService:HeroService,
                private route:ActivatedRoute,
                private location:Location

    ){}

    // + converti en nombre
    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))
            .subscribe(hero => this.detailHero = hero)
    }

    goBack(): void {
        this.location.back();
    }

}
