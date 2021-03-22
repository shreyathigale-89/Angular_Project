import { AppComponent } from './app.component';

import { SportNewsComponent } from './sport-news/sport-news.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:TopheadingComponent},  //Home
  {path:'tech',component:TechnewsComponent}, //technews 
  {path:'business',component:BusinessnewsComponent}, //Business
  {path:'sport',component:SportNewsComponent}, //Sports

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
