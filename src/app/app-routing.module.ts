import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NamesViewComponent} from './names-view/names-view.component';
const routes: Routes = [
{path:'names', component: NamesViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
