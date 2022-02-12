import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { SibeBareFiltersBaseComponent } from './base/sidebar-filter.base.component';

@Component({
  selector: 'app-sidenav-filters',
  templateUrl: './sidebar-filters.component.html',
  styleUrls: ['./sidebar-filters.component.scss']
})
export class SidebarFiltersComponent extends SibeBareFiltersBaseComponent {

  constructor(protected store: Store<any>) {
    super(store)
  }

}
