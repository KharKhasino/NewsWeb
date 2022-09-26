import { Component, OnInit } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-localnews',
  templateUrl: './localnews.component.html',
  styleUrls: ['./localnews.component.css']
})
export class LocalnewsComponent implements OnInit {

  constructor(private _service:NewsapiservicesService) { }

  data: any = []
  ngOnInit(): void {
    this._service.localNews().subscribe((res) => {
      this.data = res.articles
    })
  }

}
