import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule, Routes} from "@angular/router";

import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './main-container/header/header.component';
import { HeadlineComponent } from './main-container/headline/headline.component';
import { GaleryComponent } from './main-container/galery/galery.component';
import { ClientComponent } from './main-container/client/client.component';


@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    FooterComponent,
    HeaderComponent,
    HeadlineComponent,
    GaleryComponent,
    ClientComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
