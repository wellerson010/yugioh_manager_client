import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Deck} from '../model/deck';
import {Config} from '../config';
import {DeckService} from '../services/deck.service';

@Component({
    selector: 'decks', 
    templateUrl: 'app/templates/decks-component.html'
})
export class DecksComponent implements OnInit{
    decks: Deck[];

    constructor(private _deckService: DeckService, private _router: Router) { }

    ngOnInit() {
        this.getAll();
    }

    add() {
        this._router.navigate(['Deck', {id: 0}])
    }

    delete(deck: Deck) {
        this._deckService.delete(deck._id).then(function () {
            alert('a');
        });
    }

    edit() {

    }
   
    getAll() {
        this._deckService.getAll().then((obj) => {
            this.decks = obj;
        })
    }

    setThumbnail(deck: Deck) {
        return 'url(' + Config.urlApi + 'card_images/' + deck._id + '.jpg' + ')';
    }
}