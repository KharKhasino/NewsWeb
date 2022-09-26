import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'


@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  data: any = [];
  ngOnInit(): void {
    this._service.techNews().subscribe((res) => {
      for (const item of res.articles) {
        if (item.urlToImage) {
          this.data.push(item);
        }
      }

    })
  }

}
