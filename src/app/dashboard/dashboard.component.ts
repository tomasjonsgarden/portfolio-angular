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

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getFeaturedVideos().subscribe((videos)=>{
      this.featuredVideos = videos;
      this.featuredVideosLoaded = true;
    });
  }

}
