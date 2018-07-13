import {Injectable} from '@angular/core';
import {Meme} from './meme.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {
  meme: Meme;
  notFoundImg: string;

  constructor(private http: HttpClient) {
  }

  public loadData(): void {
    this.meme = new Meme();
    this.meme.imgSrc = 'https://sdtimes.com/wp-content/uploads/2018/04/angular.png';
    this.meme.aboveText = 'Above Text';
    this.meme.belowText = 'Below Text';
    this.notFoundImg = 'http://thetechtemple.com/wp-content/themes/TechNews/images/img_not_available.jpg';
  }

  public imgRequest(): Observable<Object> {
    return this.http.get(this.meme.imgSrc);
  }
}
