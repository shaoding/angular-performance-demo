import { Component, OnInit, ViewChild } from '@angular/core';
import { _HttpClient, ModalHelper } from '@delon/theme';
import { STColumn, STComponent } from '@delon/abc';
import { SFSchema } from '@delon/form';

@Component({
  selector: 'app-dom-trackby1',
  templateUrl: './trackby1.component.html',
})
export class DomTrackby1Component {
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

}
