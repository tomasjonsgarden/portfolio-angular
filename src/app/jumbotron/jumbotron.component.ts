import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() videos;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    
  }
  onChangeImage(index) {
    console.log(index)
    this.videos.map((video) => {
      video['active'] = false;
    });
    this.videos[index]['active'] = true;
  }

  clickHandler(videos, index) {
    this.dataService.lightbox.next({lightbox: true, type: 'video'});
    this.dataService.activeVideoIndex = index;
    this.dataService.activeVideos = videos;
  }
}
