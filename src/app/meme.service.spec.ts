import { TestBed, inject } from '@angular/core/testing';
import { MemeService } from './meme.service';
import {HttpClientModule} from '@angular/common/http';
import {isObservable} from 'rxjs';
import {isObject, isString} from 'util';

describe('MemeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemeService],
      imports: [HttpClientModule]
    });
  });

  it('should be created', inject([MemeService], (service: MemeService) => {
    expect(service).toBeTruthy();
  }));
  it('should initialize its Meme property', inject([MemeService], (service: MemeService) => {
    service.loadData();
    expect(isObject(service.meme)).toBeTruthy();
    expect(isString(service.meme.imgSrc)).toBeTruthy();
    expect(isString(service.meme.aboveText)).toBeTruthy();
    expect(isString(service.meme.belowText)).toBeTruthy();
  }));
  it('should return an observable', inject([MemeService], (service: MemeService) => {
    service.loadData();
    expect(isObservable(service.imgRequest())).toBeTruthy();
  }));
});
