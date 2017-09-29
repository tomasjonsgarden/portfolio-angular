import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-narrative',
  templateUrl: './narrative.component.html',
  styleUrls: ['./narrative.component.css']
})
export class NarrativeComponent implements OnInit {

  loaded = false;
  videos: any;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.dataService.getVideos('2329080').subscribe((videos)=>{
      this.videos = videos;
      this.loaded = true;
    });
  }

}

