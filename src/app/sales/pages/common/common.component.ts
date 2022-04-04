import { Component } from '@angular/core';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styles: [
  ]
})
export class CommonComponent {

nameLower: string = 'juan';
nameUpper: string = 'JUAN';
nameCompleted: string = 'juAn IgNaCIo';

date: Date = new Date();

}
