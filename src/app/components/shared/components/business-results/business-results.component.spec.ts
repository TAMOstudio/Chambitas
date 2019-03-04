import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessResultsComponent } from './business-results.component';

describe('BusinessResultsComponent', () => {
  let component: BusinessResultsComponent;
  let fixture: ComponentFixture<BusinessResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
