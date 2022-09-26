import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class NewsapiservicesService {

  constructor(private http: HttpClient) { }


  private searchInp = new BehaviorSubject<string>("");
  currentSearch = this.searchInp.asObservable();

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=0db1c352561c4dceb8a910a514320b3f"

  TechnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=0db1c352561c4dceb8a910a514320b3f"
  SciencenewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=0db1c352561c4dceb8a910a514320b3f"
  HealthnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&country=gb&category=health&apiKey=0db1c352561c4dceb8a910a514320b3f"
  BusinessnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=0db1c352561c4dceb8a910a514320b3f"
  SportsnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=gb&category=sports&apiKey=0db1c352561c4dceb8a910a514320b3f"
  LocalnewsApiUrl = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=0db1c352561c4dceb8a910a514320b3f"

  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }

  businessNews(): Observable<any> {
    return this.http.get(this.BusinessnewsApiUrl);
  }
  scienceNews(): Observable<any> {
    return this.http.get(this.SciencenewsApiUrl);
  }
  healthNews(): Observable<any> {
    return this.http.get(this.HealthnewsApiUrl);
  }
  techNews(): Observable<any> {
    return this.http.get(this.TechnewsApiUrl);
  }
  sportsNews(): Observable<any> {
    return this.http.get(this.SportsnewsApiUrl);
  }
  localNews(): Observable<any> {
    return this.http.get(this.LocalnewsApiUrl);
  }
   SearchText(txt: string) {
    this.searchInp.next(txt);
  }
  SearchResults(searchText: string): Observable<any> {
    return this.http.get(`https://newsapi.org/v2/top-headlines?q=${searchText}&apiKey=0db1c352561c4dceb8a910a514320b3f`);
  }

}
