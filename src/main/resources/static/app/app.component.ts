import {Component} from 'angular2/core';
import {Gman} from './gman';

interface Hero {
    id: number;
    name: string;
}

var HEROES: Hero[] = [
    { "id": 11, "name": "Mr. Nice" },
    { "id": 12, "name": "Narco" },
    { "id": 13, "name": "Bombasto" },
    { "id": 14, "name": "Celeritas" },
    { "id": 15, "name": "Magneta" },
    { "id": 16, "name": "RubberMan" },
    { "id": 17, "name": "Dynama" },
    { "id": 18, "name": "Dr IQ" },
    { "id": 19, "name": "Magma" },
    { "id": 20, "name": "Tornado" }
];

@Component({
    selector: 'my-app',
    template:`
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="hero.name" placeholder="name"></div>
      <ul>
        <li *ngFor="#hero of heroes">
            <span (click)="gman.onSelect(hero)">{{hero.name}}</span>
        </li>
        <img src="./img/1.jpg" width="50" height="50">
      </ul>
    </div>
    `
})

export class AppComponent {
    public title = 'Tour of Heroes';
    public hero: Hero = {
        id: 1,
        name: 'Windstorm'
    };

    private heroes = HEROES;
    public gman = new Gman();

    onSelect(hero){
        console.log("appComponent")
    }
}

