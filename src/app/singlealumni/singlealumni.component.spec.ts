import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglealumniComponent } from './singlealumni.component';

describe('SinglealumniComponent', () => {
  let component: SinglealumniComponent;
  let fixture: ComponentFixture<SinglealumniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglealumniComponent]
    });
    fixture = TestBed.createComponent(SinglealumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
