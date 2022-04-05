import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capitalletter'
})
export class CapitalLetterPipe implements PipeTransform {

    transform(value: string, inCapitalLetter: boolean) {
        // return value.toUpperCase();
        return (inCapitalLetter)
            ? value.toUpperCase()
            : value.toLowerCase();
    }
}