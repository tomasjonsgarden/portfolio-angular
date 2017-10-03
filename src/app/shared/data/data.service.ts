import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class DataService {


  photos = [];
  type;
  lightbox: Subject<{ lightbox: boolean, type: string }> = new Subject();
  videos = {
    '2329080': [],
    '2329074': [],
    '2334700': [],
    '3674768': [],
  };
  activeVideos;
  activePhotos;
  activePhotoIndex;
  activeVideoIndex;
  videoParams = new HttpParams()
    .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
    .set('per_page', '50')
    .set('sort', 'manual');
  photoParams = new HttpParams()
    .set('alt', 'json')
    .set('kind', 'photo')

  constructor(private http: HttpClient) { }

  goNextVideo() {
    if (0 <= this.activeVideoIndex + 1 && this.activeVideoIndex + 1 < this.activeVideos.length) {
      this.activeVideoIndex = this.activeVideoIndex + 1;
    }
  }
  goNextPhoto() {
    if (0 <= this.activePhotoIndex + 1 && this.activePhotoIndex + 1 < this.activePhotos.length) {
      this.activePhotoIndex = this.activePhotoIndex + 1;
    }
  }

  goPrevVideo() {
    if (0 <= this.activeVideoIndex - 1 && this.activeVideoIndex - 1 < this.activeVideos.length) {
      this.activeVideoIndex = this.activeVideoIndex - 1;
    }
  }

  goPrevPhoto() {
    if (0 <= this.activePhotoIndex - 1 && this.activePhotoIndex - 1 < this.activePhotos.length) {
      this.activePhotoIndex = this.activePhotoIndex - 1;
    }
  }

  getVideos(album) {
    if (!this.videos[album].length) {
      return this.http.get(`https://api.vimeo.com/me/albums/${album}/videos`, { params: this.videoParams }).map((response: any) => {
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

  getPhotos(orientation) {
    if (!this.photos.length) {
      return this.http.get(`https://picasaweb.google.com/data/feed/base/user/115234932010059601425/albumid/6218961437089181137`, { params: this.photoParams }).map((response: any) => {
        this.photos = response.feed.entry;
        if (orientation === 'landscape') {
          return response.feed.entry.filter((entry) => {
            return entry.media$group.media$content[0].width > entry.media$group.media$content[0].height;
          });
        } else if (orientation === 'portrait') {
          return response.feed.entry.filter((entry) => {
            return entry.media$group.media$content[0].width < entry.media$group.media$content[0].height;
          });
        } else {
          return response.feed.entry;
        }
      });
    } else {
      return new Observable((observer) => {
        if (orientation === 'landscape') {
          observer.next(this.photos.filter((entry) => {
            return entry.media$group.media$content[0].width > entry.media$group.media$content[0].height;
          }))
        } else if (orientation === 'portrait') {
          observer.next(this.photos.filter((entry) => {
            return entry.media$group.media$content[0].width < entry.media$group.media$content[0].height;
          }))
        } else {
          observer.next(this.photos);
        }
      });
    }
  }
}
