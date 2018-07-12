import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  public getData () {
    return {
      imgSrc: 'https://sdtimes.com/wp-content/uploads/2018/04/angular.png',
      aboveText: 'Above Text',
      belowText: 'Below Text'
    };
  }
}
