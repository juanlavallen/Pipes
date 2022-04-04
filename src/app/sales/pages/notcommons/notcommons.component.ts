import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-notcommons',
  templateUrl: './notcommons.component.html',
  styles: [
  ]
})
export class NotcommonsComponent {

  // i18nSelect
  name: string = 'Luciana';
  gender: string = 'femenino';

  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clients: string[] = ['Sofia', 'Juan', 'Rosario', 'Mariano', 'Lucia'];

  clientMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'un cliente esperando',
    'other': '# clientes esperando'
  }

  changePerson() {
    this.name = 'Juan';
    this.gender = 'masculino';
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Juan',
    age: '19',
    country: 'Argentina'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      marvel: false
    },
    {
      name: 'Iron Man',
      marvel: true
    },
    {
      name: 'Batman',
      marvel: false
    },
    {
      name: 'Hulk',
      marvel: true
    }
  ];

  // Async Pipe
  observable = interval(5000);

  valuePromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Datos cargados correctamente'), 3500);
  });
}
