import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NamesViewComponent} from './names-view/names-view.component';
import {FirstViewComponent} from './first-view/first-view.component';
import {ContactComponent} from './contact/contact.component';
import {ApiComponent} from './api/api.component';

const routes: Routes = [
{path:'names', component: NamesViewComponent},
{path:'api', component: ApiComponent},
{path:'contact', component: ContactComponent},
{path:"**" ,component: FirstViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
