import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MainContainerComponent} from './main-container/main-container.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './main-container/header/header.component';
import {HeadlineComponent} from './main-container/headline/headline.component';
import {GaleryComponent} from './main-container/galery/galery.component';
import {ClientComponent} from './main-container/client/client.component';
import {HeaderService} from './main-container/header/header.service';
import {ContactComponent} from './main-container/contact/contact.component';
import {InfoComponent} from './main-container/info/info.component';
import {StartpageComponent} from './main-container/startpage/startpage.component';
import {CostComponent} from './main-container/cost/cost.component';
import {ScheduleComponent} from './main-container/schedule/schedule.component';
import { ForParentComponent } from './main-container/for-parent/for-parent.component';

const appRouts: Routes = [
  {path: '', component: StartpageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'gallery', component: GaleryComponent},
  {path: 'forParent', component:ForParentComponent, children: [
      {path: 'info', component: InfoComponent},
      {path: 'schedule',component: ScheduleComponent},
      {path: 'cost', component: CostComponent}
    ]
  },
  {path:"**",redirectTo:""}
];

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    FooterComponent,
    HeaderComponent,
    HeadlineComponent,
    GaleryComponent,
    ClientComponent,
    ContactComponent,
    InfoComponent,
    StartpageComponent,
    CostComponent,
    ScheduleComponent,
    ForParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouts)
  ],
  providers: [
    HeaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
