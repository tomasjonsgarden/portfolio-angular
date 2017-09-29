import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() videos;
  constructor(private router: Router) { }

  ngOnInit() {
    
  }
  onChangeImage(index) {
    console.log(index)
    this.videos.map((video) => {
      video['active'] = false;
    });
    this.videos[index]['active'] = true;
  }

  clickHandler(link) {
    this.router.navigate([{ outlets: { 'popup': ['lightbox', 'video', encodeURI(link)] } }]);
  }
}
