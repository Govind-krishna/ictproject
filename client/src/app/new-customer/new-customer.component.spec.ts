import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAuthorComponent } from './new-customer.component';

describe('NewAuthorComponent', () => {
  let component: NewAuthorComponent;
  let fixture: ComponentFixture<NewAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
