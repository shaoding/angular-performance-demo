import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { DomRoutingModule } from './dom-routing.module';
import { DomPipe1Component } from './pipe1/pipe1.component';
import { DomPipe2Component } from './pipe2/pipe2.component';
import { DomTrackby1Component } from './trackby1/trackby1.component';
import { DomTrackby2Component } from './trackby2/trackby2.component';
import { DomMemoize1Component } from './memoize1/memoize1.component';
import { DomMemoize2Component } from './memoize2/memoize2.component';
import { RankPipe } from './pipe2/rank.pipe';
import { RankPipe2 } from './memoize2/rank.pipe';

const COMPONENTS = [
  RankPipe,
  RankPipe2,
  DomPipe1Component,
  DomPipe2Component,
  DomTrackby1Component,
  DomTrackby2Component,
  DomMemoize1Component,
  DomMemoize2Component];
const COMPONENTS_NOROUNT = [];

@NgModule({
  imports: [
    SharedModule,
    DomRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
  entryComponents: COMPONENTS_NOROUNT
})
export class DomModule { }
