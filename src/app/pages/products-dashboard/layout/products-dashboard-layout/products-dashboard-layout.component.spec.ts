import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDashboardLayoutComponent } from './products-dashboard-layout.component';

describe('ProductsDashboardLayoutComponent', () => {
  let component: ProductsDashboardLayoutComponent;
  let fixture: ComponentFixture<ProductsDashboardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsDashboardLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDashboardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
