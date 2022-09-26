import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import {NewsapiservicesService} from '../app/service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
import { SearchedComponent } from './searched/searched.component'
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { LocalnewsComponent } from './localnews/localnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechnewsComponent,
    SearchedComponent,
    HeaderComponent,
    HomeGridComponent,
    BusinessnewsComponent,
    HealthnewsComponent,
    LocalnewsComponent,
    SciencenewsComponent,
    SportsnewsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
