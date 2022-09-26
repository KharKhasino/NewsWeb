import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-sciencenews',
  templateUrl: './sciencenews.component.html',
  styleUrls: ['./sciencenews.component.css']
})
export class SciencenewsComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  data: any = []
  ngOnInit(): void {
    this._service.scienceNews().subscribe((res) => {
      for (const item of res.articles) {
        if (item.urlToImage) {
          this.data.push(item);
        }
      }
    })
  }

}
