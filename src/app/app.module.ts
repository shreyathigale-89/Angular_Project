import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { TopheadingComponent } from './topheading/topheading.component';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { SportNewsComponent } from './sport-news/sport-news.component';


@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    TechnewsComponent,
    BusinessnewsComponent,
    SportNewsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
