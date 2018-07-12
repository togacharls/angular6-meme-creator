import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  imgSrc: string;
  aboveText: string;
  belowText: string;
  constructor (private http: HttpClient) {}
  public loadData () {
    this.imgSrc = 'https://sdtimes.com/wp-content/uploads/2018/04/angular.png';
    this.aboveText = 'Above Text';
    this.belowText = 'Below Text';
  }
  public getData() {
    return {
      imgSrc: this.imgSrc,
      aboveText: this.aboveText,
      belowText: this.belowText
    };
  }
  public imgRequest () {
    return this.http.get(this.imgSrc);
  }
}
