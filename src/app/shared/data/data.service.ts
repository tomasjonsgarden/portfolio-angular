import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  videos= {
    '2329080': [],
    '2329074': [],
    '2334700': [],
    '3674768': [],
  };

  params = new HttpParams()
    .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
    .set('per_page', '50')
    .set('sort', 'manual');

  constructor(private http: HttpClient) { }

  getVideos(album) {
    if (!this.videos[album].length) {

      return this.http.get(`https://api.vimeo.com/me/albums/${album}/videos`, { params: this.params }).map((response: any) => {
        response.data.map((video) => {
          video.files.sort(function (a, b) {
            return b.width - a.width
          })
        });
        this.videos[album] = response.data;
        return response.data;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.videos[album])
      });
    }
  }

  getPhotos() {
    let params = new HttpParams()
      .set('alt', 'json')
      .set('kind', 'photo')
    return this.http.get(`https://picasaweb.google.com/data/feed/base/user/115234932010059601425/albumid/6218961437089181137`, { params: params }).map((response: any) => {
      return response.feed.entry;
    });
  }

  getLandscapePhotos() {
    let params = new HttpParams()
      .set('alt', 'json')
      .set('kind', 'photo')
    return this.http.get(`https://picasaweb.google.com/data/feed/base/user/115234932010059601425/albumid/6218961437089181137`, { params: params }).map((response: any) => {
      return response.feed.entry.filter((entry) => {
        return entry.media$group.media$content[0].width > entry.media$group.media$content[0].height;
      });
    });
  }

  getPortraitPhotos() {
    let params = new HttpParams()
      .set('alt', 'json')
      .set('kind', 'photo')
    return this.http.get(`https://picasaweb.google.com/data/feed/base/user/115234932010059601425/albumid/6218961437089181137`, { params: params }).map((response: any) => {
      return response.feed.entry.filter((entry) => {
        return entry.media$group.media$content[0].width < entry.media$group.media$content[0].height;
      });
    });
  }

}
