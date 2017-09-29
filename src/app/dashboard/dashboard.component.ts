import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  featuredVideosLoaded = false;
  featuredVideos: any;
  jumbotronVideosLoaded = false;
  jumbotronVideos: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getFeaturedVideos().subscribe((videos) => {
      this.featuredVideos = videos;
      this.featuredVideosLoaded = true;
    });

    this.dataService.getJumbotronVideos().subscribe((videos) => {
      videos[0]['active'] = true;
      this.jumbotronVideos = videos;
      this.jumbotronVideosLoaded = true;
    });
  }

}
