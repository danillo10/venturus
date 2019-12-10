import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  url: string = 'https://api.imgur.com/3/gallery/search/?q=cats';
  token: string = '1ceddedc03a5d71';
  headers = {"Authorization": "Client-ID 1ceddedc03a5d71"};

  constructor(public http: HttpClient) {}

  getPhotos(){
    return this.http.get(this.url, {headers: this.headers})
    .pipe(res => res)
  }

}
