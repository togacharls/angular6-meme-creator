import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-meme-image',
  templateUrl: './meme-image.component.html',
  styleUrls: ['./meme-image.component.css']
})
export class MemeImageComponent {

  @Input() imgSrc: String;
  @Input() aboveText: String;
  @Input() belowText: String;
}
