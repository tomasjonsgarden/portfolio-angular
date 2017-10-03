import { Component } from '@angular/core';

import { DataService } from './shared/data/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lightbox;
  constructor(private dataService: DataService) {
    this.dataService.lightbox.subscribe((object)=>{
      this.lightbox = object.lightbox;
      this.dataService.type = object.type;
    });
  }
}
