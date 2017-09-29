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
  @Input() videos;

  constructor(private router : Router) {

  }

  ngOnInit() {
    
  }

  clickHandler(link) {
    this.router.navigate([{ outlets: { 'popup': ['lightbox', 'video', encodeURI(link)] } }]);
  }
}
