import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lightbox',
  templateUrl: './lightbox.component.html',
  styleUrls: ['./lightbox.component.css']
})
export class LightboxComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }
  link;
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.link = params['link']
    });
  }

  clickHandler(){
    this.router.navigate([{ outlets: { 'popup': null } }]);
  }

}
