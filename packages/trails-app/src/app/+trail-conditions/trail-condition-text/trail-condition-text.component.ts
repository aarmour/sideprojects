import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'trl-trail-condition-text',
  templateUrl: './trail-condition-text.component.html',
  styleUrls: ['./trail-condition-text.component.scss']
})
export class TrailConditionTextComponent implements OnChanges {

  @Input() condition: 'Poor' | 'Fair' | 'Good' | 'Unknown' = 'Good';

  private colors = {
    'Poor': 'red',
    'Fair': 'orange',
    'Good': 'green',
    'Unknown': 'gray'
  };
  get color() {
    return this.colors[this.condition];
  }

  ngOnChanges() {
    this.condition = this.condition || 'Unknown';
  }
}
