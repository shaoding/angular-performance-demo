import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomPipe1Component } from './pipe1/pipe1.component';
import { DomPipe2Component } from './pipe2/pipe2.component';
import { DomTrackby1Component } from './trackby1/trackby1.component';
import { DomTrackby2Component } from './trackby2/trackby2.component';
import { DomMemoize1Component } from './memoize1/memoize1.component';
import { DomMemoize2Component } from './memoize2/memoize2.component';

const routes: Routes = [

  { path: 'pipe1', component: DomPipe1Component },
  { path: 'pipe2', component: DomPipe2Component },
  { path: 'trackby1', component: DomTrackby1Component },
  { path: 'trackby2', component: DomTrackby2Component },
  { path: 'memoize1', component: DomMemoize1Component },
  { path: 'memoize2', component: DomMemoize2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomRoutingModule { }
