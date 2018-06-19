import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemeFormComponent } from './meme-form.component';

describe('MemeFormComponent', () => {
  let component: MemeFormComponent;
  let fixture: ComponentFixture<MemeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
