import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridSkeletonsComponent } from './grid-skeletons.component';

describe('GridSkeletonsComponent', () => {
  let component: GridSkeletonsComponent;
  let fixture: ComponentFixture<GridSkeletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridSkeletonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridSkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
