import {Component} from 'angular2/core';
import {CardService} from '../services/card.service';
import {DetailComponent} from  './detail.component';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'home',
    templateUrl: 'app/templates/home-component.html',
    directives: [DetailComponent]
})
export class HomeComponent {
    constructor(private _cardService: CardService) { }
}