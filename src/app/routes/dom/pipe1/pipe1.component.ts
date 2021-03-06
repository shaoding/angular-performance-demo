import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';

@Component({
  selector: 'app-dom-pipe1',
  templateUrl: './pipe1.component.html',
})
export class DomPipe1Component {
  constructor(private http: _HttpClient, private modal: ModalHelper) { }
  count = 1;
  name = 'Angular';

  userList = [
    { name: 'SPA', points: 1000 },
    { name: 'HTML', points: 850 },
    { name: 'Angular', points: 12250 },
    { name: 'jQuery', points: 1123 },
    { name: 'C Sharp', points: 85 },
    { name: 'Java', points: 1187 },
    { name: 'Javascript', points: 8150 },
    { name: 'FORTRAN', points: 340 },
    { name: 'F Sharp', points: 8150 },
    { name: 'CSS', points: 8150 }];

  getTitle(points) {
    console.log('called' + this.count++);

    if (points < 1000)
      return 'beginner';
    else
      return 'expert';
  }

}
