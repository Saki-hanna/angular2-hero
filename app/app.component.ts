import { Component } from "@angular/core";

@Component({
    moduleId:module.id,
    selector:'my-app',
    templateUrl: 'app.component.html'
})

export class AppComponent{
    title:string = 'Tour of Heroes';

    constructor(){
        console.log('app');
    }
}

