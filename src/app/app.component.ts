import { Component } from '@angular/core';
import { MemeService } from './meme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  meme: any;
  constructor (private memeService: MemeService) {
    this.loadData();
  }
  loadData () {
    this.memeService.loadData();
    this.meme = this.memeService.getData();
  }
}
