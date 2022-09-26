import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from './service/newsapiservices.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private service: NewsapiservicesService) { }
  title = 'NewsWeb';

  headings: any = []


  ngOnInit() {
    this.service.topHeading().subscribe((res) => {
      this.headings = res.articles
    })
  }
}
