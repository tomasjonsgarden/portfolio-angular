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
  photos: object;

  constructor(private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
    this.dataService.getPhotos().subscribe((photos) => {
      this.photos = photos;
      this.loaded = true;
    })
  }

  clickHandler(link){
    this.router.navigate([{ outlets: { 'popup': ['lightbox', encodeURI(link)] } }]);
  }
}

