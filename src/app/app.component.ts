import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { map, skip, takeUntil } from 'rxjs/operators';
import { ISideNavStore } from './core/root-store/side-nav-store/side-nav-store.redurcer';
import { selectShowSideNav } from './core/root-store/side-nav-store/side-nav-store.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  private destroy$ = new Subject<any>();

  @ViewChild('drawer', { static: true }) sideNavMobile: MatDrawer | undefined;

  constructor(private store: Store<ISideNavStore>) {

  }

  ngOnInit(): void {
    this.handleSideNav();
  }
  
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }

  handleSideNav() {
    this.store.select(selectShowSideNav).pipe(
      skip(1),
      takeUntil(this.destroy$),
      map((show: boolean) => {
        this.sideNavMobile?.toggle();
      })
    ).subscribe();
  }

}
