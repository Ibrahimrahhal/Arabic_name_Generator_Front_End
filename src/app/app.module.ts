import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {NamesService} from './names.service';
import {HttpClientModule} from '@angular/common/http';
import { FirstViewComponent } from './first-view/first-view.component';
import { NamesViewComponent } from './names-view/names-view.component'
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FirstViewComponent,
    NamesViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [NamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
