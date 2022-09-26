import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-healthnews',
  templateUrl: './healthnews.component.html',
  styleUrls: ['./healthnews.component.css']
})
export class HealthnewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }

  data:any = []
  ngOnInit(): void {
    this._service.healthNews().subscribe((res) => {
      for (const item of res.articles) {
        if (item.urlToImage) {
          this.data.push(item);
        }
      }
    })
  }

}
