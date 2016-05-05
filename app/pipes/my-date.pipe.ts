import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({
    name: 'myDate'
})

export class MyDatePipe implements PipeTransform {
    transform(value, args: string[]) {
        if (value) {
            let date = new Date(value),
                day = (date.getDate() + 1).toString(),
                month = (date.getMonth() + 1).toString();

            if (day.length == 1) {
                day = "0" + day;
            }

            if (month.length == 1) {
                month = "0" + month;
            }

            return day + '/' + month + '/' + date.getFullYear();
        }
    }
}