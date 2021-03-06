import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  loaded: boolean;
  portraitPhotos: object;
  landscapePhotos: object;
  landscapeLoaded;
  portraitLoaded;

  constructor(private dataService: DataService, private router: Router) {
    
  }

  ngOnInit() {
    this.dataService.getPhotos('portrait').subscribe((portraitPhotos) => {
      this.portraitPhotos = portraitPhotos;
      this.portraitLoaded = true;
    })
    this.dataService.getPhotos('landscape').subscribe((landscapePhotos) => {
      this.landscapePhotos = landscapePhotos;
      this.landscapeLoaded = true;
    })
  }


  clickHandler(photos, index){
    // photo.media$group.media$thumbnail[2].url
    this.dataService.lightbox.next({lightbox: true, type: 'photo'});
    this.dataService.activePhotoIndex = index;
    this.dataService.activePhotos = photos;
  }
}

