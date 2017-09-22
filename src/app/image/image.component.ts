import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  loaded: boolean = false;
  
  @Input() src: string;

  constructor() { }

  ngOnInit() {
  }

  onLoad(){
    this.loaded = true;
  }


}
