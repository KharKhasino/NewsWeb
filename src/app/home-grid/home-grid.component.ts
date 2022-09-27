import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-grid',
  templateUrl: './home-grid.component.html',
  styleUrls: ['./home-grid.component.css']
})
export class HomeGridComponent implements OnInit {

  constructor() { }

  Categories = [
    { title: "Business News", src: "assets/Images/business.png", desc: "Look for latest business-wise news to help you grow..", link: "business" },
    { title: "Sports News", src: "assets/Images/sports.png", desc: "Watch latest news about your favourite team..", link: "sports" },
    { title: "Technology News", src: "assets/Images/tech.png", desc: "See what's trending in this fast paced world..", link: "tech" },
    { title: "Local News", src: "assets/Images/local.jpg", desc: "Find out what's happening near to you..", link: "local" },
    { title: "Health News", src: "assets/Images/health.png", desc: "Look after yourself and your family..", link: "health" },
    { title: "Science News", src: "assets/Images/science.png", desc: "Science is AwEsOmE! See for yourself..", link: "science" },
  ]
  ngOnInit(): void {
  }

}
