import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private service:NewsapiservicesService) { }

  ngOnInit(): void {
  }

  searchText: string ="";

  Search() {
    this.service.SearchText(this.searchText);
    this.router.navigateByUrl('/search');
  }

}
