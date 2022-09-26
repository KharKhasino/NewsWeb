import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service'


@Component({
  selector: 'app-searched',
  templateUrl: './searched.component.html',
  styleUrls: ['./searched.component.css']
})
export class SearchedComponent implements OnInit {

  constructor(private _service: NewsapiservicesService) { }

  data: any = [];
  ngOnInit() {
    // It's Called Once, but Change Detection calls it every change!
    this._service.currentSearch.subscribe((word) => {
      console.log(word);
      this._service.SearchResults(word).subscribe((res) => {
        console.log(res)
        if(res.totalResults > 0){
          this.data = res.articles;
        }
        else{
          this.data = null;
        }
      });
    })
  }

}
