import { Routes, RouterModule } from "@angular/router";
import { AllHeroesComponent } from "./heroes/all-heroes/all-heroes.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HeroDetailComponent } from "./heroes/hero-detail/hero-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
    {
        //Redirection d'une route à une autre : par default
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'

    },
    {
        path: 'heroes',
        component: AllHeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },{
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}