import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
// import { UserComponent } from './user/user.component';
import {SearchComponent}from './search/search.component';

import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
