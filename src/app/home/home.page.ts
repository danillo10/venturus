import { Component } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  size: number = 12;
  limit: number = 9;
  photos: Array<any> = [];

  constructor(public photoService: PhotoService) {}

  ionViewDidEnter(){
    this.getPhotos()
  }

  getPhotos(){
    this.photoService.getPhotos()
    .subscribe((photos:any)=>{
      this.photos = photos.data.slice(0,this.limit);
      console.log(this.photos);
    })
  }

  show(n){
    if (n == 1) n = 12;
    if (n == 2) n = 6;
    if (n == 3) n = 4;
    this.size = n;
  }

}
