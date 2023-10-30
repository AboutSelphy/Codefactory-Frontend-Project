import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCareerComponent } from './single-career.component';

describe('SingleCareerComponent', () => {
  let component: SingleCareerComponent;
  let fixture: ComponentFixture<SingleCareerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleCareerComponent]
    });
    fixture = TestBed.createComponent(SingleCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
