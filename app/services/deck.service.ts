import {Http} from 'angular2/http';
import {Config} from '../config';
import {Injectable} from 'angular2/core';
import {CommonRequest} from '../common/request';
import {Deck} from '../model/deck';
import {FormDataService} from './form-data.service';


@Injectable()
export class DeckService {
    public decks: Deck[];

    private urlDeck = Config.urlApi + 'deck';

    constructor(
        private _http: Http,
        private _formDataService: FormDataService
    ) { }

    delete(id: string) {
        let url = this.urlDeck + '/delete';
        return CommonRequest.delete(this._http, url, { id: id }).then(() => {
            for (var i = 0; i < this.decks.length; i++) {
                if (this.decks[i]._id == id) {
                    this.decks.splice(i, 1);
                    break;
                }
            }
        });
    }

    get(id: string) {
        return CommonRequest.get(this._http, this.urlDeck, { id: id });
    }

    getAll(forceRefresh?: boolean) {
        if (!this.decks || forceRefresh) {
            let url = this.urlDeck + '/all';
            CommonRequest.get(this._http, url).then(decks => {
                this.decks = decks;
            });
        }
    }

    refresh() {
       this.getAll(true);
    }

    save(deck: Deck, imageChanged:boolean, picture) {
        let url = this.urlDeck + '/save';
        return CommonRequest.post(this._http, url, deck).then((data) => {
            let id = data.id;

            if (imageChanged) {
                if (picture) {
                    let formData = this._formDataService.buildToImage(picture, id);
                    return this.uploadImage(formData);
                }
                else {
                    //deletar imagem
                }
            }
        });
    }

    uploadImage(data: FormData) {
        let url = this.urlDeck + '/uploadImage';
        return CommonRequest.postFormData(url, data);
    }
}