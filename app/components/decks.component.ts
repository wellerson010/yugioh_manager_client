import {Component, OnInit} from 'angular2/core';
import {MyDatePipe} from '../pipes/my-date.pipe';
import {Router} from 'angular2/router';
import {Deck} from '../model/deck';
import {Config} from '../config';
import {DeckService} from '../services/deck.service';
import {AlertService} from '../services/alert.service';

@Component({
    selector: 'decks', 
    templateUrl: 'app/templates/decks-component.html',
    pipes: [MyDatePipe]
})
export class DecksComponent implements OnInit{

    constructor(private _deckService: DeckService, private _router: Router, private _alertService: AlertService) { }

    ngOnInit() {
        this.getAll();
    }

    get decks() {
        return this._deckService.decks;
    }

    add() {
        this._router.navigate(['Deck', {id: 0}])
    }

    delete(deck: Deck) {
        this._alertService.confirm('Deseja mesmo apagar esse deck?', this.deleteConfirm.bind(this, deck._id))
    }

    private deleteConfirm(id: string) {
        this._deckService.delete(id).then(this._alertService.alert.bind(this, 'Deck deletado com sucesso!'));
    }

    edit(deck: Deck) {
        this._router.navigate(['Deck', { id: deck._id }])
    }
   
    getAll() {
        this._deckService.getAll();
    }

    refresh() {
        this._deckService.refresh();
    }

    setThumbnail(deck: Deck) {
        if (deck.picture) {
            return 'url(' + Config.urlDeckImage + deck.picture + ')';
        }
        return '';
    }
}