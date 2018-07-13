import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Meme} from '../meme.model';

const MemeInputPlaceholders = {
  imgSrc: 'Img src...',
  above: 'Above text...',
  below: 'Below text...'
};

@Component({
  selector: 'app-meme-form',
  templateUrl: './meme-form.component.html',
  styleUrls: ['./meme-form.component.css']
})
export class MemeFormComponent {
  placeholders = MemeInputPlaceholders;
  @Input() meme: Meme;
  @Output() memeChange = new EventEmitter<Meme>();

  onChangeMeme(): void {
    this.memeChange.emit(this.meme);
  }
}
