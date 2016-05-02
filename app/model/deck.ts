import {DeckType} from './enum/deck_type'

export class Deck {
    _id: string,
    name: string;
    type: DeckType;
    price: number;
    purchase_date: Date;
}