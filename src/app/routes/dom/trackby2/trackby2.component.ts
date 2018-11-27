import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-dom-trackby2',
  templateUrl: './trackby2.component.html',
})
export class DomTrackby2Component {
  collection;
  constructor() {
    this.collection = [
      { id: 'one' },
      { id: 'two' },
      { id: 'three' }
    ];
  }

  getItems() {
    this.collection = [
      { id: 'one' },
      { id: 'two' },
      { id: 'three' },
      { id: 'four' }
    ];
  }

  trackByFuntion(index, item) {
    return index;
  }

}
