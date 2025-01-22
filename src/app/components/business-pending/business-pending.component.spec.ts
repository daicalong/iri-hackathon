import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPendingComponent } from './business-pending.component';

describe('BusinessPendingComponent', () => {
  let component: BusinessPendingComponent;
  let fixture: ComponentFixture<BusinessPendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessPendingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
