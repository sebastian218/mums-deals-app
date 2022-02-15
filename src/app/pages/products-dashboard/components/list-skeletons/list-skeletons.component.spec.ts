import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSkeletonsComponent } from './list-skeletons.component';

describe('ListSkeletonsComponent', () => {
  let component: ListSkeletonsComponent;
  let fixture: ComponentFixture<ListSkeletonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListSkeletonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSkeletonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
