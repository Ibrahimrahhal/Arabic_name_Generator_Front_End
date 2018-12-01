import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NamesViewComponent} from './names-view/names-view.component';
import {FirstViewComponent} from './first-view/first-view.component';
const routes: Routes = [
{path:'names', component: NamesViewComponent},
{path:"**" ,component: FirstViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
