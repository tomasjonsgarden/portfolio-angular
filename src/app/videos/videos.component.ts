import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  @Input() album;
  loaded: boolean;
  videos: object;

  constructor(private dataService: DataService, private router : Router) {

  }

  ngOnInit() {
    this.dataService.getVideos(this.album).subscribe((videos) => {
      this.videos = videos;
      this.loaded = true;
    })
  }

  clickHandler(link) {
    this.router.navigate([{ outlets: { 'popup': ['lightbox', 'video', encodeURI(link)] } }]);
  }
}
