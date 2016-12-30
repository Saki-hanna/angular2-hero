import { Component, Input } from '@angular/core';
import { Hero } from "../shared/hero";

@Component({
    selector: 'my-hero-detail',
    template: `
<section *ngIf="detailHero">

    <h2>{{detailHero.name}} details!</h2>

    <div>
        <label>id: </label>
        {{detailHero.id}}
    </div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="detailHero.name" placeholder="name">
    </div>
</section>
    `
})

export class HeroDetailComponent {
    @Input()
    detailHero: Hero;
}
