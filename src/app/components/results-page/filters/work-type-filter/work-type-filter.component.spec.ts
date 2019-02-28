import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTypeFilterComponent } from './work-type-filter.component';

describe('WorkTypeFilterComponent', () => {
  let component: WorkTypeFilterComponent;
  let fixture: ComponentFixture<WorkTypeFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTypeFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
