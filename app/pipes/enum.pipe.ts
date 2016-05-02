import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'enumPipe'
})
export class EnumPipe implements PipeTransform {
    transform(value, args: string[]) {
        let keys = [];
        for (let key in value) {
            let isValueProperty = parseInt(key, 10) >= 0
            if (isValueProperty) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    }
}