import {Component} from 'angular2/core';
import {CardService} from '../services/card.service';
import {OnInit} from 'angular2/core';

@Component({
    selector: 'detail',
    styleUrls: ['app/styles/detail.component.css'],
    templateUrl: 'app/templates/detail-component.html'
})
export class DetailComponent implements OnInit {
    monstersUnique = 0;
    spellsUnique = 0;
    trapsUnique = 0;
    totalUnique = 0;

    constructor(private _cardService: CardService) { }

    ngOnInit() {
        this.getStatus();
    }

    getStatus() {
        this._cardService.getStatus()
            .then((obj) => {
                this.monstersUnique = obj.monstersUnique;
                this.trapsUnique = obj.trapsUnique;
                this.spellsUnique = obj.spellsUnique;

                this.totalUnique = this.monstersUnique + this.trapsUnique + this.spellsUnique;
            });
    }
}