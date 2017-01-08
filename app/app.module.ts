//Core Angular
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './shared/in-memory-data.service';

//Component
import { AppComponent }  from './app.component';

import { AllHeroesComponent } from "./heroes/all-heroes/all-heroes.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";

import { DashboardComponent } from "./dashboard/dashboard.component";
//Services
import { HeroService } from "./shared/hero.service";
import { AppRoutingModule } from "./app-routing.module";





@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)

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
