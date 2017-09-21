import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() album;
  loaded: boolean;
  videos: object;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getVideos(this.album).subscribe((videos) => {
      this.videos = videos;
      this.loaded = true;
    })
  }

}
