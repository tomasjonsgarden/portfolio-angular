import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-commercial',
  templateUrl: './commercial.component.html',
  styleUrls: ['./commercial.component.css']
})
export class CommercialComponent implements OnInit {

  loaded = false;
  videos: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNarrativeVideos().subscribe((videos)=>{
      this.videos = videos;
      this.loaded = true;
    });
  }

}
