import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoriesComponent } from './catergories.component';

describe('CatergoriesComponent', () => {
  let component: CatergoriesComponent;
  let fixture: ComponentFixture<CatergoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatergoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatergoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
