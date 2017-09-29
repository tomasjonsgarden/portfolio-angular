import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/Rx'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DataService {

  commercialVideos = [];
  narrativeVideos = [];
  featuredVideos = [];
  jumbotronVideos = [];

  constructor(private http: HttpClient) { }

  getVideos(album) {
    let params = new HttpParams()
      .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
      .set('per_page', '50')
      .set('sort', 'manual');
    return this.http.get(`https://api.vimeo.com/me/albums/${album}/videos`, { params: params }).map((response: any) => {
      response.data.map((video) => {
        video.files.sort(function (a, b) {
          return b.width - a.width
        })
      });

      return response.data;
    });
  }

  getCommercialVideos() {
    if (!this.commercialVideos.length) {
      let params = new HttpParams()
        .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
        .set('per_page', '50')
        .set('sort', 'manual');
      return this.http.get(`https://api.vimeo.com/me/albums/2329080/videos`, { params: params }).map((response: any) => {
        response.data.map((video) => {
          video.files.sort(function (a, b) {
            return b.width - a.width
          })
        });
        this.commercialVideos = response.data;
        return response.data;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.commercialVideos)
      });
    }
  }

  getNarrativeVideos() {
    if (!this.narrativeVideos.length) {
      let params = new HttpParams()
        .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
        .set('per_page', '50')
        .set('sort', 'manual');
      return this.http.get(`https://api.vimeo.com/me/albums/2329074/videos`, { params: params }).map((response: any) => {
        response.data.map((video) => {
          video.files.sort(function (a, b) {
            return b.width - a.width
          })
        });
        this.narrativeVideos = response.data;
        return response.data;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.narrativeVideos)
      });
    }
  }

  getFeaturedVideos() {
    if (!this.featuredVideos.length) {
      let params = new HttpParams()
        .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
        .set('per_page', '9')
        .set('sort', 'manual');
      return this.http.get(`https://api.vimeo.com/me/albums/2334700/videos`, { params: params }).map((response: any) => {
        response.data.map((video) => {
          video.files.sort(function (a, b) {
            return b.width - a.width
          })
        });
        this.featuredVideos = response.data;
        return response.data;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.featuredVideos)
      });
    }
  }

  getJumbotronVideos() {
    if (!this.jumbotronVideos.length) {
      let params = new HttpParams()
        .set('access_token', '5329144dd1b697d05bbf580d3b10c6d3')
        .set('per_page', '9')
        .set('sort', 'manual');
      return this.http.get(`https://api.vimeo.com/me/albums/3674768/videos`, { params: params }).map((response: any) => {
        response.data.map((video) => {
          video.files.sort(function (a, b) {
            return b.width - a.width
          })
        });
        this.jumbotronVideos = response.data;
        return response.data;
      });
    } else {
      return new Observable((observer) => {
        observer.next(this.jumbotronVideos)
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
