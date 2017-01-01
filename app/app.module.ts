import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";
import { HeroesComponent } from "./heroes/heroes.component";
import { HeroService } from "./shared/hero.service";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    providers: [
        HeroService
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
