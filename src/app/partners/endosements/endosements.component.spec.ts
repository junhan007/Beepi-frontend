import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndosementsComponent } from './endosements.component';

describe('EndosementsComponent', () => {
  let component: EndosementsComponent;
  let fixture: ComponentFixture<EndosementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndosementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndosementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
