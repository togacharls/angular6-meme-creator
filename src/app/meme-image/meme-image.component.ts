import {Component, Input} from '@angular/core';
import {MemeService} from '../meme.service';

@Component({
  selector: 'app-meme-image',
  templateUrl: './meme-image.component.html',
  styleUrls: ['./meme-image.component.css']
})
export class MemeImageComponent {

   _imgSrc: string;
   _aboveText: string;
   _belowText: string;
   constructor(private memeService: MemeService) {}
  @Input()
  get imgSrc () {
    return this._imgSrc;
  }
  set imgSrc (newVal) {
    this.memeService.imgRequest().subscribe(() => console.log(newVal), () => this._imgSrc = this.memeService.notFoundImg);
  }
  @Input()
  get aboveText () {
    return this._aboveText;
  }
  set aboveText (newVal) {
    this._aboveText = newVal;
  }
  @Input()
  get belowText () {
    return this._belowText;
  }
  set belowText (newVal) {
    this._belowText = newVal;
  }
}
