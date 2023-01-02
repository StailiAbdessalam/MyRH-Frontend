import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchBarComponent } from './job-search-bar.component';

describe('JobSearchBarComponent', () => {
  let component: JobSearchBarComponent;
  let fixture: ComponentFixture<JobSearchBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSearchBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
