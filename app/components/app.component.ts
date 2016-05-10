import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {Component} from 'angular2/core';

//Services
import {AlertService} from '../services/alert.service';
import {CardService} from '../services/card.service';
import {DeckService} from '../services/deck.service';
import {FormDataService} from '../services/form-data.service';

//Component
import {CardsComponent} from './cards.component';
import {CardComponent} from './card.component';
import {DeckComponent} from './deck.component';
import {DecksComponent} from './decks.component';
import {HomeComponent} from './home.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app-component.html',
    styleUrls: ['app/styles/app.component.css'],
    providers: [ROUTER_PROVIDERS, AlertService, CardService, DeckService, FormDataService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        useAsDefault: true,
        component: HomeComponent
    },
    {
        path: '/cards',
        name: 'Cards',
        component: CardsComponent
    },
    {
        path: '/card/:id',
        name: 'Card',
        component: CardComponent
    },
    {
        path: '/decks',
        name: 'Decks',
        component: DecksComponent
    },
    {
        path: '/deck/:id',
        name: 'Deck',
        component: DeckComponent
    }
])
export class AppComponent {
    constructor(private _router: Router) { }

    toCards() {
        this._router.navigate(['Cards']);
    }

    toDecks() {
        this._router.navigate(['Decks']);
    }

    toHome() {
        this._router.navigate(['Home']);
    }
}