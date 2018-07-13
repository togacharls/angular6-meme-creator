import {Component} from '@angular/core';
import {MemeService} from './meme.service';
import {Meme} from './meme.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  meme: Meme;

  constructor(private memeService: MemeService) {
    this.loadData();
  }

  loadData(): void {
    this.memeService.loadData();
    this.meme = this.memeService.meme;
  }
}
