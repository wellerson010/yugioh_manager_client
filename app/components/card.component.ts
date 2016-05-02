import {Component, OnInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {CardService} from '../services/card.service';
import {Card} from '../model/card';
import {EnumPipe} from '../pipes/enum.pipe';
import {AttributeCard} from '../model/enum/attribute_card';
import {Type} from '../model/enum/type';

@Component({
    selector: 'card',
    templateUrl: 'app/templates/card-component.html',
    pipes: [EnumPipe]
})
export class CardComponent implements OnInit {
    card: Card;
    attribute_card = AttributeCard;
    type = Type;

    constructor(private _routeParams: RouteParams, private _router: Router, private _cardService: CardService) { }

    ngOnInit() {
        this.card = new Card();
        let id = this._routeParams.get('id');
        if (id) {

        }
    }

    save() {
        this._cardService.save(this.card).then(function () {
            alert('Salvo');
        });
    }

    cancel() {
        this._router.navigate(['Cards']);
    }
}