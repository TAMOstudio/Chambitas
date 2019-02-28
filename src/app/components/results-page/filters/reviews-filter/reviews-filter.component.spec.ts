import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsFilterComponent } from './reviews-filter.component';

describe('ReviewsFilterComponent', () => {
  let component: ReviewsFilterComponent;
  let fixture: ComponentFixture<ReviewsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
