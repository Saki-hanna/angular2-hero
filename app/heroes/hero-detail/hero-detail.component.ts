import { Component, Input, OnInit } from '@angular/core';
import { Hero } from "app/shared/hero";


import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from 'app/shared/hero.service'

import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit{

    @Input()
    detailHero: Hero;

    constructor(private heroService:HeroService,
                private route:ActivatedRoute,
                private location:Location

    ){}

    ngOnInit():void {
        this.route.params
            .switchMap((params:Params) => this.heroService.getHero(+params['id']))// + converti en nombre
            .subscribe(hero => this.detailHero = hero)
    }

    goBack(): void {
        this.location.back();
    }

}
