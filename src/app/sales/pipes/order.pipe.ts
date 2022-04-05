import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], order: string = 'not found'): Heroe[] {
    switch (order) {
      case 'name':
        heroes = heroes.sort((a, b) => (a.name > b.name) ? 1 : -1);
        break;

      case 'flying':
        heroes = heroes.sort((a, b) => (a.flying > b.flying) ? 1 : -1);
        break;

      case 'color':
        heroes = heroes.sort((a, b) => (a.color > b.color) ? 1 : -1);
        break;

      case 'origin':
        heroes = heroes.sort((a, b) => (a.origin > b.origin) ? 1 : -1);
        break;

      default:
        return heroes;
    }
  }
}