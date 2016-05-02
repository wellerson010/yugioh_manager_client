import {Http} from 'angular2/http';
import {Injectable} from 'angular2/core';
import {Config} from '../config';
import {CommonRequest} from '../common/request';

@Injectable()
export class CardService {
    private urlCard = Config.urlApi + 'card/';

    constructor(private _http: Http) { }

    getStatus() {
        let url = this.urlCard + 'status';
        return CommonRequest.get(this._http, url);
    }

    getAll() {
        let url = this.urlCard + 'all';
        return CommonRequest.get(this._http, url);
    }

    save(card) {
        let url = this.urlCard + 'save';
        return CommonRequest.post(this._http, url, card);
    }
}