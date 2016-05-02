import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {CardService} from '../services/card.service';
import {Card} from '../model/card';

@Component({
    selector: 'cards',
    templateUrl: 'app/templates/cards-component.html',
   
})
export class CardsComponent implements OnInit{
    cards: Card[];

    constructor(private _cardService: CardService, private _router: Router){}

    add() {
        this._router.navigate(['Card', {id: 0}])
    }

    ngOnInit() {
        this.getAll();
    }

    getAll() {
        this._cardService.getAll().then((obj) => {
            this.cards = obj;
        })
    }
}