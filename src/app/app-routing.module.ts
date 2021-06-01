import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BanquetHallFirstComponent } from './components/banquet-hall-first/banquet-hall-first.component';
import { BanquetHallSecondComponent } from './components/banquet-hall-second/banquet-hall-second.component';

const routes: Routes = [
  { path: 'first-hall', component: BanquetHallFirstComponent},
  { path: 'second-hall', component: BanquetHallSecondComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
