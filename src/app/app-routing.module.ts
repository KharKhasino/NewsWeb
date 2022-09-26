import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';
import { HomeGridComponent } from './home-grid/home-grid.component';
import { LocalnewsComponent } from './localnews/localnews.component';
import { SciencenewsComponent } from './sciencenews/sciencenews.component';
import { SearchedComponent } from './searched/searched.component';
import { SportsnewsComponent } from './sportsnews/sportsnews.component';
import { TechnewsComponent } from './technews/technews.component';

const routes: Routes = [
  { path: '', component: HomeGridComponent },
  { path: 'search', component: SearchedComponent },
  { path: 'local', component: LocalnewsComponent },
  { path: 'business', component: BusinessnewsComponent },
  { path: 'health', component: HealthnewsComponent },
  { path: 'science', component: SciencenewsComponent },
  { path: 'sports', component: SportsnewsComponent },
  { path: 'tech', component: TechnewsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
