import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeFormComponent } from './meme-form.component';
import {FormsModule} from '@angular/forms';
import {isString} from 'util';
import {Meme} from '../meme.model';

describe('MemeFormComponent', () => {
  let component: MemeFormComponent;
  let fixture: ComponentFixture<MemeFormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeFormComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeFormComponent);
    component = fixture.componentInstance;
    component.meme = new Meme();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('each of its placeholders should be string', () => {
    Object.keys(component.placeholders).forEach((key) => expect(isString(component.placeholders[key])));
  });
});
