import { Observable } from 'rxjs/Observable';

import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'trl-trails-search-input',
  templateUrl: './trails-search-input.component.html',
  styleUrls: ['./trails-search-input.component.scss']
})
export class TrailsSearchInputComponent {

  searchInputControl: FormControl = new FormControl();

  @Input() options: Observable<any>;
  @Output() valueChanges = this.searchInputControl.valueChanges;

  constructor() { }

  getDisplay(item: any): string {
    return item ? item.name : item;
  }

}
