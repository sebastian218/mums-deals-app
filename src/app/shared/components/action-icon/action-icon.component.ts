import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-icon',
  templateUrl: './action-icon.component.html',
  styleUrls: ['./action-icon.component.scss']
})
export class ActionIconComponent implements OnInit {

  @Input() iconName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
