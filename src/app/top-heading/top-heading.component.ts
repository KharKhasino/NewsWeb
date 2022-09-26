import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent implements OnInit {

  constructor(private _service: NewsapiservicesService, config: NgbCarouselConfig) {
    config.interval = 3000;
    config.keyboard = true;
    config.pauseOnHover = true;
  }

  data: any = [];
  ngOnInit(): void {
    this._service.topHeading().subscribe((result) => {
      for (const item of result.articles) {
        if (item.urlToImage) {
          this.data.push(item);
        }
      }

    })
  }

}
