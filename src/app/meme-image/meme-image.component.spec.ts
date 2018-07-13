import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeImageComponent } from './meme-image.component';
import {HttpClientModule} from '@angular/common/http';

describe('MemeImageComponent', () => {
  let component: MemeImageComponent;
  let fixture: ComponentFixture<MemeImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MemeImageComponent],
      imports: [HttpClientModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
