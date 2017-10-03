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
  type = 'video';
  currentTime: number = 0;
  duration: number = 1;
  video;
  ngOnInit() {
    this.type = this.dataService.type;
    if (this.dataService.type === 'video') {
      this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    } else {
      this.link = this.dataService.activePhotos[this.dataService.activePhotoIndex].media$group.media$thumbnail[2].url;
    }
  }

  getCurrentTime() {
    let value = this.currentTime / this.duration * 100 + '';
    return value === 'NaN' ? 0 : value;
  }
  prevHandler() {
    this.type = this.dataService.type;
    if (this.dataService.type === 'video') {
      this.dataService.goPrevVideo();
      this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    } else {
      this.dataService.goPrevPhoto();
      this.link = this.dataService.activePhotos[this.dataService.activePhotoIndex].media$group.media$thumbnail[2].url;
    }
  }

  nextHandler() {
    this.type = this.dataService.type;
    if (this.dataService.type === 'video') {
      this.dataService.goNextVideo();
      this.link = this.dataService.activeVideos[this.dataService.activeVideoIndex].files[0].link_secure;
    } else {
      this.dataService.goNextPhoto();
      this.link = this.dataService.activePhotos[this.dataService.activePhotoIndex].media$group.media$thumbnail[2].url;
    }
  }

  clickHandler() {
    this.dataService.lightbox.next({lightbox: false, type: 'video'});
  }

  canplaythroughHandler() {
    this.loaded = true;
  }

  loadHandler() {
    this.loaded = true;
  }

  loadstartHandler() {
    this.loaded = false;
  }

  timeupdateHandler(event) {
    this.video = event.target;
    this.duration = event.target.duration;
    this.currentTime = event.target.currentTime;
  }

  videoClickHandler(event) {
    event.stopPropagation();
    if (event.target.paused) {
      event.target.play();
    } else {
      event.target.pause();
    }
  }
  meterClickHandler(event) {
    event.stopPropagation();
    this.video.currentTime = event.offsetX / event.target.offsetWidth * this.duration;
  }

}
