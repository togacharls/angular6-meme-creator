import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Input() imgSrc: String;
  @Output() imgSrcChange = new EventEmitter<String>();
  @Input() aboveText: String;
  @Output() aboveTextChange = new EventEmitter<String>();
  @Input() belowText: String;
  @Output() belowTextChange = new EventEmitter<String>();
  onChangeImgSrc () {
    this.imgSrcChange.emit(this.imgSrc);
  }
  onChangeAboveText () {
    this.aboveTextChange.emit(this.aboveText);
  }
  onChangeBelowText () {
    this.belowTextChange.emit(this.belowText);
  }
}
