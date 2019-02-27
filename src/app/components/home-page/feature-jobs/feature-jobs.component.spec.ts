import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureJobsComponent } from './feature-jobs.component';

describe('FeatureJobsComponent', () => {
  let component: FeatureJobsComponent;
  let fixture: ComponentFixture<FeatureJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
