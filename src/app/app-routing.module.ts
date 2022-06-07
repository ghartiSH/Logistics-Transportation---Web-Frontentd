import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { AdsComponent } from './pages/ads/ads.component';
import { AirComponent } from './pages/air/air.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { FactComponent } from './pages/fact/fact.component';
import { GlobalComponent } from './pages/global/global.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LogisticsComponent } from './pages/logistics/logistics.component';
import { NewsComponent } from './pages/news/news.component';
import { OverlandComponent } from './pages/overland/overland.component';
import { PeopleComponent } from './pages/people/people.component';
import { ProjectComponent } from './pages/project/project.component';
import { SeaComponent } from './pages/sea/sea.component';
import { TimelineComponent } from './pages/timeline/timeline.component';
import { ValueComponent } from './pages/value/value.component';
import { WarehousingComponent } from './pages/warehousing/warehousing.component';

const routes: Routes = [
  
  {path:"home" , component:HomeComponent},
  {path:"aboutus", component:AboutusComponent},
  {path:"timeline", component:TimelineComponent},
  {path:"customers", component:CustomersComponent},
  {path:"logistics", component:LogisticsComponent},
  {path:"warehousing", component:WarehousingComponent},
  {path:"air", component:AirComponent},
  {path:"sea", component:SeaComponent},
  {path:"overland", component:OverlandComponent},
  {path:"project", component:ProjectComponent},
  {path:"value", component:ValueComponent},
  {path:"people", component:PeopleComponent},
  {path:"fact", component:FactComponent},
  {path:"history", component:HistoryComponent},
  {path:"news", component:NewsComponent},
  {path:"ads", component:AdsComponent},
  {path:"contact", component:ContactComponent},
  {path:"global", component:GlobalComponent},

  {path:"", redirectTo:"/home", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
