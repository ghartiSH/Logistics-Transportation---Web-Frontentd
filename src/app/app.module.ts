import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import { GoogleMapsModule } from '@angular/google-maps'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { LogisticsComponent } from './pages/logistics/logistics.component';
import { WarehousingComponent } from './pages/warehousing/warehousing.component';
import { AirComponent } from './pages/air/air.component';
import { SeaComponent } from './pages/sea/sea.component';
import { OverlandComponent } from './pages/overland/overland.component';
import { ProjectComponent } from './pages/project/project.component';
import { ValueComponent } from './pages/value/value.component';
import { PeopleComponent } from './pages/people/people.component';
import { FactComponent } from './pages/fact/fact.component';
import { HistoryComponent } from './pages/history/history.component';
import { NewsComponent } from './pages/news/news.component';
import { AdsComponent } from './pages/ads/ads.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GlobalComponent } from './pages/global/global.component';
import { RequestComponent } from './pages/request/request.component';
import { TrackingComponent } from './pages/tracking/tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    TimelineComponent,
    CustomersComponent,
    LogisticsComponent,
    WarehousingComponent,
    AirComponent,
    SeaComponent,
    OverlandComponent,
    ProjectComponent,
    ValueComponent,
    PeopleComponent,
    FactComponent,
    HistoryComponent,
    NewsComponent,
    AdsComponent,
    ContactComponent,
    GlobalComponent,
    RequestComponent,
    TrackingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatProgressBarModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatGridListModule,
    MatSelectModule,
    MatRadioModule,
    MatDialogModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
