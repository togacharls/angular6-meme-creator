import {TestBed, async} from '@angular/core/testing';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {MemeImageComponent} from './meme-image/meme-image.component';
import {MemeFormComponent} from './meme-form/meme-form.component';

describe('AppComponent', () => {
  beforeAll(() => {
  });
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MemeImageComponent,
        MemeFormComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
