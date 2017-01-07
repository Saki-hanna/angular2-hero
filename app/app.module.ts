//Core Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
//Component
import { AppComponent }  from 'app/app.component';

import { AllHeroesComponent } from "app/heroes/all-heroes/all-heroes.component";
import { HeroDetailComponent } from "app/heroes/hero-detail/hero-detail.component";

import { DashboardComponent } from "app/dashboard/dashboard.component";
//Services
import { HeroService } from "app/shared/hero.service";
import { AppRoutingModule } from "./app-routing.module";




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule
    ],
    providers: [
        HeroService
    ],
    declarations: [
        AppComponent,
        AllHeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    bootstrap: [
        AppComponent
    ],

})
export class AppModule {
}
