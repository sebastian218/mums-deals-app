import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { toggleSideNav } from 'src/app/core/root-store/side-nav-store/side-nav-store.actions';
import { ISideNavStore } from 'src/app/core/root-store/side-nav-store/side-nav-store.redurcer';

@Component({
  selector: 'app-sidenav-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss']
})
export class SidebarFiltersComponent implements OnInit {

  constructor(private store: Store<ISideNavStore>) { }

  ngOnInit(): void {
  }

  handleClose() {
    this.store.dispatch(toggleSideNav());
  }

}
