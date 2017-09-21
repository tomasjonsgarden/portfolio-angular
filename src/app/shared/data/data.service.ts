import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'

@Injectable()
export class DataService {

  videos = {

  }

  constructor(private http: HttpClient) { }

  getVideos(album) {
    console.log(album);
    let params = new HttpParams()
      .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
      .set('per_page', '50')
      .set('sort', 'manual');
    return this.http.get(`https://api.vimeo.com/me/albums/${album}/videos`, { params: params }).map((response: any) => {
      return response.data;
    });
  }

}
