import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {EnumPipe} from '../pipes/enum.pipe';
import {Deck} from '../model/deck';
import {DeckService} from '../services/deck.service';
import {DeckType} from '../model/enum/deck_type';


@Component({
    selector: 'deck',
    templateUrl: 'app/templates/deck-component.html',
    pipes: [EnumPipe]
})
export class DeckComponent implements OnInit {
    private _picture: any[];
    private _imageChanged = false;

    public deck = new Deck();
    public deck_type = DeckType;

    constructor(private _routeParams: RouteParams,
        private _router: Router,
        private _deckService: DeckService
    ) { }

    ngOnInit() {
        let id = this._routeParams.get('id');

        if (id) {
            this._deckService.get(id).then((deck) => {
                this.deck = deck;
            });
        }
    }
    
    cancel() {
        this._router.navigate(['Decks']);
    }

    changeImage(files) {
        if (files.length > 0) {
            this._picture = files[0];
        }
        else {
            this._picture = null;
        }

        this._imageChanged = true;
    }

    save() {
        this._deckService.save(this.deck, this._imageChanged, this._picture).then(() => {
            this._router.navigate(['Decks']);
        });
    }
}