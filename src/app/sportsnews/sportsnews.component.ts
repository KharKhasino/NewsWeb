import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sportsnews',
  templateUrl: './sportsnews.component.html',
  styleUrls: ['./sportsnews.component.css']
})
export class SportsnewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  data: any = []
  ngOnInit(): void {
    this._service.sportsNews().subscribe((res) => {
      for (const item of res.articles) {
        if (item.urlToImage) {
          this.data.push(item);
        }
      }
    })
  }

}
