//Core Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
//Component
import { AppComponent }  from 'app/app.component';

import { AllHeroesComponent } from "app/heroes/all-heroes/all-heroes.component";
import { HeroDetailComponent } from "app/heroes/hero-detail/hero-detail.component";

import { DashboardComponent } from "app/dashboard/dashboard.component";
//Services
import { HeroService } from "app/shared/hero.service";




@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {
                path: 'heroes',
                component: AllHeroesComponent
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                //Redirection d'une route à une autre : par default
                path: '',
                redirectTo: '/dashboard',
                pathMatch: 'full'

            },{
                path: 'detail/:id',
                component: HeroDetailComponent
            }


        ])
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
