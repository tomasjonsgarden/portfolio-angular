import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  constructor(private dataService: DataService, private route: ActivatedRoute, private router: Router) { }
  link;
  nextDisabled = false;
  prevDisabled = false;
  loaded = false;
  type;
  currentTime;
  duration;
  video;
  ngOnInit() {
    this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });
  }

  prevHandler() {
    if (0 <= this.dataService.activeVideoIndex - 1 && this.dataService.activeVideoIndex - 1 < this.dataService.activeVideos.length) {
      this.dataService.goPrevVideo();
      this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    }
  }

  nextHandler() {
    if (0 <= this.dataService.activeVideoIndex + 1 && this.dataService.activeVideoIndex + 1 < this.dataService.activeVideos.length) {
      this.dataService.goNextVideo();
      this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    }
  }

  clickHandler() {
    this.router.navigate([{ outlets: { 'popup': null } }]);
  }

  canplaythroughHandler() {
    this.loaded = true;
  }

  loadstartHandler() {
    this.loaded = false;
  }

  timeupdateHandler(event){
    this.video = event.target;
    this.duration = event.target.duration;
    this.currentTime = event.target.currentTime;
  }

  videoClickHandler(event){
    event.stopPropagation();
    if(event.target.paused){
      event.target.play();
    }else {
      event.target.pause();
    }
  }
  meterClickHandler(event){
    event.stopPropagation();
    this.video.currentTime = event.offsetX / event.target.offsetWidth * this.duration;
  }

}
