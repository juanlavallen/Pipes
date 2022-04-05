import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'flying'
})
export class FlyingPipe implements PipeTransform {
    transform(value: any) {
        return (value)
            ? 'vuela'
            : 'no vuelea'
    }
}