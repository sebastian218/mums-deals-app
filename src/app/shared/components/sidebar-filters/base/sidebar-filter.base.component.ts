import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSideNav } from 'src/app/core/root-store/side-nav-store/side-nav-store.actions';
import { ISideNavStore } from 'src/app/core/root-store/side-nav-store/side-nav-store.redurcer';
import * as fromProductSoreSelectors from '../../../../pages/products-dashboard/store/products-store.selectors';
import * as fromProductStoreActions from '../../../../pages/products-dashboard/store/products-store.actions';
import { Observable, Subject } from 'rxjs';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { filter, map, takeUntil } from 'rxjs/operators';
import { MatSliderChange } from '@angular/material/slider';


@Component({ template: '' })
export class SibeBareFiltersBaseComponent implements OnInit, OnDestroy {

  typesOptions$: Observable<Set<string>> = this.store.select(fromProductSoreSelectors.selectTypes);
  selectedTypes$: Observable<Set<string>> = this.store.select(fromProductSoreSelectors.selectSelectedTypes);
  selectedTypes: Set<string> = new Set();
  destroy$ = new Subject<any>();

  pricerange$: Observable<Array<number>> = this.store.select(fromProductSoreSelectors.selectPriceRange);
  selectedPicerange$: Observable<Array<number>> = this.store.select(fromProductSoreSelectors.selecSelectedtPriceRange);
  priceRange: Array<number> = [];
  selectedRange: number = 0

  constructor(protected store: Store<ISideNavStore>) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  ngOnInit(): void {
    this.setSelectedTypesFromStore();
    this.setPiceRange();
    this.setSelectdPiceRangeFromStore();
  }

  handleClose(): void {
    this.store.dispatch(toggleSideNav());
  }

  handleCheck(e: MatCheckboxChange, item: any): void {
    if (e.checked) {
      this.selectedTypes.add(item)
    } else {
      this.selectedTypes.delete(item);
    }
    this.store.dispatch(fromProductStoreActions.fetchProductsByType({ types: this.selectedTypes }));
  }

  setSelectedTypesFromStore(): void {
    this.selectedTypes$.pipe(
      takeUntil(this.destroy$),
      map(types => {
        this.selectedTypes = types;
      }))
      .subscribe();
  }

  handlePriceChange(e: MatSliderChange) {
    const min = this.priceRange[0];
    const max = e.value as number;
    this.selectedRange = max;
    this.store.dispatch(fromProductStoreActions.fetchProductsByPrice({ range: [min, max] }));
  }
  setPiceRange() {
    this.pricerange$.pipe(
      takeUntil(this.destroy$),
      filter(range => range.length > 0),
      map(range => {
        this.priceRange = range;
      })
    ).subscribe();
  }

  setSelectdPiceRangeFromStore() {
    this.selectedPicerange$.pipe(
      takeUntil(this.destroy$),
      filter(range => range.length > 0),
      map(range => {
        this.selectedRange = range[1];
      })
    ).subscribe();
  }

}