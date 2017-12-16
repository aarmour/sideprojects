import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'trl-trail-conditions-edit-container',
  templateUrl: './trail-conditions-edit-container.component.html',
  styleUrls: ['./trail-conditions-edit-container.component.scss']
})
export class TrailConditionsEditContainerComponent {

  date = new Date();

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }

  selectToday() {
    this.date = new Date();
  }
}
