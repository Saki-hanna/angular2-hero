import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private heroesUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}
    getHeroes(): Promise<Hero[]>  {
        let url = this.getHeroesUrl();
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 10 second delay
            setTimeout(() => resolve(this.getHeroes()), 10000);
        });
    }


    getHero(id: number): Promise<Hero> {
        let url = this.getHeroUrl(id);
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    create(name:string):Promise<Hero>{
    let url = this.getHeroesUrl();
        return this.http
            .post(url, JSON.stringify({name:name}), {headers:this.headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    update(hero: Hero): Promise<Hero> {
        let url = this.getHeroUrl(hero.id);
        return this.http
            .put(url, JSON.stringify(hero), {headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    delete(id:number):Promise<Hero>{
        let url = this.getHeroUrl(id);
        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(()=> null)
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    public getHeroUrl(id:number){
        return `${this.heroesUrl}/${id}`;
    }

    public getHeroesUrl(){
        return this.heroesUrl;
    }

}
