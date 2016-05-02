import {TypeCard} from './enum/type_card';
import {AttributeCard} from './enum/attribute_card';
import {Type} from './enum/type';

export class Card {
    name: string;
    attribute: AttributeCard;
    quantity: number;
    type_card: TypeCard;
    level: number;
    atk: string;
    def: string;
    types: Type[];
    description: string;
    card_number: string
}