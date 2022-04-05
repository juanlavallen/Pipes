import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
    
  ]
})
export class OrderComponent {

  inCapitalLetter: boolean = false;
  order: string = '';

  heroes: Heroe[] = [
    { name: 'Batman',         flying: true,   color: Color.black,   origin: 'DC'     },
    { name: 'Iron Man',       flying: true,   color: Color.red,     origin: 'Marvel' },
    { name: 'Black Panther',  flying: false,  color: Color.black,   origin: 'Marvel' },
    { name: 'Superman',       flying: true,   color: Color.blue,    origin: 'DC'     },
  ];

  change() {
    this.inCapitalLetter = !this.inCapitalLetter;
  }

  changeOrder(value:string) {
    this.order = value;
  }
}
