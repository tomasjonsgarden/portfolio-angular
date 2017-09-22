import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../shared/data/data.service';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input() album;
  videos;
  loaded;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getVideos(this.album).subscribe((videos) => {
      videos[0]['active'] = true;
      this.videos = videos;
      this.loaded = true;
    })
  }
  onChangeImage(index) {
    console.log(index)
    this.videos.map((video) => {
      video['active'] = false;
    });
    this.videos[index]['active'] = true;
  }

}
